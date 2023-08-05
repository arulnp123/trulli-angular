import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { Location } from '@angular/common';
import { FunctionService } from '../shared/function.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProvidersComponent implements OnInit {
  splitVal:any;
  url:any;
  base:any;
  page:any;
  doctorSidebar: boolean = true;
  constructor(
    private router: Router,
    public commonService: CommonServiceService,
    private functionService: FunctionService
  ) {
    this.functionService.listen().subscribe((m: any) => {
      this.reloadPage();
    });
  }

  ngOnInit(): void {}
  reloadPage() {
    window.location.reload();
  }
}
