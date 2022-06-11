import { Button } from "@chakra-ui/react";

type PaginationItemProps = {
  numberPage: number;
  isCurrentPage?: boolean;
};

export function PaginationItem({
  numberPage,
  isCurrentPage = false,
}: PaginationItemProps) {
  if (!!isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "ínk.500",
          cursor: "default",
        }}
      >
        {numberPage}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {numberPage}
    </Button>
  );
}
