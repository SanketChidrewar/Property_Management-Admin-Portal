import { PropertyService } from './../property.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {
  amount = []
  label = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]; 
  
  flag = false

  lineChartData:ChartDataSets[]
  lineChartLabels: Label[]
  lineChartColors: Color[]
  lineChartLegend:boolean
  lineChartType = ""
  lineChartPlugins:[]
  
  
  constructor(private property:PropertyService) {
    this.amount = this.label.map((item)=>{
      return 0;
    })
   }

  ngOnInit(): void {
    this.loadRevenue()
  }

  loadRevenue()
  {
    this.property.getRevenue().subscribe(res=>{
      if(res['status'] == "success")
      {
        res['data'].map((item)=>{
          this.amount[this.label.indexOf(item.month)]=parseInt(item.amount)
        })
        console.log(this.amount)
        this.flag = true;

        this.loadChart(this.amount)
      }
      else
      {
        console.log(res["error"])
      }
    })
  }


  loadChart(amount)
  {
    this.lineChartData= [
      { data: amount, label: 'Revenue' },
    ];
    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    // public lineChartOptions : (ChartOptions & { annotation: any }) = {
    //   responsive: true,
    // };
    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ];
    this.lineChartLegend = true;
    this.lineChartType = 'line';
    this.lineChartPlugins = [];
  }
}
