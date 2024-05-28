import { Copy } from "lucide-react";
import { toast } from "sonner";

import { Button, ButtonProps } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface CopyToClipboard extends ButtonProps {
  contentCopy?: string;
}

export function CopyToClipboard({ contentCopy, ...props }: CopyToClipboard) {
  const handleCopyToClipBoard = () => {
    if (contentCopy) {
      navigator.clipboard.writeText(contentCopy);

      toast.success("Copiado para a área de transferência.");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleCopyToClipBoard}
            variant="ghost"
            size="icon"
            {...props}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Copiar</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
