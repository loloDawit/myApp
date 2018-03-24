import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:string;
  state:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage) {
    this.storage.get('location').then((val) => {
      if(val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      }else{
        //default city and state
        this.city = 'Addis Ababa';
        this.state = 'ET';
      }

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  
  saveForm(){
    let location = {
      city: this.city,
      state:this.state
    }
    this.storage.set('location',JSON.stringify(location)); // turn it into string 
    this.navCtrl.push(HomePage);   
  }

}
