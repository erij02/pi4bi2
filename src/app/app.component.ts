import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi';
  email: string = '';
  password: string = '';
  isUserPage = false;

  constructor(private router: Router) {
    // ✅ Écouter les changements de route pour détecter si on est sur /user
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isUserPage = event.urlAfterRedirects.includes('/user');
      }
    });
  }

  onLoginSubmit() {
    if (this.email === 'boukhris.nour@esprit.tn' && this.password === 'pass123') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('E-mail ou mot de passe incorrect');
    }
  }
}
