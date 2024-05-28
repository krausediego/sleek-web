import { SpecialtyTypes } from "..";

export interface CompanyUser {
  id: string;
  userId: string;
  companyId: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface CompanyUserProps {
  createdAt: Date;
  user: {
    email: string;
    UserProfile: {
      name: string;
      avatarUrl: string;
      specialties: SpecialtyTypes[];
    };
  };
}

export interface FindAllCompanyUsersProps {
  users: CompanyUserProps[];
}
