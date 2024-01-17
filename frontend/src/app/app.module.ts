import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookpageComponent } from './bookpage/bookpage.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    HomepageComponent,
    BookpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterComponent,
    LoginComponent,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
