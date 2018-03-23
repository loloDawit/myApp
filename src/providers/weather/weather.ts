import { Http } from '@angular/http'; 
import { Injectable } from '@angular/core'; // so we can inject it as a dependeny 
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = "17972df9b627b7e8";    // apiKey for weather api 
  url; 


  constructor(public http: Http) {
    // http://api.wunderground.com/api/17972df9b627b7e8/conditions/q/CA/San_Francisco.json
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(city,state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json').map(res => res.json());
  }

}
