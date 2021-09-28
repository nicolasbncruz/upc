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

import { ClientListComponent } from './admin/client/client-list/client-list.component';
import { ClientNewComponent } from './admin/client/client-new/client-new.component';
import { ProjectNewComponent } from './admin/project/project-new/project-new.component';
import { DetalleServiceComponent } from './pages/servicios/detalle-service/detalle-service.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EstadisticaComponent } from './pages/estadistica/estadistica.component';
import { ProjectListComponent } from './admin/project/project-list/project-list.component';
import { ProjectUpdateComponent } from './admin/project/project-update/project-update.component';
import { ProjectDetailComponent } from './admin/project/project-detail/project-detail.component';


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
  { path: 'admin/client/list', component: ClientListComponent},
  { path: 'admin/client/new', component: ClientNewComponent },
  { path: 'admin/project/new', component: ProjectNewComponent},
  { path: 'servicio/:id', component: DetalleServiceComponent },
  { path: 'admin/project/new', component: ProjectNewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'admin/project/new', component: ProjectNewComponent },
  { path: 'estadistica', component: EstadisticaComponent },  
  { path: 'admin/project/list', component: ProjectListComponent },
  { path: 'admin/project/upd', component: ProjectUpdateComponent },
  { path: 'admin/project/list/:id', component: ProjectListComponent },
  { path: 'admin/project/project-detail/:id', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

