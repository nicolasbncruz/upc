import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { HomeComponent } from './pages/home/home.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProjectNewComponent } from './admin/project/project-new/project-new.component';
import { ProjectListComponent } from './admin/project/project-list/project-list.component';
import { ClientListComponent } from './admin/client/client-list/client-list.component';
import { ClientNewComponent } from './admin/client/client-new/client-new.component';
import { DetalleServiceComponent } from './pages/servicios/detalle-service/detalle-service.component';
import { Servicio1Component } from './pages/servicios/servicio1/servicio1.component';
import { Servicio2Component } from './pages/servicios/servicio2/servicio2.component';
import { Servicio3Component } from './pages/servicios/servicio3/servicio3.component';
import { Servicio4Component } from './pages/servicios/servicio4/servicio4.component';
import { Servicio5Component } from './pages/servicios/servicio5/servicio5.component';
import { Servicio6Component } from './pages/servicios/servicio6/servicio6.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    ServiciosComponent,
    ComentariosComponent,
    HomeComponent,
    AcercadeComponent,
    EquipoComponent,
    ContactoComponent,
    ProyectosComponent,
    DashboarComponent,
    ClientesComponent,
    ProjectNewComponent,
    ProjectListComponent,
    ClientListComponent,
    ClientNewComponent,
    DetalleServiceComponent,
    Servicio1Component,
    Servicio2Component,
    Servicio3Component,
    Servicio4Component,
    Servicio5Component,
    Servicio6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
