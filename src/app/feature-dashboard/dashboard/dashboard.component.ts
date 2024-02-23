import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;
  isButtonHidden = false;
  chart: any

  ngOnInit() {
    this.getChart();

  }

  getChart(): void {
    const options: Highcharts.Options = {
      chart: {
        renderTo: 'container'
      },
      title: {
        text: 'Report',
        align: 'left'
      },

      xAxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        accessibility: {
          description: 'Day of the week',
        },
      },
      yAxis: {
        labels: {
          format: '{value}',
        },
      },
      tooltip: {
        shared: true,
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1,
          },
        },
      },
      series: [
        {
          type: 'line',
          name: 'Golf',
          marker: {
            symbol: 'circle',
          },
          data: [  {name: "Sun", y: 1 },
            {name: "Mon", y: 2 },
            {name: "Tue", y: 6 },
            {name: "Wed", y: 1 },
            {name: "Thu", y: 5 },
            {name: "Fri", y: 1 },
            {name: "Sat", y: 0 }],
        },
        {
          type: 'line',
          name: 'F&B',
          marker: {
            symbol: 'circle',
          },
          data: [  {name: "Sun", y: 1 },
            {name: "Mon", y: 1 },
            {name: "Tue", y: 2 },
            {name: "Wed", y: 3 },
            {name: "Thu", y: 1 },
            {name: "Fri", y: 2 },
            {name: "Sat", y: 3 }],
        },
      ],
    };
    this.chart = Highcharts.chart(options)
  }
}
