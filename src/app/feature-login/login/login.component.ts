import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  type: 'password' | 'text' = 'password';
  form!: FormGroup
  loading = false
  constructor() { }

  ngOnInit() {}

  onSubmit(){

  }

}
