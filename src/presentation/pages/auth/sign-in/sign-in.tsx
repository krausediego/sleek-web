import { LoaderCircle } from "lucide-react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { IAuthSignIn } from "@/domain/interfaces";
import { Button } from "@/presentation/components/ui/button";
import { Form } from "@/presentation/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { SignInForm } from "./components/form";
import { SignInSchema } from "./schema";

interface Props {
  signInRequestFn: IAuthSignIn;
}

export function AuthSignInPage({ signInRequestFn }: Props) {
  const navigate = useNavigate();

  const form = useForm<IAuthSignIn.Params>({
    resolver: zodResolver(SignInSchema),
  });

  const { mutateAsync: signInFn, isPending: isLoading } = useMutation({
    mutationFn: (values: IAuthSignIn.Params) => signInRequestFn.run(values),
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleSubmit: SubmitHandler<IAuthSignIn.Params> = async (values) => {
    try {
      await signInFn(values);

      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao realizar o login.");
    }
  };

  return (
    <FormProvider {...form}>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Entrar</h1>

        <p className="text-balance text-muted-foreground">
          Insira seu email e senha para continuar
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <SignInForm />

          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading && <LoaderCircle className="h-4 w-4 animate-spin" />}
            Entrar
          </Button>
        </form>
      </Form>
      <div className="text-center mt-6">
        Ainda não é cadastrado ?{" "}
        <Link className="underline" to="/sign-up">
          Crie agora
        </Link>
      </div>
    </FormProvider>
  );
}
