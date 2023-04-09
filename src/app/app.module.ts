import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GridListComponent } from './components/grid-list-header/grid-list.component';
import { GridListBodyComponent } from './components/grid-list-body/grid-list-body.component';
import { IframeObjectComponent } from './components/iframe-object/iframe-object.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridListComponent,
    GridListBodyComponent,
    IframeObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
