import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutWorkspaceRouting} from './layout-workspace.routing';
import {WorkspaceComponent} from './workspace/workspace.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {StoreModule} from "@ngrx/store";
import {workspaceFeatureKey, workspaceReducer} from "./data-access-workspace/workspace.reducer";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {AngularSvgIconModule} from "angular-svg-icon";
import {SharedIconModule} from "../shared-icon/shared-icon.module";
@NgModule({
  declarations: [
    WorkspaceComponent,

  ],
  imports: [
    CommonModule,
    LayoutWorkspaceRouting,
    StoreModule.forFeature(workspaceFeatureKey, workspaceReducer),
    NzSelectModule,
    NzIconModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzSpinModule,
    NzDividerModule,
    AngularSvgIconModule,
    SharedIconModule,
  ]
})
export class LayoutWorkspaceModule {

}
