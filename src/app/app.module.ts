import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    LoadingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
