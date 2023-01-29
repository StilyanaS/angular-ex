import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { CvComponent } from './pages/cv/cv.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'cv', component: CvComponent },
  { path: 'items', component: ItemsListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
