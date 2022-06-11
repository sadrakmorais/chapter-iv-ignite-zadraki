import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

/* dynamic é usado para renderizar components apenas no client. */
import dynamic from "next/dynamic";

/* Forma de chamar um component que deve ser renderizado apenas no client, utilizando dynamic. */
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:000Z",
      "2021-03-19T00:00:000Z",
      "2021-03-20T00:00:000Z",
      "2021-03-21T00:00:000Z",
      "2021-03-22T00:00:000Z",
      "2021-03-23T00:00:000Z",
      "2021-03-24T00:00:000Z",
    ],

    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
  },
};
const series = [
  {
    name: "Charts1",
    data: [47, 20, 30, 100, 50, 60, 20],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Subscribes of the week
            </Text>
            <Chart options={options} series={series} height={160} type="area" />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Open rate
            </Text>
            <Chart options={options} series={series} height={160} type="area" />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
