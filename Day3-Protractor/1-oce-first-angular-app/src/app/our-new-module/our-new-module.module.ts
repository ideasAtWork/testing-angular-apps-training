import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurNewComponentComponent } from '../our-new-component/our-new-component.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class OurNewModuleModule { }
