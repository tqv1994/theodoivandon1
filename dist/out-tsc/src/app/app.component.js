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
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var local_notifications_1 = require("@ionic-native/local-notifications");
var unique_device_id_1 = require("@ionic-native/unique-device-id");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, localNotifications, uniqueDeviceID) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.localNotifications = localNotifications;
        this.uniqueDeviceID = uniqueDeviceID;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
        ];
        this.lengthKeyId = 8;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.timestampKey = +new Date;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.pusher = new Pusher("7df41268e3e1e164cb73", {
                cluster: "eu",
                encrypted: true
            });
            _this.uniqueDeviceID.get().then(function (uuid) {
                _this.channel = _this.pusher.subscribe(uuid);
                _this.channel.bind('Event', function (data) {
                    _this.localNotifications.schedule({
                        id: _this.generate(),
                        text: data.message,
                        led: 'FF0000',
                        foreground: true
                    });
                });
            }).catch(function (error) {
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
        }).catch(function (error) {
        });
    };
    AppComponent.prototype.reloadApp = function () {
        window.location.reload();
    };
    AppComponent.prototype._getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    AppComponent.prototype.generate = function () {
        var ts = this.timestampKey.toString();
        var parts = ts.split("").reverse();
        var id = '';
        for (var i = 0; i < this.lengthKeyId; ++i) {
            var index = this._getRandomInt(0, parts.length - 1);
            id += parts[index];
        }
        return parseInt(id);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [angular_1.Platform,
            ngx_1.SplashScreen,
            ngx_2.StatusBar,
            local_notifications_1.LocalNotifications,
            unique_device_id_1.UniqueDeviceID])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map