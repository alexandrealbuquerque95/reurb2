import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';

import { LoginComponent } from './components/login/login.component';
import { PrimeiroAcessoComponent } from './components/primeiro-acesso/primeiro-acesso.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { FormularioCadastroComponent } from './components/formulario-cadastro/formulario-cadastro.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from "ng2-currency-mask";




@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,

    LoginComponent,
    PrimeiroAcessoComponent,
    FormularioCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    FontAwesomeModule,
    MatTabsModule,
    BrowserAnimationsModule,
    CurrencyMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

  exports: [
    FontAwesomeModule,
  ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
 }
