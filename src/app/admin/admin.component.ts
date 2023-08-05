import {
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  AfterViewInit,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
  Params,
} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { CommonServiceService } from '../common-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  filterShow: boolean = true;
  adminShow: boolean = true;
  constructor(
    public commonService: CommonServiceService,
    private route: ActivatedRoute,
    public Router: Router
  ) {
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if(event.url === '/admin/login') {
          this.adminShow = false;
        } else if ( event.url === '/admin/dashboard' || event.url === '/admin' ) {
          this.filterShow = false;
          this.adminShow = true;
        } else if ( 
          event.url === '/admin/add-category'|| 
          event.url === '/admin/edit-category' || 
          event.url === '/admin/add-sub-category' || 
          event.url === '/admin/edit-sub-category' || 
          event.url === '/admin/add-rating-type' ||
          event.url === '/admin/edit-rating-type' ||
          event.url === '/admin/add-subscription' ||
          event.url === '/admin/edit-subscription' ) {
          this.filterShow = false;
          this.adminShow = true;
        } else {
          this.filterShow = true;
          this.adminShow = true;
        }
      }
    });
  }
  ngOnInit(): void {
    this.commonService.nextmessage('admin');
    let scope = this;
    setTimeout(() => {
      scope.Router.navigateByUrl('/admin/dashboard');
    }, 100);
    // $(document).on('click', '#toggle_btn', function() {
    //   if($('body').hasClass('mini-sidebar')) {
    //     $('body').removeClass('mini-sidebar');
    //     $('.subdrop + ul').slideDown();
    //   } else {
    //     $('body').addClass('mini-sidebar');
    //     $('.subdrop + ul').slideUp();
    //   }
    //   return false;
    // });
    // $(document).on('mouseover', function(e) {
    //   e.stopPropagation();
    //   if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
    //     var targ = $(e.target).closest('.sidebar').length;
    //     if(targ) {
    //       $('body').addClass('expand-menu');
    //       $('.subdrop + ul').slideDown();
    //     } else {
    //       $('body').removeClass('expand-menu');
    //       $('.subdrop + ul').slideUp();
    //     }
    //     return false;
    //   }
    //   $(window).scroll(function() {
    //     if ($(window).scrollTop() >= 30) {
    //     $('.header').addClass('fixed-header');
    //     } else {
    //     $('.header').removeClass('fixed-header');
    //     }
    //     });
        
    //     $(document).on('click', '#loginSubmit', function() {
    //     $("#adminSignIn").submit();
    //   });		
    // });	
  }
  
}
