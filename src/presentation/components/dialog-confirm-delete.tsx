import { LoaderCircle } from "lucide-react";

import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface DialogConfirmDeleteProps {
  onDelete: () => void;
  loading: boolean;
  children?: React.ReactNode;
}

export function DialogConfirmDelete({
  onDelete,
  loading,
  children,
}: DialogConfirmDeleteProps) {
  return (
    <DialogContent
      onInteractOutside={(e) => {
        if (loading) {
          e.preventDefault();
        }
      }}
      disableClose={loading}
    >
      <DialogHeader>
        <DialogTitle>Tem certeza que deseja excluir ?</DialogTitle>
        <DialogDescription>
          Lembre-se, esta ação não poderá ser desfeita.
        </DialogDescription>
      </DialogHeader>
      <>{children}</>
      <DialogFooter>
        <DialogClose asChild>
          <Button disabled={loading} variant="ghost" type="button">
            Cancelar
          </Button>
        </DialogClose>

        <Button disabled={loading} variant="destructive" onClick={onDelete}>
          {loading && <LoaderCircle className="h-4 w-4 mr-2 animate-spin" />}
          Excluir
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
