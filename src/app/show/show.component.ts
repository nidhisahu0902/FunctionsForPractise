import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(public service:ServiceService) { }
  members=[]
  ngOnInit() {

    this.members=this.service.getmember()
  }

  del(i)
{
  this.service.delmem(i)
}
  edit()
  {

  }

}
