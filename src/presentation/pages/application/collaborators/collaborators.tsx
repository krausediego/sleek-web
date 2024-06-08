import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Filter } from "lucide-react";

import { CollaboratorsFiltersProps } from "@/domain/interfaces";
import { PageTitle } from "@/presentation/components";
import { Button } from "@/presentation/components/ui/button";
import { Form } from "@/presentation/components/ui/form";

import { CollaboratorsFilters } from "./collaborators-filters";
import { CollaboratorsTable } from "./collaborators-table";

export function CollaboratorsPage() {
  const [filters, setFilters] = useState<CollaboratorsFiltersProps>({});

  const form = useForm<CollaboratorsFiltersProps>({
    defaultValues: {
      name: "",
      email: "",
      specialties: [],
    },
  });

  return (
    <FormProvider {...form}>
      <PageTitle>Colaboradores</PageTitle>

      <div className="flex flex-col px-[10%] mt-10 gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => setFilters(values))}
            className="w-full flex items-end gap-4"
          >
            <CollaboratorsFilters />

            <Button type="submit">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
          </form>
        </Form>

        <CollaboratorsTable collaboratorFilters={filters} />
      </div>
    </FormProvider>
  );
}
