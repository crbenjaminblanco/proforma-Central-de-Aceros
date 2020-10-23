import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProformaComponent } from './proforma/proforma.component';
import { OrdenCompraComponent } from './orden-compra/orden-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    ProformaComponent,
    OrdenCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
