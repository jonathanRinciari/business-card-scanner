import { Component } from '@angular/core';


@Component({
  selector: 'homescreen',
  moduleId: module.id,
  styleUrls: ['./homescreen.css'],
  templateUrl: './homescreen.html'
})
export class HomeScreen {
  constructor(){}

  onTap() {
    console.log('test');
  }
}