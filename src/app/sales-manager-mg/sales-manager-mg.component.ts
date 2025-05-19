import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sales-manager-mg',
  templateUrl: './sales-manager-mg.component.html',
  styleUrls: ['./sales-manager-mg.component.css']
})
export class SalesManagerMgComponent {
  showPowerBI: boolean = true;
  showPrediction: boolean = false;
  showForecast: boolean = false;

  powerBIUrl: SafeResourceUrl;
  predictionUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.powerBIUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://app.powerbi.com/reportEmbed?reportId=f6733d87-cfc7-41e0-8e90-434852f00696&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&filterPaneEnabled=false&navContentPaneEnabled=false'
    );

    this.predictionUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://127.0.0.1:8002'
    );
  }

  showPowerBIView(): void {
    this.resetViews();
    this.showPowerBI = true;
  }

  showPredictionView(): void {
    this.resetViews();
    this.showPrediction = true;
  }

  openForecastModal(): void {
    this.resetViews();
    this.showForecast = true;
  }

  private resetViews(): void {
    this.showPowerBI = false;
    this.showPrediction = false;
    this.showForecast = false;
  }
}
