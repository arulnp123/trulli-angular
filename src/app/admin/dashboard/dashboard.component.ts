import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { FunctionService } from 'src/app/shared/function.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Output() onFilter = new EventEmitter();
  constructor(private functionService: FunctionService) {}

  ngOnInit(): void {}
  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
    this.functionService.filter('Register click');
  }
}
