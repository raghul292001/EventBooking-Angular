import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoginView:boolean = true;

  registerObj: any = {
      "UserId": 0,
      "Name": "string",
      "Email": "string",
      "Password": "string",
      "ContactNo": "string",
      "Role": "string"
  }

  loginObj:any = {
    
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

 

}
