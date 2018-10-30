import { Component } from '@angular/core';
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: 'homescreen',
  moduleId: module.id,
  styleUrls: ['./homescreen.css'],
  templateUrl: './homescreen.html'
})
export class HomeScreen {
  constructor(){}

  onTap() {
    firebase.mlkit.textrecognition.recognizeTextOnDevice({
      image: './test.jpeg' // a NativeScript Image or ImageSource, see the demo for examples
    }).then((result: MLKitRecognizeTextResult) => { // just look at this type to see what else is returned
      console.log(result.text ? result.text : "");
    }).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }
}