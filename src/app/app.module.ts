import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { SharedModule } from './shared/shared.module';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminModule } from 'src/app/modules/admin/admin.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 
//instalar el modulo de bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NuestraEmpresaComponent } from './components/nuestra-empresa/nuestra-empresa.component';
import { ProdServComponent } from './components/prod-serv/prod-serv.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    NuestraEmpresaComponent,
    ProdServComponent,
    ContactoComponent,
    ErrorComponent,
    CarruselComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    routing,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    CustomMaterialModule,
    SharedModule,
    NgbModule,
    CommonModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
