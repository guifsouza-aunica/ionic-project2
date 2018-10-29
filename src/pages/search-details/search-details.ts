import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

/**
 * Generated class for the SearchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-details',
  templateUrl: 'search-details.html',
})
export class SearchDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private firebaseAnalytics: FirebaseAnalytics) {
    this.enableAnalyticsEvents();  		
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchDetailsPage');
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


  iniciarCarregamento() {
  	const loader = this.loadingCtrl.create({
      content: "Realizando busca...",
      duration: 500
    });
    loader.present();
  }

}
