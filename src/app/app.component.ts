import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Events, MXWinLeftNavigator } from '../common/win-left-navigator';
import { AlertServiceProvider } from '../services/alert.service';
@Component({
  selector: '[matrix-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('context') context: ElementRef;
  @ViewChild('target') target: MXWinLeftNavigator;
  hasAlert: boolean = false;
  constructor(private alertService: AlertServiceProvider) {

  }
  ngOnInit() {
    this.alertService.subscribe((t) => {
      this.hasAlert = t.hasAlert;
    });
    this.alertService.emit({
      hasAlert: true
    });
  }
}