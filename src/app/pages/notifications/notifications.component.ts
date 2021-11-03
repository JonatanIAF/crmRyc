import { Component } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'notifications-cmp',
  moduleId: module.id,
  templateUrl: 'notifications.component.html'
})

export class NotificationsComponent {

  constructor() { }

  ngAfterViewInit(): void {
    PSPDFKit.load({
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: "assets/hojaGeneral.pdf",
      container: "#pspdfkit-container",
    }).then((instance) => {
      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.

      (<any>window).instance = instance;
    });
    PSPDFKit.TextLine
  }
  }
