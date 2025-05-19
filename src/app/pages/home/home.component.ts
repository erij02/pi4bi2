import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';// <-- ajoute cette ligne

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {} // <-- ajoute le constructeur

  goToDashboard() { // <-- ajoute cette fonction
    this.router.navigate(['/dashboard']);
  }
  // Appelé lors de la soumission du formulaire
  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm('service_54dwx15', 'template_4eh9x56', e.target as HTMLFormElement, 'vP326mgt__O88OWMy')
      .then((result: EmailJSResponseStatus) => {
        alert('Message envoyé avec succès ! ✅');
        console.log(result.text);
      }, (error) => {
        alert('Erreur lors de l’envoi. ❌');
        console.error(error.text);
      });
  }


}
