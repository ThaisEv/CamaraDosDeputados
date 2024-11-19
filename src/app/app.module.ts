import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarDeputadoComponent } from './buscar-deputado/buscar-deputado.component';
import { MostrarDeputadoComponent } from './mostrar-deputado/mostrar-deputado.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarDeputadoComponent,
    MostrarDeputadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
