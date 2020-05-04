import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions={};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      credits:{
        enabled:false
      },
      exporting:{
        enabled:false
      },
      tooltip: {
          split: true,
          outside:true
      },
      legend:{
enabled:false
      },
      series: [{
         data:[34,67,45,77,34]
      }]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300)

  }
}
