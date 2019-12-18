import {Component, OnInit} from '@angular/core';
import {drawSleepChart} from '@AutochekChart/sleep-segment-chart';
import * as moment from 'moment';
import {PedometerSleepSegment} from '@AutochekCommon/vanilla/objects/device-data-object';

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
    const end = moment('2019-10-25T12:15:51.530Z').endOf('day').toDate();
    const testCase = makeTestCase();
    drawSleepChart('sleepLog', testCase);
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
