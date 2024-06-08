import { CollaboratorsFiltersProps } from "@/domain/interfaces";
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

interface CollaboratorsTableProps {
  collaboratorFilters: CollaboratorsFiltersProps;
}

export function CollaboratorsTable({
  collaboratorFilters,
}: CollaboratorsTableProps) {
  const { data: collaborators, isLoading: isLoadingCollaborators } = useQuery({
    queryKey: ["company-user[]", collaboratorFilters],
    queryFn: () => findAllCompanyUsersFn.run(collaboratorFilters),
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
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {collaborators?.users?.map((collaborator) => {
              return (
                <CollaboratorsTableRow
                  collaborator={collaborator}
                  filtersQueryKey={collaboratorFilters}
                />
              );
            })}
            {isLoadingCollaborators && <CollaboratorsTableSkeleton />}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
