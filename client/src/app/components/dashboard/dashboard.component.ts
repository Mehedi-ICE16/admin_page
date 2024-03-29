import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTooltip,
  ApexResponsive,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions1 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
export interface ChartOptions2  {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle | undefined;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  team: boolean = false;
  isLoading = false;

    // @ViewChild("chart") chart: ChartComponent;
    public chartOptions1!: Partial<ChartOptions1>;
    public chartOptions2!: Partial<ChartOptions2>;

    ngOnInit(): void {
      this.initializeChartOptions();
    }
    series!:ApexAxisChartSeries;
    chart!:ApexChart;
    title!: ApexTitleSubtitle;

    initializeChartOptions(){
      this.title = {
        text: "Activity Completion Time"
      };
      this.series = [{
        name: "A/C Opening",
        data: [12,10,19]
      },
    {
      name: "A/C closing",
      data: [23,18,20]
    },
    {
      name: "A/C Servicing",
      data: [10,15,12]
    }
  ];
  this.chart = {
    type: "bar",
    width: 300,
    height: 220
  };

      this.chartOptions1 = {
        series: [150,1],
        chart: {
          width: 300,
          height:220,
          type: "donut"
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: "gradient"
        },
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };    
      this.chartOptions2 = {
        series: [
          {
            name: "A/C opening",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
          },
          {
            name: "A/C closing",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            name: "A/C servicing",
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
        chart: {
          height: 300,
          type: "line"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 5,
          curve: "straight",
          dashArray: [0, 8, 5]
        },
        title: {
          text: "Error Rate",
          align: "left"
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return (
              val +
              " - <strong>" +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              "</strong>"
            );
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          labels: {
            trim: false
          },
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan"
          ]
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function(val) {
                  return val + " (mins)";
                }
              }
            },
            {
              title: {
                formatter: function(val) {
                  return val + " per session";
                }
              }
            },
            {
              title: {
                formatter: function(val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: "#f1f1f1"
        }
      };
    }

 teamClicked(team: boolean) {
   this.team = !team;
   this.isLoading = true;
   // Perform some time-consuming operation
   setTimeout(() => {
     this.isLoading = false;
   }, 2500);
    }
  
    constructor() { }
}