import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  showLoginForm: boolean = true; // Formulaire visible dès le départ

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLoginSubmit() {
    if (this.email === 'nour.benabid@esprit.tn' && this.password === '5678') {
      localStorage.setItem('user', JSON.stringify({ email: this.email, role: 'carrefour' }));
      this.router.navigate(['/sales-manager-carrefour']);
    } else if (this.email === 'erij.triaa@esprit.tn' && this.password === '121314') {
      localStorage.setItem('user', JSON.stringify({ email: this.email, role: 'geant' }));
      this.router.navigate(['/sales-manager-geant']);
    } else if (this.email === 'medaziz.benajmia@esprit.tn' && this.password === '181920') {
      localStorage.setItem('user', JSON.stringify({ email: this.email, role: 'mg' }));
      this.router.navigate(['/sales-manager-mg']);
    } else if (this.email === 'boukhris.nour@esprit.tn' && this.password === '1234') {
      localStorage.setItem('user', JSON.stringify({ email: this.email, role: 'traveltodo' }));
      this.router.navigate(['/sales-manager-traveltodo']);
    } else if (this.email === 'roua.mtar@esprit.tn' && this.password === '151617') {
      localStorage.setItem('user', JSON.stringify({ email: this.email, role: 'touring' }));
      this.router.navigate(['/sales-manager-touring']);
    } else if (this.email === 'assma.hajbi@esprit.tn' && this.password === '91011') {
      localStorage.setItem('user', JSON.stringify({ email: this.email, role: 'tunisiebooking' }));
      this.router.navigate(['/sales-manager-tunisiebooking']);
    } else {
      alert('Identifiants invalides');
    }
  }
}
