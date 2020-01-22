import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { DetailReportComponent } from './detail-report/detail-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SummaryReportComponent,
    DetailReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxChartsModule,
    BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

