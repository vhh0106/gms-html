import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {isWorkspaceCollapsed, isWorkspaceLoading} from "../data-access-workspace/workspace.selector";
import {CollapseSidebar, ExpandSidebar} from "../data-access-workspace/workspace.actions";

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
    isCollapsed: boolean = false;
    isLoading$ = this.store.select(isWorkspaceLoading);
    constructor(private store: Store) {
      this.store.select(isWorkspaceCollapsed).subscribe(isCollapsed => {
        this.isCollapsed = isCollapsed;
      })
    }

  ngOnInit() {
  }

  toggleCollapsed() {
    if (this.isCollapsed) {
      this.store.dispatch(ExpandSidebar())
    } else {
      this.store.dispatch(CollapseSidebar())
    }
  }

}
