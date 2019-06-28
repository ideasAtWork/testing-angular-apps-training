import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OurNewModuleModule } from './our-new-module/our-new-module.module';
import { HelloWorldComponent } from './our-new-module/hello-world/hello-world.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OurNewModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
