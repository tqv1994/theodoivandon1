import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
declare const Pusher: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home' 
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // }
  ];
  pusher: any;
  channel: any;
  lengthKeyId = 8;
  timestampKey: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public localNotifications: LocalNotifications,
    private uniqueDeviceID: UniqueDeviceID
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.timestampKey = +new Date;
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.pusher = new Pusher("7df41268e3e1e164cb73", {
          cluster: "eu",
          encrypted: true
        });
      this.uniqueDeviceID.get().then((uuid: any)=>{
        this.channel = this.pusher.subscribe(uuid);
        this.channel.bind('Event',data=>{
          
          this.localNotifications.schedule({
            id: this.generate(),
             text: data.message,
             led: 'FF0000',
             foreground: true
          });
        });
      }).catch((error:any)=>{
        // this.pusher = new Pusher("7df41268e3e1e164cb73", {
        //   cluster: "eu",
        //   encrypted: true
        // });
        // console.log('message');
     
        // this.channel = this.pusher.subscribe('vuong1');
        // this.channel.bind('Event',data=>{
        //   console.log(data);
        //   this.localNotifications.schedule({
        //     id: this.generate(),
        //      text: data.message,
        //      led: 'FF0000',
        //      sound: this.setSound(),
        //      foreground: true,
        //   });
        // });
      });
    }).catch((error: any)=>{
    });
  }

  reloadApp(){
    window.location.reload()
  }

  _getRandomInt( min, max ) {
      return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }
 
  generate() {
     let ts = this.timestampKey.toString();
     let parts = ts.split( "" ).reverse();
     let id = '';
     
     for( var i = 0; i < this.lengthKeyId; ++i ) {
      var index = this._getRandomInt( 0, parts.length - 1 );
      id += parts[index];   
     }
     
     return parseInt(id);
  }
}
