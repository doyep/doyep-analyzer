/**
 * Required param for Strava Access Request.
 * Must be `code`
 */
type RequestAccessResponseType = 'code';

/**
 * Option to show the authorization prompt.
 * Use `force` to always show the prompt even if the user has
 * already authorized the current application.
 */
export type RequestAccessApprovalPrompt = 'force' | 'auto';

/**
 * Requested scopes. The scope activity:read is required for activity webhooks.
 *
 * `read` : read public segments, public routes, public profile data, public posts,
 *  public events, club feeds, and leaderboards
 *
 * `read_all` : read private routes, private segments, and private events for the user
 *
 * `profile:read_all` : read all profile information even if the user has set their profile
 *  visibility to Followers or Only You
 *
 * `profile:write` : update the user's weight and Functional Threshold Power (FTP), and
 *  access to star or unstar segments on their behalf
 *
 * `activity:read` : read the user's activity data for activities that are visible to
 *  Everyone and Followers, excluding privacy zone data
 *
 * `activity:read_all` : the same access as `activity:read`, plus privacy zone data and
 *  access to read the user's activities with visibility set to Only You
 *
 * `activity:write` : access to create manual activities and uploads, and access to edit
 *  any activities that are visible to the app, based on activity read access level
 */
export type RequestAccessScope =
	| 'read'
	| 'read_all'
	| 'profile:read_all'
	| 'profile:write'
	| 'activity:read'
	| 'activity:read_all'
	| 'activity:write';

/**
 * All params used for Strava Access Request
 */
export type RequestAccessParams = {
	clientId: string;
	redirectUri: string;
	responseType: RequestAccessResponseType;
	approval_prompt?: RequestAccessApprovalPrompt;
	scopes: RequestAccessScope[];
	state?: string;
};

/**
 * Params needed from Angular Application to perform a strava access request.
 */
export type RequestAccessOptions = Omit<RequestAccessParams, 'responseType'>;
