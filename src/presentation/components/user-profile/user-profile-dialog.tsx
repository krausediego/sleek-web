import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "sonner";

import { IUpdateUserProfile, UserProfileAndUser } from "@/domain/interfaces";
import { useMutation } from "@tanstack/react-query";

import { Button } from "../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Form } from "../ui/form";
import { FormUserProfile } from "./form";
import { updateUserProfileFn } from "./requests";

interface UserProfileDialogProps {
  user?: UserProfileAndUser;
}

export function UserProfileDialog({ user }: UserProfileDialogProps) {
  const form = useForm<IUpdateUserProfile.Params>({
    defaultValues: {
      id: user?.id || "",
      name: user?.name || "",
      avatar: undefined,
      specialties: user?.specialties || [],
    },
  });

  const { mutateAsync: updateUserProfileMutationFn } = useMutation({
    mutationFn: (values: IUpdateUserProfile.Params) =>
      updateUserProfileFn.run(values),
  });

  const handleSubmit: SubmitHandler<IUpdateUserProfile.Params> = async (
    values
  ) => {
    try {
      await updateUserProfileMutationFn({ ...values, id: user?.id as string });

      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao tentar atualizar o seu perfil, se o problema persistir entre em contato com o suporte."
      );
    }
  };

  return (
    <FormProvider {...form}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Seu perfil</DialogTitle>
          <DialogDescription>
            Visualize ou atualize as informações do seu perfil, essas
            informações serão visíveis aos clientes.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormUserProfile avatarUrl={user?.avatarUrl} />

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
