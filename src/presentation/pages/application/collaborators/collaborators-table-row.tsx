import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { CompanyUserProps } from "@/domain/interfaces";
import { SpecialtiesBadge } from "@/presentation/components/specialties-badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/presentation/components/ui/avatar";
import { TableCell, TableRow } from "@/presentation/components/ui/table";

interface CollaboratorsTableRowProps {
  collaborator: CompanyUserProps;
}

export function CollaboratorsTableRow({
  collaborator,
}: CollaboratorsTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Avatar>
          <AvatarImage src={collaborator.user.UserProfile.avatarUrl} />
          <AvatarFallback>DK</AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell>{collaborator.user.UserProfile.name}</TableCell>
      <TableCell>{collaborator.user.email}</TableCell>
      <TableCell>
        {collaborator.user.UserProfile.specialties.map((specialty) => {
          return <SpecialtiesBadge specialty={specialty} />;
        })}
      </TableCell>
      <TableCell>
        {formatDistanceToNow(collaborator.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
    </TableRow>
  );
}
