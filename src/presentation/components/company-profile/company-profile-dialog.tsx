import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "sonner";

import { IUpdateCompany } from "@/domain/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  FormCompanyProfile,
  findCompanyFn,
  updateCompanyFn,
  companyProfileSchema,
} from ".";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Form } from "../ui/form";
import { Input } from "../ui/input";

export function CompanyProfileDialog() {
  const queryClient = useQueryClient();

  const { data: company } = useQuery({
    queryKey: ["company"],
    queryFn: () => findCompanyFn.run(),
    staleTime: Infinity,
  });

  const form = useForm<IUpdateCompany.Params>({
    resolver: zodResolver(companyProfileSchema),
    values: {
      id: company?.id ?? "",
      name: company?.name ?? "",
      description: company?.description ?? "",
      types: company?.types ?? ["BARBER"],
    },
  });

  const { mutateAsync: updateCompanyMutationFn } = useMutation({
    mutationFn: (values: IUpdateCompany.Params) => updateCompanyFn.run(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company"] });
    },
  });

  const handleSubmit: SubmitHandler<IUpdateCompany.Params> = async (values) => {
    try {
      await updateCompanyMutationFn(values);

      toast.success("Estabelecimento atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error(
        "Ocorreu um erro ao tentar atualizar o seu estabelecimento, se o problema persistir entre em contato com o suporte."
      );
    }
  };

  return (
    <FormProvider {...form}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Perfil da loja</DialogTitle>
          <DialogDescription>
            Atualize as informações do seu estabelecimento visíveis ao cliente.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="flex">
              <Avatar className="w-32 h-32 rounded-lg">
                <AvatarImage src={company?.logoUrl} />
                <AvatarFallback>ABC</AvatarFallback>
              </Avatar>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input className="hidden" id="picture" type="file" />
              </div>
            </div>

            <FormCompanyProfile company={company} />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" type="button">
                  Cancelar
                </Button>
              </DialogClose>

              <Button type="submit" variant="success">
                Salvar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </FormProvider>
  );
}
