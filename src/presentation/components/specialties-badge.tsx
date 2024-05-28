import { SpecialtyTypes } from "@/domain/interfaces";

import { Badge } from "./ui/badge";

interface SpecialtiesBadgeProps {
  specialty: SpecialtyTypes;
}

export function SpecialtiesBadge({ specialty }: SpecialtiesBadgeProps) {
  const SpecialtiesNamesPortuguese = {
    HAIRCUTS: "Cabeleireiro(a)",
    MAKE_UP: "Maquiador(a)",
    MANICURE: "Manicure",
    MASSAGE: "Massagista",
    BARBER: "Barbeiro",
  };

  return <Badge>{SpecialtiesNamesPortuguese[specialty]}</Badge>;
}
