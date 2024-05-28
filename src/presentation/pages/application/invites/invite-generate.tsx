import { useCallback, useState } from "react";

import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

import { CopyToClipboard } from "@/presentation/components";
import { Button } from "@/presentation/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/presentation/components/ui/dialog";
import { Input } from "@/presentation/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCompanyInviteFn } from "./requests";

export function InviteGenerate() {
  const queryClient = useQueryClient();
  const [codeCreated, setCodeCreated] = useState<string | undefined>(undefined);

  const { mutateAsync: createInviteFn, isPending: isCreatingInvite } =
    useMutation({
      mutationFn: () => createCompanyInviteFn.run(),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["company-invite[]"] }),
    });

  const handleGenerateInviteCode = useCallback(async () => {
    try {
      const { code } = await createInviteFn();
      setCodeCreated(code);

      toast.success("Convite criado com sucesso!");
    } catch (error: any) {
      console.log(error?.response?.data?.code);
      if (error?.response?.data?.code === 1) {
        return toast.error(
          "Você atingiu o limite de 5 convites, exclua algum para gerar um novo convite."
        );
      }
      toast.error(
        "Ocorreu um erro ao criar o convite, tente novamente, ou se o problema persistir, entre em contato com o suporte."
      );
    }
  }, [createInviteFn]);

  return (
    <DialogContent
      onInteractOutside={(e) => {
        if (isCreatingInvite) {
          e.preventDefault();
        }
      }}
      disableClose={isCreatingInvite}
    >
      <DialogHeader>
        <DialogTitle>Gerar novo código de convite</DialogTitle>
        <DialogDescription>
          Gere um novo código para convidar os colaboradores para o seu
          estabelecimento
        </DialogDescription>
      </DialogHeader>
      <div className="flex gap-4">
        <div className="relative">
          <Input value={codeCreated} readOnly />
          <CopyToClipboard
            disabled={!codeCreated}
            contentCopy={codeCreated}
            className="absolute right-0 top-0"
          />
        </div>
        <Button
          disabled={!!codeCreated || isCreatingInvite}
          onClick={handleGenerateInviteCode}
        >
          {isCreatingInvite && (
            <LoaderCircle className="h-4 w-4 mr-2 animate-spin" />
          )}
          Gerar
        </Button>
      </div>
    </DialogContent>
  );
}
