import {Component, OnInit} from '@angular/core';
import {GlucosemeterDaySummary} from '@AutochekCommon/vanilla/objects/device-data-object';
import {AutochekChartOption} from '@AutochekChart/chart.option';
import * as moment from 'moment';
import {drawGlucoseChart} from '@AutochekChart/glucose-chart';

@Component({
  selector: 'app-glucosechart',
  templateUrl: './glucosechart.component.html',
  styleUrls: ['./glucosechart.component.css']
})
export class GlucosechartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const end = moment().startOf('day').toDate();
    const startOfDay = moment(end).subtract(1, 'day').toDate();
    const start = moment(end).subtract(31, 'day').toDate();
    const glucoseData: GlucosemeterDaySummary[] = makeTestCaseForGlucose(start, end);
    const glucoseMinMax: AutochekChartOption = {
      glucose: {
        b_meal_min: 80,
        b_meal_max: 120,
        a_meal_min: 100,
        a_meal_max: 200,
        sleep_min: 80,
        sleep_max: 120
      }
    };
    drawGlucoseChart('glucose', glucoseData, glucoseMinMax);
  }

}

function makeTestCaseForGlucose(start, end) {
  const diff = moment(end).diff(start, 'day');

  const rtnGlucoseDaySummery: GlucosemeterDaySummary[] = [];

  for (let i = 0; i < diff; i++) {
    const temp = moment(start).add(i, 'day').toDate();
    const bBreakfast = Number.parseFloat((Math.random() * 140 + 50).toFixed(2));
    const aBreakfast = Number.parseFloat((Math.random() * 160 + 50).toFixed(2));
    // const bLunch = Number.parseFloat((Math.random() * 140 + 50).toFixed(2));
    const aLunch = Number.parseFloat((Math.random() * 140 + 50).toFixed(2));
    const bDinner = Number.parseFloat((Math.random() * 140 + 50).toFixed(2));
    // const aDinner = Number.parseFloat((Math.random() * 140 + 50).toFixed(2));
    const bSleep = Number.parseFloat((Math.random() * 140 + 50).toFixed(2));

    const tempGlucose = new GlucosemeterDaySummary(temp);

    tempGlucose.morningBeforeMeal = bBreakfast;
    tempGlucose.morningAfterMeal = aBreakfast;
    // tempGlucose.afternoonBeforeMeal = bLunch;
    tempGlucose.afternoonAfterMeal = aLunch;
    tempGlucose.eveningBeforeMeal = bDinner;
    // tempGlucose.eveningAfterMeal = aDinner;
    if (bSleep > 170) {
      tempGlucose.beforeSleep = bSleep;
    }

    rtnGlucoseDaySummery.push(tempGlucose);
  }

  return rtnGlucoseDaySummery;
}
