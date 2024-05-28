import { Skeleton } from "@/presentation/components/ui/skeleton";
import { TableCell, TableRow } from "@/presentation/components/ui/table";

export function InvitesTableSkeleton() {
  return Array.from({ length: 5 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Skeleton className="h-4 w-[120px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[180px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[180px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[120px]" />
        </TableCell>
      </TableRow>
    );
  });
}
