import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sales-manager-geant',
  templateUrl: './sales-manager-geant.component.html',
  styleUrls: ['./sales-manager-geant.component.css']
})
export class SalesManagerGeantComponent {
  showPowerBI: boolean = true;
  showPrediction: boolean = false;


   showForecast: boolean = false; // remplace showForecastModal



  powerBIUrl: SafeResourceUrl;
  predictionUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Mets ici ton URL Power BI officielle
    this.powerBIUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://app.powerbi.com/reportEmbed?reportId=73c5224b-583d-4b8a-ae39-9a30598c9e3e&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&filterPaneEnabled=false&navContentPaneEnabled=false'
    );

    // Mets ici l'URL de ton serveur Flask déployé
    this.predictionUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://127.0.0.1:8000'
    );
  }

   showPowerBIView(): void {
    this.showPowerBI = true;
    this.showPrediction = false;
    this.showForecast = false; // désactive les autres vues
  }

  showPredictionView(): void {
    this.showPowerBI = false;
    this.showPrediction = true;
    this.showForecast = false;
  }

  openForecastModal(): void {
    this.showPowerBI = false;
    this.showPrediction = false;
    this.showForecast = true;
  }
}

