import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	url: any;
	constructor(private sanitize: DomSanitizer, private uniqueDeviceID: UniqueDeviceID){
		this.uniqueDeviceID.get().then((uuid: any)=>{
          this.url = sanitize.bypassSecurityTrustResourceUrl('http://tdvd.theappnow.net/Account/Login?IDApp='+uuid);
        }).catch((error: any)=>{
          
        });
	}

	ngAfterViewInit() {
	    //var iframe:HTMLIFrameElement = <HTMLIFrameElement>document.getElementById('myFrame');
	    //var iWindow = (<HTMLIFrameElement>iframe).contentWindow.document;
	    // iWindow.open('http://tdvd.theappnow.net/');
	    
	    // window.open('http://tdvd.theappnow.net/', '_system', 'location=yes'); return false;
	    //iWindow.body.style.zoom ="50%";
	}
}
