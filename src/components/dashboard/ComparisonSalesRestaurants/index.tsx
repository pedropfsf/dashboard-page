import { ResponsiveContainer } from "recharts";
import { BarChart, BarChartProps } from "@mui/x-charts";
import { Card, CardContent, Typography } from "@mui/material";
import { theme } from "@src/theme/globals";

export function ComparisonSalesRestaurants() {
  const xAxis: BarChartProps["xAxis"] = [
    {
      scaleType: "band",
      data: [""],
    },
  ];

  const series: BarChartProps["series"] = [
    {
      color: "#26A69A",
      label: "Rest. 1",
      data: [120],
    },
    {
      color: "#2196F3",
      label: "Rest. 2",
      data: [110],
    },
    {
      color: theme.colors.green[1],
      label: "Rest. 3",
      data: [134],
    },
    {
      color: theme.colors.purple[1],
      label: "Rest. 4",
      data: [305],
    },
    {
      color: "#E08DAC",
      label: "Rest. 5",
      data: [267],
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Comparação de vendas entre restaurantes
        </Typography>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            margin={{ bottom: 24, left: 32, top: 80, right: 24 }}
            xAxis={xAxis}
            series={series}
          />
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
