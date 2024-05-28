import { FormProvider, useForm } from "react-hook-form";

import { Filter } from "lucide-react";

import { PageTitle } from "@/presentation/components";
import { Button } from "@/presentation/components/ui/button";
import { Form } from "@/presentation/components/ui/form";

import {
  CollaboratorsFilters,
  CollaboratorsFiltersProps,
} from "./collaborators-filters";
import { CollaboratorsTable } from "./collaborators-table";

export function CollaboratorsPage() {
  const form = useForm<CollaboratorsFiltersProps>({
    defaultValues: {
      name: "",
      email: "",
      specialty: [],
    },
  });

  return (
    <FormProvider {...form}>
      <PageTitle>Colaboradores</PageTitle>

      <div className="flex flex-col px-[10%] mt-10 gap-4">
        <Form {...form}>
          <form className="w-full flex items-end gap-4">
            <CollaboratorsFilters />

            <Button className="ml-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
          </form>
        </Form>

        <CollaboratorsTable />
      </div>
    </FormProvider>
  );
}
