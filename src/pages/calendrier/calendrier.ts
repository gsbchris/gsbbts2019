import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the CalendrierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-calendrier',
  templateUrl: 'calendrier.html',
})
export class CalendrierPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController ) {
  }

  addEvent(){

    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay})
    modal.present();

    modal.onDidDismiss(data => {
      if(data) {
        let eventData = data;
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {

          this.eventSource = events;
        })
      }
    });
  }



  onViewTitleChanged(title){

  this.viewTitle = title;

  }
  onTimeSelected(ev){

    this.selectedDay = ev.selectedTime;
  }
  onEventSelected(event){

    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' +end,
      buttons: ['OK']
    });
    alert.present();
  }



}
