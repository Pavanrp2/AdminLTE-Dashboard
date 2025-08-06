import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  register = {
    name: '',
    email: '',
    password: '',
    retype_password: ''
  }

  onRegister(form: NgForm){
    if(form.valid && this.register.password === this.register.retype_password){
      console.log('Registered succeesfully', form.value)
      form.reset();
    } else {
      console.log('Failed to Register')
    }
  }
}
