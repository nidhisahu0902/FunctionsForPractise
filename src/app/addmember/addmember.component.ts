import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
 members:{name:string,age:string}={name:'',age:''}
  constructor(public Addservice:ServiceService,public router:Router) { }

  ngOnInit() {
  }

  add()
  {
    let mem={name:this.members.name,age:this.members.age}
    this.Addservice.addmember(mem)
    this.members.name=""
    this.members.age=""
    this.router.navigateByUrl("show")
  }


}
