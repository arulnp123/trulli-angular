import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { FunctionService } from '../shared/function.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  loadPagination: boolean = false;
  constructor(
    public commonService: CommonServiceService,
    private functionService: FunctionService
  ) {
    this.functionService.listen().subscribe((m: any) => {
      this.reloadPage();
    });
  }

  ngOnInit(): void {
    this.getCategories();
    window.scrollTo(0, 0);
    setTimeout(() => (this.loadPagination = true), 2000);
  }
  reloadPage() {
    window.location.reload();
  }
  getCategories() {
    this.commonService.getSpeciality().subscribe((res) => {
      this.categories = res;
    });
  }
}
