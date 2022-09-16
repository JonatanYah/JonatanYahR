import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Seccion2Component } from './seccion2/seccion2.component';

const routes: Routes = [
    {path:'Home', component:HomeComponent},
    {path:'Seccion2', component:Seccion2Component},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}