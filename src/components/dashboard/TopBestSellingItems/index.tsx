import { ResponsiveContainer } from "recharts";
import { BarChart, BarChartProps } from "@mui/x-charts";
import { Card, CardContent, Typography } from "@mui/material";
import { theme } from "@src/theme/globals";

export function TopBestSellingItems() {
  const xAxis: BarChartProps["xAxis"] = [
    {
      scaleType: "band",
      data: [""],
    },
  ];

  const series: BarChartProps["series"] = [
    {
      color: "#26A69A",
      label: "Hamburguer",
      data: [12],
    },
    {
      color: "#2196F3",
      label: "Cerveja",
      data: [23],
    },
    {
      color: theme.colors.green[1],
      label: "Pizza",
      data: [2],
    },
    {
      color: theme.colors.purple[1],
      label: "Torta",
      data: [3],
    },
    {
      color: "#E08DAC",
      label: "Vodka",
      data: [3],
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Top 5 itens mais vendidos</Typography>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            margin={{ bottom: 24, left: 24, top: 80, right: 24 }}
            xAxis={xAxis}
            series={series}
          />
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
