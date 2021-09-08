import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

//Importar componentes
import { AppComponent } from './app.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { HomeComponent } from './components/home/home.component';
import { SeccionNoticiasComponent } from './components/seccion-noticias/seccion-noticias.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//Importar rutas
import { ROUTES } from "./app.routes";
import { RouterModule } from '@angular/router';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    HomeComponent,
    SeccionNoticiasComponent,
    HeaderComponent,
    FooterComponent,
    NoticiaComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash:true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
