import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Events, MXWinLeftNavigator } from '../components/win-left-navigator';

@Component({
  selector: '[matrix-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('context') context: ElementRef;
  @ViewChild('target') target: MXWinLeftNavigator;
  constructor() {

  }
  ngOnInit() {
    Events.subscribe((eventType) => {

    })
  }
}