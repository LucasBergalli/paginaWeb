import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AreaComercialComponent } from './components/area-comercial/area-comercial.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AreaAdministracionComponent } from './components/area-administracion/area-administracion.component';
import { AreaProduccionComponent } from './components/area-produccion/area-produccion.component';
import { AreaAbastecimientoComponent } from './components/area-abastecimiento/area-abastecimiento.component';
import { AreaLogisticaComponent } from './components/area-logistica/area-logistica.component';
import { AreaGestionComponent } from './components/area-gestion/area-gestion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'area-comercial', component: AreaComercialComponent },
  { path: 'area-administracion', component: AreaAdministracionComponent },
  { path: 'area-produccion', component: AreaProduccionComponent },
  { path: 'area-abastecimiento', component: AreaAbastecimientoComponent },
  { path: 'area-logistica', component: AreaLogisticaComponent },
  { path: 'area-gestion', component: AreaGestionComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
