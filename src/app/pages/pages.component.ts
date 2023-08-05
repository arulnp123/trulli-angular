import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../shared/function.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  constructor(private functionService: FunctionService) {
    this.functionService.listen().subscribe((m: any) => {
      this.reloadPage();
    });
  }

  ngOnInit(): void {}
  reloadPage() {
    window.location.reload();
  }
}
