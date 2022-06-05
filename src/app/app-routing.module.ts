import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';

//Component
import { LoginComponent } from './login/login.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { PrimengExampleComponent } from './components/primeng-example/primeng-example.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'primeng', component: PrimengExampleComponent },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },//重新導向路由
  { path: '**', component: LoginComponent },//萬用路由
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
