import { useFormContext } from "react-hook-form";

import { SpecialtyTypes } from "@/domain/interfaces";
import { specialtyTypesSelectOptions } from "@/presentation/components/company-profile";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";
import { MultiSelect } from "@/presentation/components/ui/multi-select";

export interface CollaboratorsFiltersProps {
  name?: string;
  email?: string;
  specialty?: SpecialtyTypes[];
}

export function CollaboratorsFilters() {
  const form = useFormContext<CollaboratorsFiltersProps>();

  return (
    <>
      <FormField
        name="name"
        control={form.control}
        render={() => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Nome do colaborador" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="email"
        control={form.control}
        render={() => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Email do colaborador" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="specialty"
        control={form.control}
        render={({ field: { value, onChange } }) => (
          <FormItem>
            <FormLabel>Especialidades</FormLabel>
            <FormControl>
              <MultiSelect
                options={specialtyTypesSelectOptions}
                selected={value as SpecialtyTypes[]}
                onChange={onChange}
                placeholder="Especialidades"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
