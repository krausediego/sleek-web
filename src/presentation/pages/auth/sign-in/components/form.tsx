import { useFormContext } from "react-hook-form";

import { IAuthSignIn } from "@/domain/interfaces";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";

export function SignInForm() {
  const form = useFormContext<IAuthSignIn.Params>();

  return (
    <>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormControl>
              <Input
                id="email"
                {...field}
                placeholder="fulano@gmail.com"
                type="email"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <FormControl>
              <Input
                id="password"
                {...field}
                placeholder="********"
                type="password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
