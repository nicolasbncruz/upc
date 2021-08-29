import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarComponent } from './dashboar/dashboar.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProjectNewComponent } from './admin/project/project-new/project-new.component';
import { DetalleServiceComponent } from './pages/servicios/detalle-service/detalle-service.component';
import { LoginComponent } from './auth/login/login.component';
import { ClientNewComponent } from './admin/client/client-new/client-new.component';
import { Servicio1Component } from './pages/servicios/servicio1/servicio1.component';
import { Servicio2Component } from './pages/servicios/servicio2/servicio2.component';
import { Servicio3Component } from './pages/servicios/servicio3/servicio3.component';
import { Servicio4Component } from './pages/servicios/servicio4/servicio4.component';
import { Servicio5Component } from './pages/servicios/servicio5/servicio5.component';
import { Servicio6Component } from './pages/servicios/servicio6/servicio6.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: AcercadeComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'dashboard', component: DashboarComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'dashboard/clientes', component: ClientesComponent },
  { path: 'servicio/:id', component: DetalleServiceComponent },
  { path: 'admin/project/new', component: ProjectNewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'servicios/servicios1', component: Servicio1Component},
  { path: 'servicios/servicios2', component: Servicio2Component},
  { path: 'servicios/servicios3', component: Servicio3Component},
  { path: 'servicios/servicios4', component: Servicio4Component},
  { path: 'servicios/servicios5', component: Servicio5Component},
  { path: 'servicios/servicios6', component: Servicio6Component},
  { path: 'admin/project/new', component: ProjectNewComponent},
  { path: 'admin/client/new', component: ClientNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

