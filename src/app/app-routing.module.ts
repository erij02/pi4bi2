import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // importe le dashboard
import { UserComponent } from './user/user.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SalesManagerCarrefourComponent } from './sales-manager-carrefour/sales-manager-carrefour.component';
import { SalesManagerTunisiebookingComponent } from './sales-manager-tunisiebooking/sales-manager-tunisiebooking.component';
import { SalesManagerTouringComponent } from './sales-manager-touring/sales-manager-touring.component';
import { SalesManagerTraveltodoComponent } from './sales-manager-traveltodo/sales-manager-traveltodo.component';
import { SalesManagerMgComponent } from './sales-manager-mg/sales-manager-mg.component';
import { SalesManagerGeantComponent } from './sales-manager-geant/sales-manager-geant.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { authGuard } from './auth.guard';// Importation de l'auth guard


const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent }, 
  { path: 'entreprise', component: EntrepriseComponent }, 
  { path: 'aboutus', component: AboutusComponent }, 
  { path: 'sales-manager-carrefour', component: SalesManagerCarrefourComponent , canActivate: [authGuard] },
  { path: 'sales-manager-geant', component: SalesManagerGeantComponent , canActivate: [authGuard] },
  { path: 'sales-manager-mg', component: SalesManagerMgComponent , canActivate: [authGuard] },
  { path: 'sales-manager-traveltodo', component: SalesManagerTraveltodoComponent , canActivate: [authGuard] },
  { path: 'sales-manager-touring', component: SalesManagerTouringComponent, canActivate: [authGuard] },
  { path: 'sales-manager-tunisiebooking', component: SalesManagerTunisiebookingComponent , canActivate: [authGuard] },
  { path: 'chatbot', component: ChatbotComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
