import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Building, CircleUserRound, LogOut, Send, Users } from "lucide-react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useValidateRole } from "../hooks";
import { authSignOutFn } from "./company-profile";
import { CompanyProfileDialog } from "./company-profile/company-profile-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog } from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Skeleton } from "./ui/skeleton";
import { UserProfileDialog } from "./user-profile";
import { findUserProfileFn } from "./user-profile/requests";

export function AccountMenu() {
  const [openCompanyDialog, setOpenCompanyDialog] = useState(false);
  const [openUserProfileDialog, setOpenUserProfileDialog] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { validateUserRoleComponent } = useValidateRole();

  const { data: userProfile, isLoading: isProfileLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: () => findUserProfileFn.run(),
    staleTime: Infinity,
  });

  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: () => authSignOutFn.run(),
    onSuccess: () => {
      queryClient.clear();
      navigate("/sign-in", { replace: true });
    },
  });

  return (
    <Dialog
      open={openCompanyDialog || openUserProfileDialog}
      onOpenChange={
        openCompanyDialog ? setOpenCompanyDialog : setOpenUserProfileDialog
      }
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            {isProfileLoading ? (
              <Skeleton className="h-10 w-10 rounded-full" />
            ) : (
              <Avatar>
                <AvatarImage src={userProfile?.avatarUrl} />
                <AvatarFallback>DK</AvatarFallback>
              </Avatar>
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex flex-col">
            {isProfileLoading ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            ) : (
              <>
                <span>{userProfile?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {userProfile?.user?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setOpenUserProfileDialog(true)}>
            <CircleUserRound className="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </DropdownMenuItem>

          {validateUserRoleComponent(
            <>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => setOpenCompanyDialog(true)}>
                <Building className="mr-2 h-4 w-4" />
                <span>Perfil da loja</span>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => navigate("/invites")}>
                <Send className="mr-2 h-4 w-4" />
                <span>Código de convite</span>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => navigate("/collaborators")}>
                <Users className="mr-2 h-4 w-4" />
                <span>Colaboradores</span>
              </DropdownMenuItem>
            </>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-rose-500 dark:text-rose-400"
            disabled={isSigningOut}
            asChild
          >
            <button
              className="w-full flex items-center"
              onClick={() => signOutFn()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {openUserProfileDialog && <UserProfileDialog user={userProfile} />}
      {openCompanyDialog && <CompanyProfileDialog />}
    </Dialog>
  );
}
