import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos apartes
import { PagesModule } from './pages/pages.module';

// Modulo de rutas
import { AppRoutingModule } from './app-routing.module';

// Temporal
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
