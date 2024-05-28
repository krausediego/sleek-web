export interface CompanyInvite {
  id: number;
  code: string;
  companyId: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface FindAllCompanyInvitesProps {
  companyInvites: CompanyInvite[];
}
