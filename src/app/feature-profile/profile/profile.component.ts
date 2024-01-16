import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  showText1: boolean = true;

  toggleText1() {
    this.showText1 = !this.showText1;
  }
}
