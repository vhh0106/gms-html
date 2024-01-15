import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkspaceComponent} from "./workspace/workspace.component";

const routes: Routes = [{
    path: '',
    component: WorkspaceComponent,
    data: {
        breadcrumb: 'Home'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutWorkspaceRouting {
}
