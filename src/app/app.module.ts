import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirComponent } from './shared/components/dir/dir.component';
import { CustomDirective } from './shared/directive/customDirective.directive';
import { SecondDirective } from './shared/directive/second.directive';
import { ThirdDirectiveDirective } from './shared/directive/third-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirComponent,
    CustomDirective,
    SecondDirective,
    ThirdDirectiveDirective
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
