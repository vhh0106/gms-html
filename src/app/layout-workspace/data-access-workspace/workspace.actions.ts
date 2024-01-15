import {createAction} from "@ngrx/store";

export const LoadingWorkspaces = createAction('[Workspace] Loading Workspaces')
export const NoLoadingWorkspaces = createAction('[Workspace] No Loading Workspaces')
export const CollapseSidebar = createAction('[Workspace] CollapseSidebar')
export const ExpandSidebar = createAction('[Workspace] ExpandSidebar')
