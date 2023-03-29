import { Component, OnInit ,Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {
  minValue: any;
  date:any;
  maxValue: any;
  currentDate: any;
  DateTime:any;
  constructor(
    private modalController: ModalController,
  ) {
    this.currentDate = new Date();
    this.minValue = new Date(this.currentDate);
    this.minValue.setDate(this.currentDate.getDate() + 1);
    this.maxValue = new Date(this.minValue);
    this.maxValue.setFullYear(this.minValue.getFullYear() + 5);
    console.log(this.minValue.toString());
    console.log(this.maxValue.toString());
   }
  ngOnInit() { }

  async closeModel() {
    console.log('this.DateTime',this.DateTime);
    const close: string = this.DateTime;
    await this.modalController.dismiss(close);
  }
  minDate()
  {
    return moment(this.minValue).format('YYYY-MM-DD');
  }

  maxDate()
  {
    return moment(this.maxValue).format('YYYY-MM-DD');
  }


}
