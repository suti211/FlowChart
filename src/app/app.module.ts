import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { MockService} from './services/impl/MockService';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { FiltermodalComponent } from './components/filtermodal/filtermodal.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    FiltermodalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ChartModule,
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
