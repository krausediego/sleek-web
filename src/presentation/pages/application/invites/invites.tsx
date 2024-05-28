import { useState } from "react";

import { PageTitle } from "@/presentation/components";
import { Button } from "@/presentation/components/ui/button";
import { Dialog, DialogTrigger } from "@/presentation/components/ui/dialog";

import { InviteGenerate } from "./invite-generate";
import { InvitesTable } from "./invites-table";

export function InvitesPage() {
  const [openGenerateDialog, setOpenGenerateDialog] = useState(false);

  return (
    <>
      <PageTitle>Convites</PageTitle>

      <div className="flex flex-col px-[30%] mt-10 gap-4">
        <InvitesTable />

        <Dialog open={openGenerateDialog} onOpenChange={setOpenGenerateDialog}>
          <DialogTrigger asChild>
            <Button className="ml-auto">Criar convite</Button>
          </DialogTrigger>

          {openGenerateDialog && <InviteGenerate />}
        </Dialog>
      </div>
    </>
  );
}
