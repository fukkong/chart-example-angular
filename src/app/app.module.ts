import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SleepchartComponent } from './sleepchart/sleepchart.component';
import { HeartratechartComponent } from './heartratechart/heartratechart.component';
import { GlucosechartComponent } from './glucosechart/glucosechart.component';
import { SplitglucosechartComponent } from './splitglucosechart/splitglucosechart.component';
import { PedometerchartComponent } from './pedometerchart/pedometerchart.component';
import { BodyscalechartComponent } from './bodyscalechart/bodyscalechart.component';

@NgModule({
  declarations: [
    AppComponent,
    SleepchartComponent,
    HeartratechartComponent,
    GlucosechartComponent,
    SplitglucosechartComponent,
    PedometerchartComponent,
    BodyscalechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
