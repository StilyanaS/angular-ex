import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public name: string = '';
  public email: string = '';
  public github: string = '';
  public person = {
    email: '',
    password: '',
  };
  public regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

  public isValid: Boolean = false;
  public users: Array<{ name: string; email: string; github: string }> = [];
  public onSubmit(f: NgForm) {
    //this.name = f.value.name;
    //this.email = f.value.email;
    //this.github = f.value.github;
    this.users.push({
      name: f.value.name,
      email: f.value.name,
      github: f.value.github,
    });
  }
  public validatePerson() {
    this.isValid =
      this.regex.test(this.person.email) && this.person.password.length > 8;
  }
}
