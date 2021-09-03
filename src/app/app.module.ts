import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


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
import { EstadisticaComponent } from './pages/estadistica/estadistica.component';
import { ProjectUpdateComponent } from './admin/project/project-update/project-update.component';


//npm install @swimlane/ngx-charts --save
//npm install @ angular / cdk --save
//npm uninstall @swimlane/ngx-charts
//npm install @ angular / cdk --save

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
    EstadisticaComponent,
    ProjectUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
