import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent {
  bookings:any[]=[];
  constructor(private http: HttpClient){
    const localData= localStorage.getItem('eventUser');
    if(localData != null) { 
     const user = JSON.parse(localData);
     this.getMyBpooking()
    }
  }

  getMyBpooking() {
    this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEventBooking').subscribe((res:any)=>{
     this.bookings = res.data;
    })
  }
}
