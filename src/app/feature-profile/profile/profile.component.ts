import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isCollapsed = false;
  isButtonHidden = false;


  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.isButtonHidden = true;
  }

  showButton() {
    this.isButtonHidden = false;
    this.isCollapsed = false;

  }
}
