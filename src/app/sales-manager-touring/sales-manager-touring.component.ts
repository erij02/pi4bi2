import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sales-manager-touring',
  templateUrl: './sales-manager-touring.component.html',
  styleUrls: ['./sales-manager-touring.component.css']
})
export class SalesManagerTouringComponent {
  showPowerBI: boolean = true;
  showPrediction: boolean = false;

  powerBIUrl: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) {
    // Mets ici ton URL Power BI officielle
    this.powerBIUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://app.powerbi.com/reportEmbed?reportId=7e3f8c01-6aaf-4c6e-a11c-ac791d8f9ad3&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&filterPaneEnabled=false&navContentPaneEnabled=false'
    );

    // Mets ici l'URL de ton serveur Flask déployé
    
  }

  showPowerBIView(): void {
    this.showPowerBI = true;
    this.showPrediction = false;
  }

  
}

