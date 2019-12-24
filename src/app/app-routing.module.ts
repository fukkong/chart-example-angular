import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeartratechartComponent} from './heartratechart/heartratechart.component';
import {SleepchartComponent} from './sleepchart/sleepchart.component';
import {GlucosechartComponent} from './glucosechart/glucosechart.component';
import {SplitglucosechartComponent} from './splitglucosechart/splitglucosechart.component';
import {PedometerchartComponent} from './pedometerchart/pedometerchart.component';


const routes: Routes = [
  {path: '', redirectTo: '/glucose', pathMatch: 'full'},
  {path: 'glucose', component: GlucosechartComponent},
  {path: 'sleep', component: SleepchartComponent},
  {path: 'split', component: SplitglucosechartComponent},
  {path: 'heartrate', component: HeartratechartComponent},
  {path: 'pedometer', component: PedometerchartComponent},
  {path: '**', redirectTo: '/glucose', pathMatch: 'full'}
];

export const AppRouterModule = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
