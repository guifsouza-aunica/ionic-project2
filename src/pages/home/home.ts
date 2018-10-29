import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, ModalController } from 'ionic-angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { ClickDetailsPage } from '../click-details/click-details';
import { FormDetailsPage } from '../form-details/form-details';
import { SearchDetailsPage } from '../search-details/search-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private firebaseAnalytics: FirebaseAnalytics, public modalCtrl: ModalController) {
    this.enableAnalyticsEvents();
  }

  showAlert(alertText, alertTitle) {
  	let alert = this.alertCtrl.create({
  		title: alertTitle || "Alert Title",
  		subTitle: alertText || "Alert message",
  		buttons: ['OK', 'Cancel'] 
  	});
  	alert.present();
  }

  enableAnalyticsEvents() {

    let fb = this.firebaseAnalytics;

    document.addEventListener("analyticsevent", function(event) {
    	//console.log((<CustomEvent>event).detail);
    	
    	//if (typeof (<CustomEvent>event) != "undefined") {
    		var evDetail = (<CustomEvent>event).detail;
    		if (evDetail.type == "fbanalytics") 
    			fb.logEvent(evDetail.name, evDetail.params);
    		
    	//}	
      
    }, false);
  }

  firebaseEvent(name, params) {

  	this.firebaseAnalytics.logEvent(name, params);

  }

  openClickDetails() {
    let clickDetailsModal = this.modalCtrl.create(ClickDetailsPage);
    clickDetailsModal.present();
  }

  openFormDetails() {
    let formDetailsModal = this.modalCtrl.create(FormDetailsPage);
    formDetailsModal.present();
  }

  openSearchDetails() {
    let searchDetailsModal = this.modalCtrl.create(SearchDetailsPage);
    searchDetailsModal.present();
  }

}
