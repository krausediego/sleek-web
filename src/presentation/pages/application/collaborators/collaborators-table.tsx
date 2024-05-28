import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/presentation/components/ui/table";
import { useQuery } from "@tanstack/react-query";

import { CollaboratorsTableRow } from "./collaborators-table-row";
import { CollaboratorsTableSkeleton } from "./collaborators-table-skeleton";
import { findAllCompanyUsersFn } from "./requests";

export function CollaboratorsTable() {
  const { data: collaborators, isLoading: isLoadingCollaborators } = useQuery({
    queryKey: ["company-user[]"],
    queryFn: () => findAllCompanyUsersFn.run(),
  });

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead />
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Especialidades</TableHead>
              <TableHead>Colaborador desde</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {collaborators?.users?.map((collaborator) => {
              return <CollaboratorsTableRow collaborator={collaborator} />;
            })}
            {isLoadingCollaborators && <CollaboratorsTableSkeleton />}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
