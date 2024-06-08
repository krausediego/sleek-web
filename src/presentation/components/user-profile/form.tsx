import { useFormContext } from "react-hook-form";

import { IUpdateUserProfile, SpecialtyTypes } from "@/domain/interfaces";

import { specialtyTypesSelectOptions } from "../company-profile";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { MultiSelect } from "../ui/multi-select";

interface FormUserProfileProps {
  avatarUrl?: string;
}

export function FormUserProfile({ avatarUrl }: FormUserProfileProps) {
  const form = useFormContext<IUpdateUserProfile.Params>();

  return (
    <>
      <div className="flex items-center gap-4">
        <Avatar className="w-32 h-32">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>ABC</AvatarFallback>
        </Avatar>

        <FormField
          name="avatar"
          control={form.control}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    onChange(event.target.files && event.target.files[0]);
                  }}
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
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input {...field} />
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
              />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}
