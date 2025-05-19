import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-sales-manager-carrefour',
  templateUrl: './sales-manager-carrefour.component.html',
  styleUrls: ['./sales-manager-carrefour.component.css']
})
export class SalesManagerCarrefourComponent implements OnInit, OnDestroy {
  showPowerBI: boolean = true;
  showPrediction: boolean = false;
  showForecast: boolean = false;

  powerBIUrl: SafeResourceUrl;
  predictionUrl: SafeResourceUrl;

  private predictionBaseUrl: string = 'http://127.0.0.1:8001';
  private refreshSub?: Subscription;

  constructor(private sanitizer: DomSanitizer) {
    this.powerBIUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://app.powerbi.com/reportEmbed?reportId=800235e0-20d1-4936-923a-4199eb0ae145&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&filterPaneEnabled=false&navContentPaneEnabled=false'
    );
    this.predictionUrl = this.getSanitizedPredictionUrl();
  }

  ngOnInit(): void {
    // Rafraîchit toutes les 5 secondes si la vue prédiction est active
    this.refreshSub = interval(50000).subscribe(() => {
      if (this.showPrediction) {
        this.predictionUrl = this.getSanitizedPredictionUrl();
      }
    });
  }

  ngOnDestroy(): void {
    this.refreshSub?.unsubscribe();
  }

  private getSanitizedPredictionUrl(): SafeResourceUrl {
    const url = `${this.predictionBaseUrl}?t=${Date.now()}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  showPowerBIView(): void {
    this.showPowerBI = true;
    this.showPrediction = false;
    this.showForecast = false;
  }

  showPredictionView(): void {
    this.showPowerBI = false;
    this.showPrediction = true;
    this.predictionUrl = this.getSanitizedPredictionUrl(); // Mise à jour immédiate
    this.showForecast = false;
  }

  openForecastModal(): void {
    this.showPowerBI = false;
    this.showPrediction = false;
    this.showForecast = true;
  }
}
