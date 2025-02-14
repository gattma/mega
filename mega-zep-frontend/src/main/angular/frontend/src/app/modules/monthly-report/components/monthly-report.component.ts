import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MonthlyReport} from '../models/MonthlyReport';
import {Subscription} from 'rxjs';
import {MonthlyReportService} from '../services/monthly-report.service';
import {GeneralInfoComponent} from "./general-info/general-info.component";

@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html'
})
export class MonthlyReportComponent implements OnInit {

  public monthlyReport: MonthlyReport;
  generalInfoComponent: GeneralInfoComponent = new GeneralInfoComponent(this.monthlyReportService);
  private monthlyReportSubscription: Subscription;

  constructor(private monthlyReportService: MonthlyReportService,
              private cd: ChangeDetectorRef) {
  }

  getAllTimeEntriesByDate(year: number, month: number) {
    this.monthlyReportSubscription = this.monthlyReportService.getAllByDate(year, month).subscribe((monthlyReport: MonthlyReport) => {
      this.monthlyReport = monthlyReport;
      this.generalInfoComponent.update(monthlyReport);
      this.cd.detectChanges();
    });
  }

  getAllTimeEntries() {
    this.monthlyReportSubscription = this.monthlyReportService.getAll().subscribe((monthlyReport: MonthlyReport) => {
      if (monthlyReport) {
        this.monthlyReport = monthlyReport;
        const splitReleaseDate = this.monthlyReport.employee.releaseDate.split("-");
        this.monthlyReportService.selectedYear.next(+splitReleaseDate[0]);
        this.monthlyReportService.selectedMonth.next(+splitReleaseDate[1]);
      } else {
        console.log("MonthlyReport should only be undefined for the tests!");
      }

    });
  }

  ngOnInit(): void {
    this.getAllTimeEntries();
  }

  refreshMonthlyReport() {
    this.getAllTimeEntriesByDate(this.monthlyReportService.selectedYear.getValue(), this.monthlyReportService.selectedMonth.getValue());
  }
}
