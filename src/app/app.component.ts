import { Component, OnInit } from '@angular/core';
import { MobilesService } from './mobiles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Example2';

  mobiles: any = []
  formHeader = "Add mobile"
  mobileName:any;
  showForm = false;
  price:any;
  ram: any;
  storage:any;
  id:any;


  constructor(private _Mob: MobilesService) {
 
   }

  ngOnInit() {
    this.getMobiles()
  }

  getMobiles() {
    this._Mob.fetechMobiles().subscribe(
      (data) => {
        this.mobiles = data
      },
      (error) => {
        console.log(error);

      }
    )
  }

  openForm(data:any) {
    this.showForm = true
    if(data){
      this.mobileName=data.name
      this.price=data.price
      this.storage=data.storage
      this.ram=data.ram
      this.id=data.id
      this.formHeader="Edit Mobile"
    }else{
      this.id=null
      this.formHeader="Add Mobile"
    }
  }


  saveMobile() {
    this.showForm=false;

    let body={
      id:this.id,
      name:this.mobileName,
      price:this.price,
      ram:this.ram,
      storage:this.storage

    }
    if(this.id){
      body['id']=this.id
      this._Mob.putMobile(body).subscribe(
        (res)=>{
          this.getMobiles()
        }
      )
    }else{
      this._Mob.postMobile(body).subscribe(
        (res)=>{
          this.getMobiles()
        },
      )
    }
  }

  closeMobile() {
    this.showForm = false
    this.clearForm()
  }

  clearForm(){
    this.mobileName=null;
    this.price=null;
    this.ram=null;
    this.storage=null
  }

  
AddMobile(){
  this.showForm = true

}

  DeleteMob(id: number) {
    this._Mob.deleteMob1(id).subscribe(
      (res) => {
        this.mobiles = res
        this.getMobiles()
      }
    )
  }

}
