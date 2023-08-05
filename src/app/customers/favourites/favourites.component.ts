import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleClass(slide:any){
    slide.active = !slide.active;
  }
  items = [
    {
      service_img: 'assets/img/services/service-01.jpg',
      user_img: 'assets/img/customer/user-01.jpg',
      service_name: 'Toughened Glass Fitting Services',
      name: 'Cleaning',
      country: 'Wayne, New Jersey ',
      amount: '$25',
      mobile: 'xxxxxxxx49',
      active: ''
    },
    {
      service_img: 'assets/img/services/service-02.jpg',
      user_img: 'assets/img/customer/user-02.jpg',
      service_name: 'Car Repair Services',
      name: 'Automobile',
      country: 'Hanover, Maryland ',
      amount: '$50',
      mobile: 'xxxxxxxx85',
    },
    {
      service_img: 'assets/img/services/service-03.jpg',
      user_img: 'assets/img/customer/user-03.jpg',
      service_name: 'Electric Panel Repairing Service',
      name: 'Electrical',
      country: 'Kalispell, Montana ',
      amount: '$45',
      mobile: 'xxxxxxxx30',
    },
    {
      service_img: 'assets/img/services/service-04.jpg',
      user_img: 'assets/img/customer/user-04.jpg',
      service_name: 'Steam Car Wash',
      name: 'Car Wash',
      country: 'Electra, Texas',
      amount: '$14',
      mobile: 'xxxxxxxx74',
    },
    {
      service_img: 'assets/img/services/service-05.jpg',
      user_img: 'assets/img/customer/user-05.jpg',
      service_name: 'House Cleaning Services',
      name: 'Cleaning',
      country: 'Sylvester, Georgia',
      amount: '$100',
      mobile: 'xxxxxxxx91',
    },
    {
      service_img: 'assets/img/services/service-06.jpg',
      user_img: 'assets/img/customer/user-06.jpg',
      service_name: 'Computer & Server AMC Service',
      name: 'Computer',
      country: 'Los Angeles, California',
      amount: '$80',
      mobile: 'xxxxxxxx92',
    },
    {
      service_img: 'assets/img/services/service-07.jpg',
      user_img: 'assets/img/customer/user-07.jpg',
      service_name: 'Interior Designing',
      name: 'Interior',
      country: 'Hanover, Maryland',
      amount: '$5',
      mobile: 'xxxxxxxx28',
    },
    {
      service_img: 'assets/img/services/service-08.jpg',
      user_img: 'assets/img/customer/user-08.jpg',
      service_name: 'Building Construction Services',
      name: 'Construction',
      country: 'Burr Ridge, Illinois',
      amount: '$75',
      mobile: 'xxxxxxxx62',
    },
    {
      service_img: 'assets/img/services/service-09.jpg',
      user_img: 'assets/img/customer/user-09.jpg',
      service_name: 'Commercial Painting Services',
      name: 'Painting',
      country: 'Huntsville, Alabama',
      amount: '$500',
      mobile: 'xxxxxxxx75',
    },
    {
      service_img: 'assets/img/services/service-10.jpg',
      user_img: 'assets/img/customer/user-10.jpg',
      service_name: 'Plumbing Services',
      name: 'Plumbing',
      country: 'Richmond, Virginia',
      amount: '$150',
      mobile: 'xxxxxxxx13',
    },
  ];
}
