import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	url: any;
	constructor(private sanitize: DomSanitizer, private localNotifications: LocalNotifications){
		this.url = sanitize.bypassSecurityTrustResourceUrl('http://tdvd.theappnow.net');
		this.localNotifications.schedule([{
		   id: 2,
		   title: 'Local ILocalNotification Example',
		   text: 'Multi ILocalNotification 2',
		   icon: 'http://example.com/icon.png'
		}]);
	}

	ngAfterViewInit() {
	    var iframe:HTMLIFrameElement = <HTMLIFrameElement>document.getElementById('myFrame');
	    var iWindow = (<HTMLIFrameElement>iframe).contentWindow.document;
	    // iWindow.open('http://tdvd.theappnow.net/');
	    
	    // window.open('http://tdvd.theappnow.net/', '_system', 'location=yes'); return false;
	    iWindow.body.style.zoom ="50%";
	}
}
