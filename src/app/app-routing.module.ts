import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeartratechartComponent} from './heartratechart/heartratechart.component';
import {SleepchartComponent} from './sleepchart/sleepchart.component';
import {GlucosechartComponent} from './glucosechart/glucosechart.component';


const routes: Routes = [
  {path: '', redirectTo: '/glucose', pathMatch: 'full'},
  {path: 'glucose', component: GlucosechartComponent},
  {path: 'sleep', component: SleepchartComponent},
  {path:'heartrate', component: HeartratechartComponent},
  {path: '**', redirectTo: '/glucose', pathMatch: 'full'}


];

export const AppRouterModule = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
