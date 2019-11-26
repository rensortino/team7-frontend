var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Vibration = /** @class */ (function (_super) {
    __extends(Vibration, _super);
    function Vibration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vibration.prototype.vibrate = function (time) { return cordova(this, "vibrate", { "sync": true }, arguments); };
    Vibration.pluginName = "Vibration";
    Vibration.plugin = "cordova-plugin-vibration";
    Vibration.pluginRef = "navigator";
    Vibration.repo = "https://github.com/apache/cordova-plugin-vibration";
    Vibration.platforms = ["Android", "iOS", "Windows"];
    Vibration = __decorate([
        Injectable()
    ], Vibration);
    return Vibration;
}(IonicNativePlugin));
export { Vibration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpYnJhdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFxQ3pDLDZCQUFpQjs7OztJQVM5QywyQkFBTyxhQUFDLElBQXVCOzs7Ozs7SUFUcEIsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQXRDdEI7RUFzQytCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cblxuLyoqXG4gKiBAbmFtZSBWaWJyYXRpb25cbiAqIEBkZXNjcmlwdGlvbiBWaWJyYXRlcyB0aGUgZGV2aWNlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFZpYnJhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdmlicmF0aW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWJyYXRpb246IFZpYnJhdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gVmlicmF0ZSB0aGUgZGV2aWNlIGZvciBhIHNlY29uZFxuICogLy8gRHVyYXRpb24gaXMgaWdub3JlZCBvbiBpT1MuXG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKDEwMDApO1xuICpcbiAqIC8vIFZpYnJhdGUgMiBzZWNvbmRzXG4gKiAvLyBQYXVzZSBmb3IgMSBzZWNvbmRcbiAqIC8vIFZpYnJhdGUgZm9yIDIgc2Vjb25kc1xuICogLy8gUGF0dGVybnMgd29yayBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoWzIwMDAsMTAwMCwyMDAwXSk7XG4gKlxuICogLy8gU3RvcCBhbnkgY3VycmVudCB2aWJyYXRpb25zIGltbWVkaWF0ZWx5XG4gKiAvLyBXb3JrcyBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoMCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdWaWJyYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpYnJhdGlvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVmlicmF0ZXMgdGhlIGRldmljZSBmb3IgZ2l2ZW4gYW1vdW50IG9mIHRpbWUuXG4gICAqIEBwYXJhbSB0aW1lIHtudW1iZXJ8bnVtYmVyW119IE1pbGxpc2Vjb25kcyB0byB2aWJyYXRlIHRoZSBkZXZpY2UuIElmIHBhc3NlZCBhbiBhcnJheSBvZiBudW1iZXJzLCBpdCB3aWxsIGRlZmluZSBhIHZpYnJhdGlvbiBwYXR0ZXJuLiBQYXNzIDAgdG8gc3RvcCBhbnkgdmlicmF0aW9uIGltbWVkaWF0ZWx5LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgdmlicmF0ZSh0aW1lOiBudW1iZXIgfCBudW1iZXJbXSkgeyB9XG5cbn1cbiJdfQ==