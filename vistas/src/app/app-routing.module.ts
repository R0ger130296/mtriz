import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent }      from './login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { VistasComponent } from './vistas/vistas.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'vistas', component: VistasComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}