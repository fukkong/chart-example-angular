import {Component, OnInit} from '@angular/core';
import {drawBodyScaleChart} from '@AutochekChart/body-scale-chart';
import * as moment from 'moment';
import {BodyscaleMeasurement} from 'autochek-base//objects/device-data-object';

@Component({
  selector: 'app-bodyscalechart',
  templateUrl: './bodyscalechart.component.html',
  styleUrls: ['./bodyscalechart.component.css']
})
export class BodyscalechartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const end = moment().startOf('day').toDate();
    const start = moment(end).subtract(31, 'day').toDate();
    const bodyscale = makeTestCaseForBodyScale(start, end);
    drawBodyScaleChart('weight', bodyscale, {bodyScale: 'weight'});
    drawBodyScaleChart('bmi', bodyscale, {bodyScale: 'bmi'});
    drawBodyScaleChart('visceral', bodyscale, {bodyScale: 'visceral'});
    drawBodyScaleChart('bone', bodyscale, {bodyScale: 'bone'});
    drawBodyScaleChart('bmr', bodyscale, {bodyScale: 'bmr'});
  }
}

function makeTestCaseForBodyScale(start, end) {
  const diff = moment(end).diff(start, 'day');

  const rtnBodyScale: BodyscaleMeasurement[] = [];

  for (let i = 0; i < diff; i++) {
    const temp = moment(start).add(i, 'days').toDate();
    const step = Math.floor(Math.random() * 1000);
    const cal = Number.parseFloat((Math.random() * 50).toFixed(2));
    const dist = Number.parseFloat((Math.random() * 2).toFixed(2));
    const tempBodyScale = new BodyscaleMeasurement();
    tempBodyScale.date = temp;
    tempBodyScale.weight = Number.parseFloat((Math.random() * 5 + 65).toFixed(2));
    tempBodyScale.fat = Number.parseFloat((Math.random() * 4 + 15).toFixed(2));
    tempBodyScale.water = Number.parseFloat((Math.random() * 10 + 50).toFixed(2));
    tempBodyScale.bmr = Number.parseFloat((Math.random() * 300 + 1200).toFixed(2));
    tempBodyScale.visceral = Number.parseFloat((Math.random() * 10 + 5).toFixed(2));
    tempBodyScale.bone = Number.parseFloat((Math.random() * 50).toFixed(2));
    tempBodyScale.bmi = Number.parseFloat((Math.random() * 50).toFixed(2));
    rtnBodyScale.push(tempBodyScale);
  }
  console.log(rtnBodyScale);
  return rtnBodyScale;

}
