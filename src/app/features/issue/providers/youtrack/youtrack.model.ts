import { YoutrackOriginalTransition } from './youtrack-api-responses';

export type YoutrackTransitionOption =
  | 'ALWAYS_ASK'
  | 'DO_NOT'
  | YoutrackOriginalTransition;

export interface YoutrackTransitionConfig {
  // NOTE: keys mirror IssueLocalState type
  OPEN: YoutrackTransitionOption;
  IN_PROGRESS: YoutrackTransitionOption;
  DONE: YoutrackTransitionOption;
}
export interface YoutrackCfg {
  isEnabled: boolean;
  _isBlockAccess: boolean;
  host: string | null;
  userName: string | null;
  password?: string | null;
  isAutoPollTickets: boolean;
  isWonkyCookieMode: boolean;

  isAllowSelfSignedCertificate: boolean;
  searchJqlQuery: string;

  isAutoAddToBacklog: boolean;
  autoAddBacklogJqlQuery: string;

  isWorklogEnabled: boolean;
  isAutoWorklog: boolean;
  isAddWorklogOnSubTaskDone: boolean;

  isUpdateIssueFromLocal: boolean;

  isShowComponents: boolean;

  isCheckToReAssignTicketOnTaskStart: boolean;

  storyPointFieldId: string | null;

  isTransitionIssuesEnabled: boolean;
  transitionConfig: YoutrackTransitionConfig;
  availableTransitions: YoutrackOriginalTransition[];
  userToAssignOnDone: string | null;
}
