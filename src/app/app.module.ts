import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { FormsModule } from '@angular/forms';
import { SalesManagerCarrefourComponent } from './sales-manager-carrefour/sales-manager-carrefour.component';
import { SalesManagerGeantComponent } from './sales-manager-geant/sales-manager-geant.component';
import { SalesManagerMgComponent } from './sales-manager-mg/sales-manager-mg.component';
import { SalesManagerTraveltodoComponent } from './sales-manager-traveltodo/sales-manager-traveltodo.component';
import { SalesManagerTouringComponent } from './sales-manager-touring/sales-manager-touring.component';
import { SalesManagerTunisiebookingComponent } from './sales-manager-tunisiebooking/sales-manager-tunisiebooking.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HttpClientModule } from '@angular/common/http';  // Importer HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    HomeComponent,
    DashboardComponent,
    UserComponent,
    EntrepriseComponent,
    AboutusComponent,
    SalesManagerCarrefourComponent,
    SalesManagerGeantComponent,
    SalesManagerMgComponent,
    SalesManagerTraveltodoComponent,
    SalesManagerTouringComponent,
    SalesManagerTunisiebookingComponent,
    ChatbotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule ,
    HttpClientModule  // Ajoute HttpClientModule ici

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
