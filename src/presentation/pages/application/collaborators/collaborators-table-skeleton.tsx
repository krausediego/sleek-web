import { Skeleton } from "@/presentation/components/ui/skeleton";
import { TableCell, TableRow } from "@/presentation/components/ui/table";

export function CollaboratorsTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Skeleton className="h-4 w-[110px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[285px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[431px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[212px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[283px]" />
        </TableCell>
      </TableRow>
    );
  });
}
