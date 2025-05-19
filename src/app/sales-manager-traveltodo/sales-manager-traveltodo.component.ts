import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sales-manager-traveltodo',
  templateUrl: './sales-manager-traveltodo.component.html',
  styleUrls: ['./sales-manager-traveltodo.component.css']
})
export class SalesManagerTraveltodoComponent {
  showPowerBI: boolean = true;
  showPrediction: boolean = false;

  powerBIUrl: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) {
    // Mets ici ton URL Power BI officielle
    this.powerBIUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://app.powerbi.com/reportEmbed?reportId=dbf83084-6f79-4583-8087-9ec9cbc0594d&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&filterPaneEnabled=false&navContentPaneEnabled=false'
    );

    // Mets ici l'URL de ton serveur Flask déployé
    
  }

  showPowerBIView(): void {
    this.showPowerBI = true;
    this.showPrediction = false;
  }

  
}


