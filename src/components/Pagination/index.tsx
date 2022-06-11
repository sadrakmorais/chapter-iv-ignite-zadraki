import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const mockPagination = [
    {
      number: 1,
      currentPage: true,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
    {
      number: 4,
    },
  ];

  return (
    <Stack
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
      direction={["column", "row"]}
    >
      <Box>
        <strong>{mockPagination[0].number - 1}</strong> -{" "}
        <strong>{mockPagination.length}</strong> de{" "}
        <strong>{mockPagination.length}</strong>
      </Box>

      <HStack spacing="2">
        {mockPagination.map((page, index) => (
          <PaginationItem
            numberPage={page.number}
            isCurrentPage={page.currentPage}
            key={index}
          />
        ))}
      </HStack>
    </Stack>
  );
}
