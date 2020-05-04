import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllmemberComponent } from './allmember/allmember.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  {path:'',component:AddmemberComponent},
  {path:'show',component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
