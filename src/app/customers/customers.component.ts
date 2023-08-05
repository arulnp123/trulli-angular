import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonServiceService } from '../common-service.service';
import { FunctionService } from '../shared/function.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  splitVal:any;
  base:any;
  page:any;
  patientSidebar: boolean = true;
  constructor(
    private router: Router,
    public commonService: CommonServiceService,
    private functionService: FunctionService
  ) {
    this.functionService.listen().subscribe((m: any) => {
      this.reloadPage();
    });
  }

  reloadPage() {
    window.location.reload();
  }

  ngOnInit(): void {}
}
