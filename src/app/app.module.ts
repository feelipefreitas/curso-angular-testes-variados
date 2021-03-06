import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentToRenderComponent } from './component-to-render/component-to-render.component';
import { ReturnBackgroundPipe } from './pipes/return-background.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentToRenderComponent,
    ReturnBackgroundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
