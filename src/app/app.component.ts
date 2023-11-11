import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventBooking';
  isLoginView:boolean = true;

  registerObj: any = {
      "UserId": 0,
      "Name": "",
      "Email": "",
      "Password": "",
      "ContactNo": "",
      "Role": ""
  }

  loginObj:any = {
    "Password": "",
    "ContactNo": ""
  }

  isUserLoggedin: boolean = false;
  loggedUserData: any;

  constructor(private http :HttpClient){
   
    const localData = localStorage.getItem('eventUser');
    if(localData != null){
      this.isUserLoggedin = true;
      //Show User Name 
      this.loggedUserData = JSON.parse(localData);
    }
  }

  openLogin(){
    const model = document.getElementById('myModal');
    if(model != null){
      model.style.display='block';
    }
  }

  closeModel(){
    const model = document.getElementById('myModal');
    if(model != null){
      model.style.display='none';
    }
  }

  onRegister(){
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/CreateUser',this.registerObj).subscribe((res:any)=>{
      if(res.result){
        alert('Registeration Success');
        this.closeModel();
      } else {
        alert(res.message);
      }
    })

  }

  onLogin(){
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/login',this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert('Login Success');
        localStorage.setItem('eventUser', JSON.stringify(res.data))
        this.isUserLoggedin = true;
        this.closeModel();
        //Show User Name 
        this.loggedUserData = res.data;
      } else {
        alert(res.message);
      }
    })

  }

  logOff(){
    localStorage.removeItem('eventUser');
    this.isUserLoggedin = false;
    this.loggedUserData = undefined;
  }
 
}
