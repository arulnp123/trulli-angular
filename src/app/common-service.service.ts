import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  messages:any = '';
  SERVER_URL: string = 'http://localhost:8080/';
  message: BehaviorSubject<String>;
  constructor(public http: HttpClient) {
    this.message = new BehaviorSubject(this.messages);
  }

  nextmessage(data:any) {
    this.message.next(data);
  }

  update(id:any, status:any, list:any) {
    let filter = list.filter((a:any) => a.patient_id === id);
    if (filter.length != 0) {
      filter['status'] = status;
    }
  }

  getServices() {
    console.log("serices called;;",this.SERVER_URL + 'services')
    return this.http.get(this.SERVER_URL + 'services');
  }

  getSpeciality() {
    console.log("speciality called")
    return this.http.get(this.SERVER_URL + 'specialityList');
  }

  getAllReports() {
    return this.http.get(this.SERVER_URL + 'all_reports');
  }

  getPendingReports() {
    return this.http.get(this.SERVER_URL + 'pending_reports');
  }

  getInprogressReports() {
    return this.http.get(this.SERVER_URL + 'inprogress_reports');
  }

  getCompletedReports() {
    return this.http.get(this.SERVER_URL + 'completed_reports');
  }

  getRejectedReports() {
    return this.http.get(this.SERVER_URL + 'rejected_reports');
  }

  getCanceledReports() {
    return this.http.get(this.SERVER_URL + 'canceled_reports');
  }

  getRatings() {
    return this.http.get(this.SERVER_URL + 'ratings');
  }

  getSubscription() {
    return this.http.get(this.SERVER_URL + 'subscriptions');
  }

  getUsers() {
    return this.http.get(this.SERVER_URL + 'users');
  }

  getWalletReport() {
    return this.http.get(this.SERVER_URL + 'wallet_report');
  }
  
  getWalletHistory() {
    return this.http.get(this.SERVER_URL + 'wallet_history');
  }
  
  createSpeciality(data:any) {
    return this.http.post(`${this.SERVER_URL + 'specialityList'}`, data);
  }

  updateSpeciality(data:any, id:any) {
    return this.http.put(`${this.SERVER_URL + 'specialityList'}/${id}`, data);
  }

  deleteSpeciality(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'specialityList'}/${id}`);
  }

  getAppointments() {
    return this.http.get(this.SERVER_URL + 'appointments');
  }

  getNotifications() {
    return this.http.get(this.SERVER_URL + 'notifications');
  }

  getCategories() {
    return this.http.get(this.SERVER_URL + 'categories');
  }

  getSubCategories() {
    return this.http.get(this.SERVER_URL + 'sub_categories');
  }

  updateAppointment(data:any, id:any) {
    return this.http.put(`${this.SERVER_URL + 'appointments'}/${id}`, data);
  }

  createAppointment(params:any) {
    return this.http.post(`${this.SERVER_URL + 'appointments'}`, params);
  }

  getComments() {
    return this.http.get(this.SERVER_URL + 'comments');
  }

  createComment(params:any) {
    return this.http.post(this.SERVER_URL + 'comments', params);
  }

  getTransactions() {
    return this.http.get(this.SERVER_URL + 'transactions');
  }

  getPlans() {
    return this.http.get(this.SERVER_URL + 'plans');
  }

  getAvailableDays() {
    return this.http.get(this.SERVER_URL + 'available_days');
  }

  deleteTransaction(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'transactions'}/${id}`);
  }

  getReviews() {
    return this.http.get(this.SERVER_URL + 'reviews');
  }

  deleteReview(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'reviews'}/${id}`);
  }
}
