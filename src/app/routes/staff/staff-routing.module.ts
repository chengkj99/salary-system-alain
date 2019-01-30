import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffInfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'info', component: StaffInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
