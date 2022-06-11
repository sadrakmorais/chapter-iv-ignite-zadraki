import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenLine, RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../hooks/useSidebarDrawer";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchField } from "./SearchField";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          variant={"unstyled"}
          fontSize="24"
          onClick={onOpen}
          mr="2"
        >
          <RiMenuLine />
        </IconButton>
      )}
      <Logo />

      {isWideVersion && <SearchField />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile
          showProfileData={isWideVersion}
          name="Zadrak M"
          avatarSrc="https://github.com/sadrakmorais.png"
          email="zadraki.tsx@gmail.com"
        />
      </Flex>
    </Flex>
  );
}
