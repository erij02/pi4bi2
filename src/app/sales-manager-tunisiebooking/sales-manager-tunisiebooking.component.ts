import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-sales-manager-tunisiebooking',
  templateUrl: './sales-manager-tunisiebooking.component.html',
  styleUrls: ['./sales-manager-tunisiebooking.component.css']
})
export class SalesManagerTunisiebookingComponent {
  showPowerBI: boolean = true;
  showPrediction: boolean = false;

  powerBIUrl: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) {
    // Mets ici ton URL Power BI officielle
    this.powerBIUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://app.powerbi.com/reportEmbed?reportId=53e51b6d-2430-4c52-aaf3-00ecdbc7cd3e&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&filterPaneEnabled=false&navContentPaneEnabled=false'
    );

    // Mets ici l'URL de ton serveur Flask déployé
    
  }

  showPowerBIView(): void {
    this.showPowerBI = true;
    this.showPrediction = false;
  }

  
}



