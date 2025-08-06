import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login = {
    email : '',
    password : ''
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log('Successfully loged in', form.value)
    } else {
      console.log('Login failed')
    }
  }
}
