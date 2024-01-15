import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromWorkspace from './workspace.reducer'

export const selectWorkspaceState = createFeatureSelector<fromWorkspace.WorkspaceState>(
  fromWorkspace.workspaceFeatureKey
);
export const isWorkspaceLoading = createSelector(selectWorkspaceState, state => state.loading);
export const isWorkspaceCollapsed = createSelector(selectWorkspaceState, state => state.isCollapsed);
