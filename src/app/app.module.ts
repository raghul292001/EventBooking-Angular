import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventBookingComponent } from './pages/event-booking/event-booking.component';
import { NewEventComponent } from './pages/new-event/new-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyBookingsComponent,
    EventListComponent,
    EventBookingComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
