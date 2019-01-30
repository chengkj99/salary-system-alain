import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffInfoComponent } from './info/info.component';

const COMPONENTS = [
  StaffInfoComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    StaffRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class StaffModule { }
