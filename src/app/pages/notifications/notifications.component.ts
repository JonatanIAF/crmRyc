import { Component } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'notifications-cmp',
  moduleId: module.id,
  templateUrl: 'notifications.component.html'
})

export class NotificationsComponent {

  constructor() { }

  ngOnInit(): void {

    // PSPDFKit.load({
    //   // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
    //   baseUrl: location.protocol + "//" + location.host + "/assets/",
    //   document: "/assets/hojaGeneral.pdf",
    //   container: "#pspdfkit-container",
    //   renderPageCallback: function (ctx, pageIndex, pageSize) {
    //     ctx.font = "10px Comic Sans MS";
    //     ctx.fillStyle = "black";
    //     ctx.strokeText(
    //       `$200.00`,
    //       pageSize.width / 2,
    //       pageSize.height / 2
    //     );
    //   },
    // }).then(instance => {
    //   (window as any).instance = instance;
    // });
         PSPDFKit.load({
        baseUrl: location.protocol + "//" + location.host + "/assets/",
        document: "/assets/hojaGeneral.pdf",
        container: "#pspdfkit-container",

        renderPageCallback(ctx, pageIndex, pageSize) {
          // Add a "Confidential" Watermark in the page
          ctx.translate(pageSize.width / 2 - 325, pageSize.height / 2 + 250);
          ctx.rotate(-0.25 * Math.PI);

          ctx.font = "90px Arial";
          ctx.fillStyle = "rgba(76, 130, 212,.2)";
          ctx.fillText("CONFIDENTIAL", 100, 50);
        },
      }).then((instance) => {
        return instance;
      });
    }
  }
