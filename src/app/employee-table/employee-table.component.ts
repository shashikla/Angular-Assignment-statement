import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Employee {
  EmployeeName: string;
  totalHours: any;
  StarTimeUtc: any;
  EndTimeUtc: any;
}

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  employees: any;
  url =
    'https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData() {
    this.http.get<Employee[]>(this.url).subscribe((data) => {
      this.employees = data.map((emp) => {
        // console.log(emp.EmployeeName);StarTimeUtc||EndTimeUtc
        // let hr = new Date(emp.StarTimeUtc).getHours();
        // let min = new Date(emp.StarTimeUtc).getMinutes();
        // console.log(hr+":"+min)
        const startTime = new Date(emp.StarTimeUtc);
        const endTime = new Date(emp.EndTimeUtc);
        // calculate difference in milliseconds
        const diffMs = endTime.getTime() - startTime.getTime();

        // convert difference to hours
        const diffHrs = diffMs / (1000 * 60 * 60);
        emp.totalHours = diffHrs.toFixed(2);
        console.log(startTime,endTime);
        return emp;
      });
    });
  }
}
