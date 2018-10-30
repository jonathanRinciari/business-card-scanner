"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var HomeScreen = /** @class */ (function () {
    function HomeScreen() {
    }
    HomeScreen.prototype.onTap = function () {
        firebase.mlkit.textrecognition.recognizeTextOnDevice({
            image: './test.jpeg' // a NativeScript Image or ImageSource, see the demo for examples
        }).then(function (result) {
            console.log(result.text ? result.text : "");
        }).catch(function (errorMessage) { return console.log("ML Kit error: " + errorMessage); });
    };
    HomeScreen = __decorate([
        core_1.Component({
            selector: 'homescreen',
            moduleId: module.id,
            styleUrls: ['./homescreen.css'],
            templateUrl: './homescreen.html'
        }),
        __metadata("design:paramtypes", [])
    ], HomeScreen);
    return HomeScreen;
}());
exports.HomeScreen = HomeScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWVzY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQ7SUFDRTtJQUFjLENBQUM7SUFFZiwwQkFBSyxHQUFMO1FBQ0UsUUFBUSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUM7WUFDbkQsS0FBSyxFQUFFLGFBQWEsQ0FBQyxpRUFBaUU7U0FDdkYsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWdDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFUVSxVQUFVO1FBTnRCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDL0IsV0FBVyxFQUFFLG1CQUFtQjtTQUNqQyxDQUFDOztPQUNXLFVBQVUsQ0FVdEI7SUFBRCxpQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNTEtpdFJlY29nbml6ZVRleHRSZXN1bHQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9tbGtpdC90ZXh0cmVjb2duaXRpb25cIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvbWVzY3JlZW4nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzdHlsZVVybHM6IFsnLi9ob21lc2NyZWVuLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZXNjcmVlbi5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lU2NyZWVuIHtcbiAgY29uc3RydWN0b3IoKXt9XG5cbiAgb25UYXAoKSB7XG4gICAgZmlyZWJhc2UubWxraXQudGV4dHJlY29nbml0aW9uLnJlY29nbml6ZVRleHRPbkRldmljZSh7XG4gICAgICBpbWFnZTogJy4vdGVzdC5qcGVnJyAvLyBhIE5hdGl2ZVNjcmlwdCBJbWFnZSBvciBJbWFnZVNvdXJjZSwgc2VlIHRoZSBkZW1vIGZvciBleGFtcGxlc1xuICAgIH0pLnRoZW4oKHJlc3VsdDogTUxLaXRSZWNvZ25pemVUZXh0UmVzdWx0KSA9PiB7IC8vIGp1c3QgbG9vayBhdCB0aGlzIHR5cGUgdG8gc2VlIHdoYXQgZWxzZSBpcyByZXR1cm5lZFxuICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQgPyByZXN1bHQudGV4dCA6IFwiXCIpO1xuICAgIH0pLmNhdGNoKGVycm9yTWVzc2FnZSA9PiBjb25zb2xlLmxvZyhcIk1MIEtpdCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpKTtcbiAgfVxufSJdfQ==