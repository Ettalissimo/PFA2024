import { Component } from '@angular/core';
import { UserRepresentation } from '../services/api/models/user-representation';
import { Router } from '@angular/router';
import { LoginService } from '../services/api/auth/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user:UserRepresentation = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    bio: '',
    role: ''
  };

  constructor(private router: Router,private loginService:LoginService){

  }

  register():void {
    this.loginService.registerUser(this.user).subscribe();
    this.router.navigate(['blogs']);
  }
}
