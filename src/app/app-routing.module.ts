import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CvComponent } from './pages/cv/cv.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormularioComponent },
  { path: 'cv', component: CvComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
