import { Text, Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ActiveLink } from "../ActiveLinks";

type NavLinkProps = LinkProps & {
  title: string;
  icon?: ReactNode;
  href: string;
};
export function NavLink({ title, href, icon, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        {icon}
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
