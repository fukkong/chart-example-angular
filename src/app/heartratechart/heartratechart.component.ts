import {Component, OnInit} from '@angular/core';
import {drawHeartRateChart, drawSecondHeartRateChart} from '@AutochekChart/heart-rate-chart';
import {PedometerHeartrateSegment} from '@AutochekCommon/vanilla/objects/device-data-object';

@Component({
  selector: 'app-heartratechart',
  templateUrl: './heartratechart.component.html',
  styleUrls: ['./heartratechart.component.css']
})
export class HeartratechartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const heartrateData: PedometerHeartrateSegment[] = makeHeartRateTestCase(realdata);
    drawHeartRateChart('heartrate', heartrateData);
    drawSecondHeartRateChart('heartrate2', heartrateData);
  }

}

function makeHeartRateTestCase(inputData) {
  const rtnData = [];
  inputData.forEach(data => {
    const temp = new PedometerHeartrateSegment(data.date, data.rate);
    rtnData.push(temp);
  });
  return rtnData;
}

const realdata = [{'date': '2019-12-06T15:00:00.289Z', 'rate': 74}, {
  'date': '2019-12-06T15:05:00.289Z',
  'rate': 75
}, {'date': '2019-12-06T15:10:00.289Z', 'rate': 80}, {'date': '2019-12-06T15:15:00.289Z', 'rate': 66}, {
  'date': '2019-12-06T15:20:00.289Z',
  'rate': 78
}, {'date': '2019-12-06T15:25:00.289Z', 'rate': 83}, {'date': '2019-12-06T15:30:00.289Z', 'rate': 70}, {
  'date': '2019-12-06T15:35:00.289Z',
  'rate': 74
}, {'date': '2019-12-06T15:40:00.289Z', 'rate': 73}, {'date': '2019-12-06T15:45:00.289Z', 'rate': 64}, {
  'date': '2019-12-06T15:50:00.289Z',
  'rate': 77
}, {'date': '2019-12-06T15:55:00.289Z', 'rate': 90}, {'date': '2019-12-06T16:00:00.289Z', 'rate': 93}, {
  'date': '2019-12-06T16:05:00.289Z',
  'rate': 68
}, {'date': '2019-12-06T16:10:00.289Z', 'rate': 97}, {'date': '2019-12-06T16:15:00.289Z', 'rate': 86}, {
  'date': '2019-12-06T16:20:00.289Z',
  'rate': 71
}, {'date': '2019-12-06T16:25:00.289Z', 'rate': 0}, {'date': '2019-12-06T16:30:00.289Z', 'rate': 85}, {
  'date': '2019-12-06T16:35:00.289Z',
  'rate': 78
}, {'date': '2019-12-06T16:40:00.289Z', 'rate': 86}, {'date': '2019-12-06T16:45:00.289Z', 'rate': 67}, {
  'date': '2019-12-06T16:50:00.289Z',
  'rate': 78
}, {'date': '2019-12-06T16:55:00.289Z', 'rate': 74}, {'date': '2019-12-06T17:00:00.289Z', 'rate': 72}, {
  'date': '2019-12-06T17:05:00.289Z',
  'rate': 88
}, {'date': '2019-12-06T17:10:00.289Z', 'rate': 87}, {'date': '2019-12-06T17:15:00.289Z', 'rate': 94}, {
  'date': '2019-12-06T17:20:00.289Z',
  'rate': 81
}, {'date': '2019-12-06T17:25:00.289Z', 'rate': 76}, {'date': '2019-12-06T17:30:00.289Z', 'rate': 68}, {
  'date': '2019-12-06T17:35:00.289Z',
  'rate': 83
}, {'date': '2019-12-06T17:40:00.289Z', 'rate': 83}, {'date': '2019-12-06T17:45:00.289Z', 'rate': 67}, {
  'date': '2019-12-06T17:50:00.289Z',
  'rate': 71
}, {'date': '2019-12-06T17:55:00.289Z', 'rate': 78}, {'date': '2019-12-06T18:00:00.289Z', 'rate': 66}, {
  'date': '2019-12-06T18:05:00.289Z',
  'rate': 68
}, {'date': '2019-12-06T18:10:00.289Z', 'rate': 69}, {'date': '2019-12-06T18:15:00.289Z', 'rate': 68}, {
  'date': '2019-12-06T18:20:00.289Z',
  'rate': 74
}, {'date': '2019-12-06T18:25:00.289Z', 'rate': 67}, {'date': '2019-12-06T18:30:00.289Z', 'rate': 76}, {
  'date': '2019-12-06T18:35:00.289Z',
  'rate': 73
}, {'date': '2019-12-06T18:40:00.289Z', 'rate': 68}, {'date': '2019-12-06T18:45:00.289Z', 'rate': 66}, {
  'date': '2019-12-06T18:50:00.289Z',
  'rate': 66
}, {'date': '2019-12-06T18:55:00.289Z', 'rate': 70}, {'date': '2019-12-06T19:00:00.289Z', 'rate': 71}, {
  'date': '2019-12-06T19:05:00.289Z',
  'rate': 66
}, {'date': '2019-12-06T19:10:00.289Z', 'rate': 66}, {'date': '2019-12-06T19:15:00.289Z', 'rate': 68}, {
  'date': '2019-12-06T19:20:00.289Z',
  'rate': 65
}, {'date': '2019-12-06T19:25:00.289Z', 'rate': 69}, {'date': '2019-12-06T19:30:00.289Z', 'rate': 66}, {
  'date': '2019-12-06T19:35:00.289Z',
  'rate': 64
}, {'date': '2019-12-06T19:40:00.289Z', 'rate': 64}, {'date': '2019-12-06T19:45:00.289Z', 'rate': 70}, {
  'date': '2019-12-06T19:50:00.289Z',
  'rate': 64
}, {'date': '2019-12-06T19:55:00.289Z', 'rate': 62}, {'date': '2019-12-06T20:00:00.289Z', 'rate': 66}, {
  'date': '2019-12-06T20:05:00.289Z',
  'rate': 67
}, {'date': '2019-12-06T20:10:00.289Z', 'rate': 67}, {'date': '2019-12-06T20:15:00.289Z', 'rate': 68}, {
  'date': '2019-12-06T20:20:00.289Z',
  'rate': 62
}, {'date': '2019-12-06T20:25:00.289Z', 'rate': 60}, {'date': '2019-12-06T20:30:00.289Z', 'rate': 69}, {
  'date': '2019-12-06T20:35:00.289Z',
  'rate': 57
}, {'date': '2019-12-06T20:40:00.289Z', 'rate': 58}, {'date': '2019-12-06T20:45:00.289Z', 'rate': 58}, {
  'date': '2019-12-06T20:50:00.289Z',
  'rate': 63
}, {'date': '2019-12-06T20:55:00.289Z', 'rate': 60}, {'date': '2019-12-06T21:00:00.289Z', 'rate': 57}, {
  'date': '2019-12-06T21:05:00.289Z',
  'rate': 57
}, {'date': '2019-12-06T21:10:00.289Z', 'rate': 60}, {'date': '2019-12-06T21:15:00.289Z', 'rate': 60}, {
  'date': '2019-12-06T21:20:00.289Z',
  'rate': 0
}, {'date': '2019-12-06T21:25:00.289Z', 'rate': 0}, {'date': '2019-12-06T21:30:00.289Z', 'rate': 0}, {
  'date': '2019-12-06T21:35:00.289Z',
  'rate': 0
}, {'date': '2019-12-06T21:40:00.289Z', 'rate': 75}, {'date': '2019-12-06T21:45:00.289Z', 'rate': 58}, {
  'date': '2019-12-06T21:50:00.289Z',
  'rate': 58
}, {'date': '2019-12-06T21:55:00.289Z', 'rate': 57}, {'date': '2019-12-06T22:00:00.289Z', 'rate': 56}, {
  'date': '2019-12-06T22:05:00.289Z',
  'rate': 84
}, {'date': '2019-12-06T22:10:00.289Z', 'rate': 70}, {'date': '2019-12-06T22:15:00.289Z', 'rate': 62}, {
  'date': '2019-12-06T22:20:00.289Z',
  'rate': 52
}, {'date': '2019-12-06T22:25:00.289Z', 'rate': 60}, {'date': '2019-12-06T22:30:00.289Z', 'rate': 55}, {
  'date': '2019-12-06T22:35:00.289Z',
  'rate': 79
}, {'date': '2019-12-06T22:40:00.289Z', 'rate': 71}, {'date': '2019-12-06T22:45:00.289Z', 'rate': 57}, {
  'date': '2019-12-06T22:50:00.289Z',
  'rate': 70
}, {'date': '2019-12-06T22:55:00.289Z', 'rate': 63}, {'date': '2019-12-06T23:00:00.289Z', 'rate': 66}, {
  'date': '2019-12-06T23:05:00.289Z',
  'rate': 83
}, {'date': '2019-12-06T23:10:00.289Z', 'rate': 59}, {'date': '2019-12-06T23:15:00.289Z', 'rate': 62}, {
  'date': '2019-12-06T23:20:00.289Z',
  'rate': 65
}, {'date': '2019-12-06T23:25:00.289Z', 'rate': 63}, {'date': '2019-12-06T23:30:00.289Z', 'rate': 66}, {
  'date': '2019-12-06T23:35:00.289Z',
  'rate': 63
}, {'date': '2019-12-06T23:40:00.289Z', 'rate': 62}, {'date': '2019-12-06T23:45:00.289Z', 'rate': 83}, {
  'date': '2019-12-06T23:50:00.289Z',
  'rate': 71
}, {'date': '2019-12-06T23:55:00.289Z', 'rate': 67}, {'date': '2019-12-07T00:00:00.289Z', 'rate': 100}, {
  'date': '2019-12-07T00:05:00.289Z',
  'rate': 72
}, {'date': '2019-12-07T00:10:00.289Z', 'rate': 74}, {'date': '2019-12-07T00:15:00.289Z', 'rate': 0}, {
  'date': '2019-12-07T00:20:00.289Z',
  'rate': 74
}, {'date': '2019-12-07T00:25:00.289Z', 'rate': 85}, {'date': '2019-12-07T00:30:00.289Z', 'rate': 97}, {
  'date': '2019-12-07T00:35:00.289Z',
  'rate': 77
}, {'date': '2019-12-07T00:40:00.289Z', 'rate': 75}, {'date': '2019-12-07T00:45:00.289Z', 'rate': 83}, {
  'date': '2019-12-07T00:50:00.289Z',
  'rate': 100
}, {'date': '2019-12-07T00:55:00.289Z', 'rate': 81}, {'date': '2019-12-07T01:00:00.289Z', 'rate': 83}, {
  'date': '2019-12-07T01:05:00.289Z',
  'rate': 80
}, {'date': '2019-12-07T01:10:00.289Z', 'rate': 78}, {'date': '2019-12-07T01:15:00.289Z', 'rate': 90}, {
  'date': '2019-12-07T01:20:00.289Z',
  'rate': 90
}, {'date': '2019-12-07T01:25:00.289Z', 'rate': 0}, {'date': '2019-12-07T01:30:00.289Z', 'rate': 85}, {
  'date': '2019-12-07T01:35:00.289Z',
  'rate': 72
}, {'date': '2019-12-07T01:40:00.289Z', 'rate': 82}, {'date': '2019-12-07T01:45:00.289Z', 'rate': 82}, {
  'date': '2019-12-07T01:50:00.289Z',
  'rate': 79
}, {'date': '2019-12-07T01:55:00.289Z', 'rate': 86}, {'date': '2019-12-07T02:00:00.289Z', 'rate': 74}, {
  'date': '2019-12-07T02:05:00.289Z',
  'rate': 89
}, {'date': '2019-12-07T02:10:00.289Z', 'rate': 75}, {'date': '2019-12-07T02:15:00.289Z', 'rate': 69}, {
  'date': '2019-12-07T02:20:00.289Z',
  'rate': 92
}, {'date': '2019-12-07T02:25:00.289Z', 'rate': 74}, {'date': '2019-12-07T02:30:00.289Z', 'rate': 86}, {
  'date': '2019-12-07T02:35:00.289Z',
  'rate': 83
}, {'date': '2019-12-07T02:40:00.289Z', 'rate': 111}, {'date': '2019-12-07T02:45:00.289Z', 'rate': 77}, {
  'date': '2019-12-07T02:50:00.289Z',
  'rate': 95
}, {'date': '2019-12-07T02:55:00.289Z', 'rate': 104}, {
  'date': '2019-12-07T03:00:00.289Z',
  'rate': 104
}, {'date': '2019-12-07T03:05:00.289Z', 'rate': 89}, {'date': '2019-12-07T03:07:00.298Z', 'rate': 95}, {
  'date': '2019-12-07T03:12:00.298Z',
  'rate': 59
}, {'date': '2019-12-07T03:17:00.298Z', 'rate': 103}, {
  'date': '2019-12-07T03:22:00.298Z',
  'rate': 103
}, {'date': '2019-12-07T03:27:00.298Z', 'rate': 93}, {'date': '2019-12-07T03:32:00.298Z', 'rate': 68}, {
  'date': '2019-12-07T03:37:00.298Z',
  'rate': 107
}, {'date': '2019-12-07T03:42:00.298Z', 'rate': 93}, {'date': '2019-12-07T03:47:00.298Z', 'rate': 97}, {
  'date': '2019-12-07T03:52:00.298Z',
  'rate': 81
}, {'date': '2019-12-07T03:57:00.298Z', 'rate': 111}, {
  'date': '2019-12-07T04:02:00.298Z',
  'rate': 108
}, {'date': '2019-12-07T04:07:00.298Z', 'rate': 86}, {'date': '2019-12-07T04:12:00.298Z', 'rate': 115}, {
  'date': '2019-12-07T04:17:00.298Z',
  'rate': 104
}, {'date': '2019-12-07T04:22:00.298Z', 'rate': 90}, {'date': '2019-12-07T04:27:00.298Z', 'rate': 91}, {
  'date': '2019-12-07T04:32:00.298Z',
  'rate': 100
}, {'date': '2019-12-07T04:37:00.298Z', 'rate': 87}, {'date': '2019-12-07T04:42:00.298Z', 'rate': 0}, {
  'date': '2019-12-07T04:47:00.298Z',
  'rate': 94
}, {'date': '2019-12-07T04:52:00.298Z', 'rate': 90}, {'date': '2019-12-07T04:57:00.298Z', 'rate': 85}, {
  'date': '2019-12-07T05:02:00.298Z',
  'rate': 94
}, {'date': '2019-12-07T05:07:00.298Z', 'rate': 93}, {'date': '2019-12-07T05:12:00.298Z', 'rate': 86}, {
  'date': '2019-12-07T05:17:00.298Z',
  'rate': 87
}, {'date': '2019-12-07T05:22:00.298Z', 'rate': 88}, {'date': '2019-12-07T05:27:00.298Z', 'rate': 80}, {
  'date': '2019-12-07T05:32:00.298Z',
  'rate': 82
}, {'date': '2019-12-07T05:37:00.298Z', 'rate': 85}, {'date': '2019-12-07T05:42:00.298Z', 'rate': 85}, {
  'date': '2019-12-07T05:47:00.298Z',
  'rate': 90
}, {'date': '2019-12-07T05:52:00.298Z', 'rate': 86}, {'date': '2019-12-07T05:57:00.298Z', 'rate': 81}, {
  'date': '2019-12-07T06:02:00.298Z',
  'rate': 86
}, {'date': '2019-12-07T06:07:00.298Z', 'rate': 86}, {'date': '2019-12-07T06:12:00.298Z', 'rate': 85}, {
  'date': '2019-12-07T06:17:00.298Z',
  'rate': 93
}, {'date': '2019-12-07T06:22:00.298Z', 'rate': 86}, {'date': '2019-12-07T06:27:00.298Z', 'rate': 87}, {
  'date': '2019-12-07T06:32:00.298Z',
  'rate': 85
}, {'date': '2019-12-07T06:37:00.298Z', 'rate': 84}, {'date': '2019-12-07T06:42:00.298Z', 'rate': 80}, {
  'date': '2019-12-07T06:47:00.298Z',
  'rate': 0
}, {'date': '2019-12-07T06:52:00.298Z', 'rate': 81}, {'date': '2019-12-07T06:57:00.298Z', 'rate': 85}, {
  'date': '2019-12-07T07:02:00.298Z',
  'rate': 78
}, {'date': '2019-12-07T07:07:00.298Z', 'rate': 80}, {'date': '2019-12-07T07:12:00.298Z', 'rate': 86}, {
  'date': '2019-12-07T07:17:00.298Z',
  'rate': 76
}, {'date': '2019-12-07T07:22:00.298Z', 'rate': 74}, {'date': '2019-12-07T07:27:00.298Z', 'rate': 74}, {
  'date': '2019-12-07T07:32:00.298Z',
  'rate': 82
}, {'date': '2019-12-07T07:37:00.298Z', 'rate': 85}, {'date': '2019-12-07T07:42:00.298Z', 'rate': 74}, {
  'date': '2019-12-07T07:47:00.298Z',
  'rate': 93
}, {'date': '2019-12-07T07:52:00.298Z', 'rate': 78}, {'date': '2019-12-07T07:57:00.298Z', 'rate': 87}, {
  'date': '2019-12-07T08:02:00.298Z',
  'rate': 74
}, {'date': '2019-12-07T08:07:00.298Z', 'rate': 83}, {'date': '2019-12-07T08:12:00.298Z', 'rate': 63}, {
  'date': '2019-12-07T08:17:00.298Z',
  'rate': 83
}, {'date': '2019-12-07T08:22:00.298Z', 'rate': 76}, {'date': '2019-12-07T08:27:00.298Z', 'rate': 80}, {
  'date': '2019-12-07T08:32:00.298Z',
  'rate': 90
}, {'date': '2019-12-07T08:37:00.298Z', 'rate': 83}, {'date': '2019-12-07T08:42:00.298Z', 'rate': 81}, {
  'date': '2019-12-07T08:47:00.298Z',
  'rate': 86
}, {'date': '2019-12-07T08:52:00.298Z', 'rate': 83}, {'date': '2019-12-07T08:57:00.298Z', 'rate': 71}, {
  'date': '2019-12-07T09:02:00.298Z',
  'rate': 81
}, {'date': '2019-12-07T09:07:00.298Z', 'rate': 74}, {'date': '2019-12-07T09:12:00.298Z', 'rate': 75}, {
  'date': '2019-12-07T09:17:00.298Z',
  'rate': 87
}, {'date': '2019-12-07T09:22:00.298Z', 'rate': 99}, {'date': '2019-12-07T09:27:00.298Z', 'rate': 74}, {
  'date': '2019-12-07T09:32:00.298Z',
  'rate': 83
}, {'date': '2019-12-07T09:37:00.298Z', 'rate': 77}, {'date': '2019-12-07T09:42:00.298Z', 'rate': 75}, {
  'date': '2019-12-07T09:47:00.298Z',
  'rate': 72
}, {'date': '2019-12-07T09:52:00.298Z', 'rate': 78}, {'date': '2019-12-07T09:57:00.298Z', 'rate': 74}, {
  'date': '2019-12-07T10:02:00.298Z',
  'rate': 79
}, {'date': '2019-12-07T10:07:00.298Z', 'rate': 74}, {'date': '2019-12-07T10:12:00.298Z', 'rate': 81}, {
  'date': '2019-12-07T10:17:00.298Z',
  'rate': 80
}, {'date': '2019-12-07T10:22:00.298Z', 'rate': 97}, {'date': '2019-12-07T10:27:00.298Z', 'rate': 74}, {
  'date': '2019-12-07T10:32:00.298Z',
  'rate': 87
}, {'date': '2019-12-07T10:37:00.298Z', 'rate': 95}, {'date': '2019-12-07T10:42:00.298Z', 'rate': 81}, {
  'date': '2019-12-07T10:47:00.298Z',
  'rate': 87
}, {'date': '2019-12-07T10:52:00.298Z', 'rate': 92}, {'date': '2019-12-07T10:57:00.298Z', 'rate': 95}, {
  'date': '2019-12-07T11:02:00.298Z',
  'rate': 73
}, {'date': '2019-12-07T11:07:00.298Z', 'rate': 96}, {'date': '2019-12-07T11:12:00.298Z', 'rate': 81}, {
  'date': '2019-12-07T11:17:00.298Z',
  'rate': 65
}, {'date': '2019-12-07T11:22:00.298Z', 'rate': 76}, {'date': '2019-12-07T11:27:00.298Z', 'rate': 81}, {
  'date': '2019-12-07T11:32:00.298Z',
  'rate': 78
}, {'date': '2019-12-07T11:37:00.298Z', 'rate': 67}, {'date': '2019-12-07T11:42:00.298Z', 'rate': 71}, {
  'date': '2019-12-07T11:47:00.298Z',
  'rate': 68
}, {'date': '2019-12-07T11:52:00.298Z', 'rate': 76}, {'date': '2019-12-07T11:57:00.298Z', 'rate': 75}, {
  'date': '2019-12-07T12:02:00.298Z',
  'rate': 80
}, {'date': '2019-12-07T12:07:00.298Z', 'rate': 70}, {'date': '2019-12-07T12:12:00.298Z', 'rate': 80}, {
  'date': '2019-12-07T12:17:00.298Z',
  'rate': 71
}, {'date': '2019-12-07T12:22:00.298Z', 'rate': 74}, {'date': '2019-12-07T12:27:00.298Z', 'rate': 70}, {
  'date': '2019-12-07T12:32:00.298Z',
  'rate': 65
}, {'date': '2019-12-07T12:37:00.298Z', 'rate': 90}, {'date': '2019-12-07T12:42:00.298Z', 'rate': 77}, {
  'date': '2019-12-07T12:47:00.298Z',
  'rate': 87
}, {'date': '2019-12-07T12:52:00.298Z', 'rate': 0}, {'date': '2019-12-07T12:57:00.298Z', 'rate': 71}, {
  'date': '2019-12-07T13:02:00.298Z',
  'rate': 87
}, {'date': '2019-12-07T13:07:00.298Z', 'rate': 75}, {'date': '2019-12-07T13:12:00.298Z', 'rate': 64}, {
  'date': '2019-12-07T13:17:00.298Z',
  'rate': 80
}, {'date': '2019-12-07T13:22:00.298Z', 'rate': 72}, {'date': '2019-12-07T13:27:00.298Z', 'rate': 89}, {
  'date': '2019-12-07T13:32:00.298Z',
  'rate': 78
}, {'date': '2019-12-07T13:37:00.298Z', 'rate': 77}, {'date': '2019-12-07T13:42:00.298Z', 'rate': 78}, {
  'date': '2019-12-07T13:47:00.298Z',
  'rate': 66
}, {'date': '2019-12-07T13:52:00.298Z', 'rate': 70}, {'date': '2019-12-07T13:57:00.298Z', 'rate': 71}, {
  'date': '2019-12-07T14:02:00.298Z',
  'rate': 67
}, {'date': '2019-12-07T14:07:00.298Z', 'rate': 95}, {'date': '2019-12-07T14:12:00.298Z', 'rate': 0}, {
  'date': '2019-12-07T14:17:00.298Z',
  'rate': 91
}, {'date': '2019-12-07T14:22:00.298Z', 'rate': 0}, {'date': '2019-12-07T14:27:00.298Z', 'rate': 0}, {
  'date': '2019-12-07T14:32:00.298Z',
  'rate': 0
}, {'date': '2019-12-07T14:37:00.298Z', 'rate': 0}, {'date': '2019-12-07T14:42:00.298Z', 'rate': 0}, {
  'date': '2019-12-07T14:47:00.298Z',
  'rate': 0
}, {'date': '2019-12-07T14:52:00.298Z', 'rate': 0}];
