import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/layout-workspace/layout-workspace.module').then(m => m.LayoutWorkspaceModule),
  },
  {
    path: 'login',
    loadChildren: () => import('../app/feature-login/feature-login.module').then(m => m.FeatureLoginModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('../app/feature-profile/feature-profile.module').then(m => m.FeatureProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
