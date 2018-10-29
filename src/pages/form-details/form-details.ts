import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

/**
 * Generated class for the FormDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-details',
  templateUrl: 'form-details.html',
})
export class FormDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseAnalytics: FirebaseAnalytics) {
    this.enableAnalyticsEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormDetailsPage');
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

}
