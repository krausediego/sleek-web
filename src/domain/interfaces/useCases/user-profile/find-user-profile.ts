import { UserProfile } from ".";

export interface IFindUserProfile {
  run(): Promise<UserProfile>;
}
