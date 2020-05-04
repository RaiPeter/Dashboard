import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){
    return[{
      name:'Asia',
      data: [345,567,235,678,124,865,346]
    },
    {
      name:'Africa',
      data: [455,568,434,234,144,233,212]
    },
    {
      name:'Europe',
      data: [234,345,234,456,436,563,344]
    },
    {
      name:'America',
      data: [134,568,134,463,124,342,234]
    },
    {
      name:'Oceana',
      data: [124,345,576,456,235,346,124]
    }]
  }

  cards(){
    return [ 123,45,456,676]
  }

  pie(){
    return  [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Internet Explorer',
      y: 11.84
  }, {
      name: 'Firefox',
      y: 10.85
  }, {
      name: 'Edge',
      y: 4.67
  }, {
      name: 'Safari',
      y: 4.18
  }, {
      name: 'Sogou Explorer',
      y: 1.64
  }, {
      name: 'Opera',
      y: 1.6
  }, {
      name: 'QQ',
      y: 1.2
  }, {
      name: 'Other',
      y: 2.61
  }]
  }
}
