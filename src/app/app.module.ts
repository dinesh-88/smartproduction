import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryWidgetComponent } from './summary-widget/summary-widget.component';
import { ProductLineComponent } from './product-line/product-line.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageEvents } from './message-parser/parser.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    SummaryWidgetComponent,
    ProductLineComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    ReactiveFormsModule
  ],
  providers: [MessageEvents],
  bootstrap: [AppComponent]
})
export class AppModule {
}
