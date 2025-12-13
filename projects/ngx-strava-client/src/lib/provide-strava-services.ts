import { makeEnvironmentProviders, Provider } from '@angular/core';
/**
 * Represents a Strava feature registered through the `withX()` API.
 */
export type StravaFeature = {
  ɵproviders: Provider[];
};

/**
 * Aggregate one or more Strava features into environment providers
 * @param features One or more Strava features returned by `withX()` functions.
 * @returns Environment providers containing all providers declared by the supplied features.
 */
export function provideStravaServices(...features: StravaFeature[]) {
  return makeEnvironmentProviders([...features.flatMap((features) => features.ɵproviders)]);
}
