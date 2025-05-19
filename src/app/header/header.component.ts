import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showHeader = true;
  showHomeButton = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Gérer l'affichage du bouton "Home"
        this.showHomeButton = event.urlAfterRedirects !== '/';

        // Gérer l'affichage du header
        const hiddenHeaderRoutes = [
          '/sales-manager-carrefour',
          '/sales-manager-geant',
          '/sales-manager-mg',
          '/sales-manager-traveltodo',
          '/sales-manager-touring',
          '/sales-manager-tunisiebooking',
          '/user'
        ];
        this.showHeader = !hiddenHeaderRoutes.some(route =>
          event.urlAfterRedirects.includes(route)
        );
      }
    });
  }
}
