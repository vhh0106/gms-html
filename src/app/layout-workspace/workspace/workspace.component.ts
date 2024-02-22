import {Component} from '@angular/core';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
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
