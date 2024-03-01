import { NgModule, Component } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';

import { FacturacionComponent } from './facturacion/facturacion.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosHomeComponent } from './productos-home/productos-home.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    ProductosComponent,
    FacturacionComponent,
    RegistroComponent,
    ContactoComponent,
    ProductosHomeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'productos-home', component: ProductosHomeComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'facturacion', component: FacturacionComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' }

    ])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
