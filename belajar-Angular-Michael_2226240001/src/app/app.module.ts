import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Impor file routing

@NgModule({
  declarations: [
    AppComponent, // Komponen utama aplikasi
  ],
  imports: [
    BrowserModule, // Modul untuk aplikasi browser
    RouterModule.forRoot(routes), // Konfigurasi routing aplikasi
  ],
  providers: [],
  bootstrap: [AppComponent] // Komponen utama untuk bootstrap aplikasi
})
export class AppModule { }
