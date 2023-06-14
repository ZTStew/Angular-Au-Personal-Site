import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LogicService } from './logic.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
