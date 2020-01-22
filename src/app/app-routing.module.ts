import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { DetailReportComponent } from './detail-report/detail-report.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'summary-Report', component: SummaryReportComponent },
  { path: 'detailed-Report', component: DetailReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
