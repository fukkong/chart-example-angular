import {Component, OnInit} from '@angular/core';
import {drawSleepChart} from '@AutochekChart/sleep-segment-chart';
import * as moment from 'moment';
import {PedometerSleepSegment, PedometerSleepSummary} from 'autochek-base/objects/device-data-object';

@Component({
  selector: 'app-sleepchart',
  templateUrl: './sleepchart.component.html',
  styleUrls: ['./sleepchart.component.css']
})
export class SleepchartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const start = moment('2019-10-25T04:10:51.530Z').startOf('day').toDate();
    const end = moment().startOf('day');
    const testCase = makeTestCase();
    const sleepSummaryTestcase = makeSleepSummaryTestCase(7);
    drawSleepChart('sleepLog', testCase);
    drawSleepChart('sleepSummary', sleepSummaryTestcase);
  }

}

function makeTestCase() {
  const addTime = Math.floor(Math.random() * 3 + 5);
  const rtnPedometerList: PedometerSleepSegment[] = [];
  let tempTime: Date = moment().startOf('day').toDate();
  for (let i = 0; i < addTime * 6; i++) {
    tempTime = new Date(moment(tempTime).add(10, 'minute').toDate());
    const tempSleepIndex = Math.floor(Math.random() * 3 + 1);
    const tempPedometer = new PedometerSleepSegment(tempTime, tempSleepIndex);
    rtnPedometerList.push(tempPedometer);
  }
  return rtnPedometerList;
}

function makeSleepSummaryTestCase(days: number) {
  const rtnPedometerList: PedometerSleepSummary[] = [];
  let tempTime: Date = moment().startOf('day').toDate();
  for (let i = 0; i < days; i++) {
    tempTime = new Date(moment(tempTime).subtract(1, 'days').toDate());
    const deepSleepTime = Math.floor(Math.random() * 180 + 100);
    const lightSleepTime = Math.floor(Math.random() * 240 + 60);
    console.log(deepSleepTime, lightSleepTime);
    const tempPedometer = new PedometerSleepSummary(tempTime, deepSleepTime, lightSleepTime);
    rtnPedometerList.push(tempPedometer);
  }
  return rtnPedometerList;
}
