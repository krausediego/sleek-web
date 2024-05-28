import React from "react";

import { UserProfileAndUser } from "@/domain/interfaces";
import { findUserProfileFn } from "@/presentation/components/company-profile";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useValidateRole() {
  const queryClient = useQueryClient();

  const { data: userProfile, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: () => findUserProfileFn.run(),
    staleTime: Infinity,
  });

  const getUserCachedValue = () => {
    const cached = queryClient.getQueryData<UserProfileAndUser>([
      "user-profile",
    ]);

    if (!cached) {
      return userProfile;
    }

    return cached;
  };

  const validateUserRoleComponent = (children: React.ReactNode) => {
    const userProfile = getUserCachedValue();

    if (userProfile?.user?.role !== "ADMIN") {
      return null;
    }

    return children;
  };

  const validateUserRolePage = (children: React.ReactNode) => {
    const userProfile = getUserCachedValue();

    if (isLoading) {
      return <span>Loading</span>;
    }

    if (userProfile?.user?.role !== "ADMIN") {
      return (
        <>
          <span>UNAUTHORIZED</span>
        </>
      );
    }

    return children;
  };

  return { validateUserRolePage, validateUserRoleComponent };
}
