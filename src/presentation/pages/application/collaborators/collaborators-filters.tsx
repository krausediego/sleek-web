import { useFormContext } from "react-hook-form";

import { CollaboratorsFiltersProps, SpecialtyTypes } from "@/domain/interfaces";
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

export function CollaboratorsFilters() {
  const form = useFormContext<CollaboratorsFiltersProps>();

  return (
    <>
      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Nome do colaborador" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="email"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Email do colaborador" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="specialties"
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
