import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/presentation/components/ui/table";
import { useQuery } from "@tanstack/react-query";

import { InvitesTableRow } from "./invites-table-row";
import { InvitesTableSkeleton } from "./invites-table-skeleton";
import { findAllCompanyInvitesFn } from "./requests";

export function InvitesTable() {
  const { data: invites, isLoading: isLoadingInvites } = useQuery({
    queryKey: ["company-invite[]"],
    queryFn: () => findAllCompanyInvitesFn.run(),
  });

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead />
              <TableHead>Código</TableHead>
              <TableHead>Criado em</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {invites?.companyInvites?.map((companyInvite) => {
              return (
                <InvitesTableRow
                  key={companyInvite.id}
                  companyInvite={companyInvite}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
      {!invites?.companyInvites.length && !isLoadingInvites && (
        <div className="w-full flex px-4">
          <span className="text-xs text-muted-foreground m-auto">
            Não existem convites cadastrados, crie agora mesmo clicando no botão
            abaixo.
          </span>
        </div>
      )}
      {isLoadingInvites && <InvitesTableSkeleton />}
    </>
  );
}
