import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormComponent } from './pages/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { ChangeColorHoverDirective } from './directives/change-color-hover.directive';
import { FormsModule } from '@angular/forms';
import { CheckEmptyInputsDirective } from './directives/check-empty-inputs.directive';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    CvComponent,
    HomeComponent,
    ChangeColorHoverDirective,
    CheckEmptyInputsDirective,
    ItemsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
