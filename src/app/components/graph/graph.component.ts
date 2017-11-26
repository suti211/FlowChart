import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/impl/MockService';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  constructor(private mService: MockService) { }

  private measurements = [];
  private filteredMeasurements = [];
  public fromDate = '';
  public toDate = '';
  public bShowFilterModal = false;

  chart = new Chart({
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    xAxis: {
      type: 'datetime'
    },
    title: {
      text: 'Sensor data'
    },
    credits: {
      enabled: false
    },
  });

  ngOnInit() {
    this.getAllMeasurements();
  }

  getAllMeasurements(): void {
    this.mService.getMeasurements().subscribe(measures => {
      this.measurements = measures;
      this.setupChartDataSeries(this.measurements);
    });
  }

  setupChartDataSeries(measurements: any[]): void {
    // sorting because of the randomly generated dates
    measurements.sort( (m1, m2) => m1.getDate() - m2.getDate());
    this.chart.addSerie({data : measurements.map(a => a.getHeatPoint()), name: 'Energy(kJ)'});
    this.chart.addSerie({data : measurements.map(a => a.getFlow1Point()), name: 'Flow1(l/min)'});
    this.chart.addSerie({data : measurements.map(a => a.getFlow2Point()), name: 'Flow2(l/min)'});
    this.chart.addSerie({data : measurements.map(a => a.getTemp1Point()), name: 'Temp1(\xB0C)'});
    this.chart.addSerie({data : measurements.map(a => a.getTemp2Point()), name: 'Temp2(\xB0C)'});
  }

  filter(): void {
    if (this.fromDate !== '' && this.toDate !== '') {
      const from = new Date(this.fromDate).getTime();
      const to = new Date(this.toDate).getTime();
      this.filteredMeasurements = this.measurements.filter((measurement) => measurement.getDate() >= from && measurement.getDate() < to);
      this.resetChart();
      this.setupChartDataSeries(this.filteredMeasurements);
    }
  }

  resetFilter(): void {
    this.resetChart();
    this.getAllMeasurements();
  }

  resetChart(): void {
    // indexes change after removing, so we always remove the first seria from the 'queue'
    while ( this.chart.options.series.length > 0) {
      this.chart.removeSerie(0);
    }
  }

  showModal(): void {
    this.bShowFilterModal = true;
  }

  hideModal(): void {
    this.bShowFilterModal = false;
    this.filter();
  }
}

