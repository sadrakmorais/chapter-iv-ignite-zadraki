import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

type ProfileProps = {
  name: string;
  avatarSrc: string;
  email: string;
  showProfileData?: boolean;
};

export function Profile({
  name,
  avatarSrc,
  email,
  showProfileData = true,
}: ProfileProps) {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{name}</Text>
          <Text color="gray.300" fontSize="small">
            {email}
          </Text>
        </Box>
      )}
      <Avatar size="md" name={name} src={avatarSrc} />
    </Flex>
  );
}
