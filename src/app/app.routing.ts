//importar los modulos del router en angular 

import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


//importar componentes a los cuales les quiero hacer una pagina exclusiva
import{HomeComponent} from './components/home/home.component';
import{NuestraEmpresaComponent} from './components/nuestra-empresa/nuestra-empresa.component';
import{ProdServComponent} from './components/prod-serv/prod-serv.component';
import{ContactoComponent} from './components/contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './components/error/error.component';
import { AdminComponent } from './pages/admin/admin.component';

//arrays de rutas

const appRoutes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nuestra-empresa', component: NuestraEmpresaComponent},
    //{ path: 'nuestra-empresa',   redirectTo: '/admin', pathMatch: 'full' },
    {path: 'admin', component: AdminComponent},
    {path: 'prod-serv', component: ProdServComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component:ErrorComponent}
    
];

//Exportar el modulo de rutas

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);