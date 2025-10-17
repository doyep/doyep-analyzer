export type StravaRequestAccessResponseType = 'code';

export type StravaRequestAccessApprovalPrompt = 'force' | 'auto';

export type StravaRequestAccessScope =
	| 'read'
	| 'read_all'
	| 'profile:read_all'
	| 'profile:write'
	| 'activity:read'
	| 'activity:read_all'
	| 'activity:write';

export type StravaRequestAccess = {
	clientId: string;
	redirectUri: string;
	responseType: StravaRequestAccessResponseType;
	approval_prompt?: StravaRequestAccessApprovalPrompt;
	scope: StravaRequestAccessScope[];
	state?: string;
};

export type StravaApiConfig = {
	clientId: string;
	clientSecret: string;
}
