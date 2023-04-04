import { Injectable } from '@angular/core';
import { User } from './sign-in-service.model';

@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {

  constructor() {
  }

  createUser(_user: User) {
    
    const url = "http://localhost:3200/users";
    const data = {
      firstName: _user.firstName,
      lastName: _user.lastName,
      email: _user.email
    };
  
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }
  


}
