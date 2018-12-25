"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// import { LocalNotifications } from '@ionic-native/local-notifications';
var HomePage = /** @class */ (function () {
    function HomePage(sanitize /*, private localNotifications: LocalNotifications*/) {
        this.sanitize = sanitize;
        this.url = sanitize.bypassSecurityTrustResourceUrl('http://tdvd.theappnow.net');
        //this.url = 'http://tdvd.theappnow.net';
        /*this.localNotifications.schedule([{
           id: 2,
           title: 'Local ILocalNotification Example',
           text: 'Multi ILocalNotification 2',
           icon: 'http://example.com/icon.png'
        }]);*/
    }
    HomePage.prototype.ngAfterViewInit = function () {
        //var iframe:HTMLIFrameElement = <HTMLIFrameElement>document.getElementById('myFrame');
        //var iWindow = (<HTMLIFrameElement>iframe).contentWindow.document;
        // iWindow.open('http://tdvd.theappnow.net/');
        // window.open('http://tdvd.theappnow.net/', '_system', 'location=yes'); return false;
        //iWindow.body.style.zoom ="50%";
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer /*, private localNotifications: LocalNotifications*/])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.page.js.map