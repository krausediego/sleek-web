import { useCallback } from "react";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Trash } from "lucide-react";
import { toast } from "sonner";

import { CompanyInvite } from "@/domain/interfaces";
import {
  CopyToClipboard,
  DialogConfirmDelete,
} from "@/presentation/components";
import { Button } from "@/presentation/components/ui/button";
import { Dialog, DialogTrigger } from "@/presentation/components/ui/dialog";
import { TableCell, TableRow } from "@/presentation/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCompanyInviteFn } from "./requests";

interface InvitesTableRowProps {
  companyInvite: CompanyInvite;
}

export function InvitesTableRow({ companyInvite }: InvitesTableRowProps) {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteInviteFn, isPending: isDeletingInvite } =
    useMutation({
      mutationFn: () => deleteCompanyInviteFn.run({ id: companyInvite.id }),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["company-invite[]"] }),
    });

  const handleDelete = useCallback(async () => {
    try {
      await deleteInviteFn();

      toast.success("Convite excluído com sucesso.");
    } catch (error: any) {
      toast.error(
        "Ocorreu um erro ao excluir este convite, tente novamente. Caso o problema persistir, entre em contato com o suporte."
      );
    }
  }, [deleteInviteFn]);

  return (
    <TableRow>
      <TableCell>
        <CopyToClipboard contentCopy={companyInvite.code} />
      </TableCell>
      <TableCell>{companyInvite.code}</TableCell>
      <TableCell>
        {formatDistanceToNow(companyInvite.createdAt, {
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
            loading={isDeletingInvite}
          />
        </Dialog>
      </TableCell>
    </TableRow>
  );
}
