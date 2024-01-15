import {createReducer, on} from "@ngrx/store";
import {CollapseSidebar, ExpandSidebar, LoadingWorkspaces, NoLoadingWorkspaces} from "./workspace.actions";

export const workspaceFeatureKey = 'workspace';

export interface WorkspaceState {
  loading: boolean,
    isCollapsed: boolean,
}

export const initialState: WorkspaceState = {
  loading: false,
    isCollapsed: false,
};


export const workspaceReducer = createReducer(initialState,
  on(LoadingWorkspaces, (state) => ({...state, loading: true})),
  on(NoLoadingWorkspaces, (state) => ({...state, loading: false})),
    on(CollapseSidebar, state => ({...state, isCollapsed: true})),
    on(ExpandSidebar, state => ({...state, isCollapsed: false})),
)
