import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginModule} from "./component/login/login.module";
import {RegisterModule} from "./component/register/register.module";
import {ProfileModule} from "./component/profile/profile.module";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {AnalyzeModule} from "./component/analyze/analyze.module";
import {AnalyzeComponent} from "./component/analyze/analyze.component";


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: "analyze", component: AnalyzeComponent},
  {path: "**", component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LoginModule,
    RegisterModule,
    ProfileModule,
    AnalyzeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
