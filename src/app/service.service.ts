import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  members=[]
  constructor() { }


  addmember(member)
  {
      this.members.push(member)
      console.log(this.members)
  }
  getmember()
  {
    return this.members
  }
  delmem(index)
  {
    this.members.splice(index,1)
  }
}
