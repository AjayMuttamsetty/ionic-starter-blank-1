import { Component } from '@angular/core';
import * as moment from 'moment';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DatePage } from '../date/date.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 // minValue: any;
  date:any;
 // maxValue: any;
 // currentDate: any;
  todayDate:any;
  yesterdayDate:any;
  selectedDate:any;
  pastSelectedDate:any;
  pastSelectedYear:any;
  submitFormBoolean:boolean = false;
  dateExample = new Date().toISOString();
  isModalOpen = false;
  modelData: any;
  constructor(public modalController: ModalController,private formBuilder: FormBuilder) {

  }

  feedbackForm = this.formBuilder.group({
    DateTime:['']
  });
  errorControl = this.feedbackForm.controls;


  submitForm()
  {
    this.submitFormBoolean = true;
    var today = new Date();
    this.todayDate = moment(today).format('MM-DD-YYYY');
    this.yesterdayDate = moment(today.setDate(today.getDate()-1)).format('MM-DD-YYYY');
    console.log(this.submitFormBoolean);
  //  this.selectedDate = this.feedbackForm.controls['DateTime'].value;
    this.pastSelectedDate = new Date(this.selectedDate);
    this.pastSelectedDate =  moment(this.pastSelectedDate.setDate(this.pastSelectedDate.getDate()-10)).format('MM-DD-YYYY');
    this.pastSelectedYear = new Date(this.selectedDate);
    this.pastSelectedYear =  moment(this.pastSelectedYear.setFullYear(this.pastSelectedYear.getFullYear()-1,this.pastSelectedYear.getMonth(),this.pastSelectedYear.getDate())).format('MM-DD-YYYY');
    console.log('this.pastSelectedYear',this.pastSelectedYear);
  }

 async getFocus(){
  console.log("Inside gt focus")
    const modal = await this.modalController.create({
      component: DatePage,
      cssClass:'date-modal'
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData.data !== null && modelData.data !== undefined ) {
        this.selectedDate = modelData.data;
        const temp =  moment(this.selectedDate).format('MM-DD-YYYY');
        this.feedbackForm.controls['DateTime'].patchValue(temp);
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();
  }
 
}
