import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BeatrizHeaderComponent } from './Componentes/beatriz-header/beatriz-header.component';
import { BeatrizTimerComponent } from './Componentes/beatriz-timer/beatriz-timer.component';
import { BeatrizSimpleInterestsComponent } from './Componentes/beatriz-simple-interests/beatriz-simple-interests.component';
import { BeatrizCompoumdInterestsComponent } from './Componentes/beatriz-compoumd-interests/beatriz-compoumd-interests.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BeatrizHeaderComponent,
    BeatrizTimerComponent,
    BeatrizSimpleInterestsComponent,
    BeatrizCompoumdInterestsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
