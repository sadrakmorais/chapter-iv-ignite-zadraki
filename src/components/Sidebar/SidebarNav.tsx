import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="General">
        <NavLink
          href="/dashboard"
          title="Dashboard"
          icon={<RiDashboardLine fontSize="20" />}
        />
        <NavLink
          href="/users"
          title="Users"
          icon={<RiContactsLine fontSize="20" />}
        />
      </NavSection>

      <NavSection title="Automation">
        <NavLink
          href="/forms"
          title="Forms"
          icon={<RiInputMethodLine fontSize="20" />}
        />
        <NavLink
          href="/automation"
          title="Automation"
          icon={<RiGitMergeLine fontSize="20" />}
        />
      </NavSection>
    </Stack>
  );
}
