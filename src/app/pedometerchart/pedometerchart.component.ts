import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {PedometerDaySummary, PedometerTimeSegment} from '@AutochekCommon/vanilla/objects/device-data-object';
import {drawPedometerChart} from '@AutochekChart/pedometer-chart';

@Component({
  selector: 'app-pedometerchart',
  templateUrl: './pedometerchart.component.html',
  styleUrls: ['./pedometerchart.component.css']
})
export class PedometerchartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const end = moment().endOf('day').toDate();
    const startOfDay = moment(end).subtract(1, 'day').toDate();
    const start = moment(end).subtract(31, 'day').toDate();
    const data = makeTestCase(start, end);
    const dayData = makeTestCaseforDayData(startOfDay, end);
    drawPedometerChart('pedometerChart', data);
    drawPedometerChart('pedometerSummaryChart', dayData);
  }

}

function makeTestCase(start, end) {
  const diff = moment(end).diff(start, 'days');

  const rtnPedometerList: PedometerDaySummary[] = [];

  for (let i = 0; i < diff + 1; i++) {
    const temp = moment(start).add(i, 'day').toDate();
    const step = Math.floor(Math.random() * 4000);
    const cal = Number.parseFloat((Math.random() * 100).toFixed(2));
    const dist = Number.parseFloat((Math.random() * 4).toFixed(2));
    const tempPedometer = new PedometerDaySummary(temp, step, cal, dist);
    rtnPedometerList.push(tempPedometer);
  }
  return rtnPedometerList;
}

function makeTestCaseforDayData(start, end) {
  const diff = moment(end).diff(start, 'second') / 300;

  const rtnPedometerTimeSegment: PedometerTimeSegment[] = [];

  for (let i = 0; i < diff; i++) {
    const temp = moment(start).add(5 * i, 'minute').toDate();
    const step = Math.floor(Math.random() * 1000);
    const cal = Number.parseFloat((Math.random() * 50).toFixed(2));
    const dist = Number.parseFloat((Math.random() * 2).toFixed(2));
    const tempPedometer = new PedometerTimeSegment(temp, 10, step, cal, dist);
    rtnPedometerTimeSegment.push(tempPedometer);
  }
  return rtnPedometerTimeSegment;
}
