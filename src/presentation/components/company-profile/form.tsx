import { useFormContext } from "react-hook-form";

import { Company, IUpdateCompany, SpecialtyTypes } from "@/domain/interfaces";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { MultiSelect, OptionType } from "../ui/multi-select";
import { Textarea } from "../ui/textarea";

export const specialtyTypesSelectOptions: OptionType[] = [
  { label: "Cabeleireiro", value: "HAIRCUTS" },
  { label: "Maquiagem", value: "MAKE_UP" },
  { label: "Manicure", value: "MANICURE" },
  { label: "Massagem", value: "MASSAGE" },
  { label: "Barbeiro", value: "BARBER" },
];

interface FormCompanyProfileProps {
  company?: Company;
}

export function FormCompanyProfile({
  company,
}: FormCompanyProfileProps): JSX.Element {
  const form = useFormContext<IUpdateCompany.Params>();

  return (
    <>
      <div className="flex items-center gap-4">
        <Avatar className="w-32 h-32 rounded-lg">
          <AvatarImage src={company?.logoUrl} />
          <AvatarFallback>ABC</AvatarFallback>
        </Avatar>

        <FormField
          name="logo"
          control={form.control}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    onChange(event.target.files && event.target.files[0])
                  }
                  {...fieldProps}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <FormControl>
              <Input id="name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="description"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="description">Descrição</FormLabel>
            <FormControl>
              <Textarea
                className="col-span-3"
                id="description"
                spellCheck="false"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Esta descrição fornece informações para o cliente sobre o seu
              estabelecimento.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="types"
        control={form.control}
        render={({ field: { value, onChange } }) => (
          <FormItem>
            <FormLabel>Tipos</FormLabel>
            <FormControl>
              <MultiSelect
                options={specialtyTypesSelectOptions}
                selected={value as SpecialtyTypes[]}
                onChange={onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <div>
        <Label htmlFor="cnpj">CNPJ</Label>
        <Input id="cnpj" value={company?.cnpj} disabled />
      </div>
    </>
  );
}
