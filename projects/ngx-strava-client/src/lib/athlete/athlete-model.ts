export enum resourceStage {
  meta = 1,
  summary = 2,
  detail = 3,
}

export type Sex = 'M' | 'F';

export type SummaryAthlete = {
  id: string;
  resource_state: resourceStage;
  firstname: string;
  lastname: string;
  profile_medium: string;
  profile: string;
  city: string;
  state: string;
  country: string;
  sex: Sex;
  premium: boolean;
  summit: boolean;
  created_at: string;
  updated_at: string;
};
