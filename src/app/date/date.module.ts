import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { DatePageRoutingModule } from './date-routing.module';

import { DatePage } from './date.page';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DatePageRoutingModule
  ],
  declarations: [DatePage]
})
export class DatePageModule {}
