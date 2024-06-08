import { useCallback } from "react";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Trash } from "lucide-react";
import { toast } from "sonner";

import {
  CollaboratorsFiltersProps,
  CompanyUserProps,
} from "@/domain/interfaces";
import { DialogConfirmDelete } from "@/presentation/components";
import { SpecialtiesBadge } from "@/presentation/components/specialties-badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/presentation/components/ui/avatar";
import { Button } from "@/presentation/components/ui/button";
import { Dialog, DialogTrigger } from "@/presentation/components/ui/dialog";
import { TableCell, TableRow } from "@/presentation/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCompanyUserFn } from "./requests";

interface CollaboratorsTableRowProps {
  collaborator: CompanyUserProps;
  filtersQueryKey: CollaboratorsFiltersProps;
}

export function CollaboratorsTableRow({
  collaborator,
  filtersQueryKey,
}: CollaboratorsTableRowProps) {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteUserFn, isPending: isDeletingUser } = useMutation({
    mutationFn: () => deleteCompanyUserFn.run({ id: collaborator.id }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["company-user[]", filtersQueryKey],
      }),
  });

  const handleDelete = useCallback(async () => {
    try {
      await deleteUserFn();

      toast.success("Colaborador excluído com sucesso.");
    } catch (error: any) {
      toast.error(
        "Ocorreu um erro ao excluir este colaborador, tente novamente. Caso o problema persistir, entre em contato com o suporte."
      );
    }
  }, [deleteUserFn]);

  return (
    <TableRow>
      <TableCell className="flex items-center justify-center">
        <Avatar>
          <AvatarImage src={collaborator.user.UserProfile.avatarUrl} />
          <AvatarFallback>DK</AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell>{collaborator.user.UserProfile.name}</TableCell>
      <TableCell>{collaborator.user.email}</TableCell>
      <TableCell>
        {collaborator.user.UserProfile.specialties.map((specialty) => {
          return <SpecialtiesBadge specialty={specialty} />;
        })}
      </TableCell>
      <TableCell>
        {formatDistanceToNow(collaborator.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <Trash className="h-4 w-4 text-rose-500" />
            </Button>
          </DialogTrigger>

          <DialogConfirmDelete
            onDelete={handleDelete}
            loading={isDeletingUser}
          />
        </Dialog>
      </TableCell>
    </TableRow>
  );
}
