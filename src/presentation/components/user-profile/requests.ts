import { makeHttpRequest } from "@/application/factories";
import { FindUserProfileUseCase, UpdateUserProfile } from "@/domain/useCases";

export const findUserProfileFn = new FindUserProfileUseCase(
  makeHttpRequest(),
  "/user-profile/find"
);

export const updateUserProfileFn = new UpdateUserProfile(
  makeHttpRequest(),
  "/user-profile/update"
);
