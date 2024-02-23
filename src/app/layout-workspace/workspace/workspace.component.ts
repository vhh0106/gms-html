import {Component} from '@angular/core';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  isCollapsed = false;
  isButtonHidden = false;
  isMenuOpen = false;
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.isButtonHidden = true;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  showButton() {
    this.isButtonHidden = false;
    this.isCollapsed = false;

  }
}
