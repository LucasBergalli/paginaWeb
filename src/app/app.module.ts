import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AreaComercialComponent } from './components/area-comercial/area-comercial.component';
import { AreaAdministracionComponent } from './components/area-administracion/area-administracion.component';
import { AreaProduccionComponent } from './components/area-produccion/area-produccion.component';
import { AreaAbastecimientoComponent } from './components/area-abastecimiento/area-abastecimiento.component';
import { AreaLogisticaComponent } from './components/area-logistica/area-logistica.component';
import { AreaGestionComponent } from './components/area-gestion/area-gestion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    AreaComercialComponent,
    AreaAdministracionComponent,
    AreaProduccionComponent,
    AreaAbastecimientoComponent,
    AreaLogisticaComponent,
    AreaGestionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
