import { ResponsiveContainer } from "recharts";
import { LineChart, LineChartProps } from "@mui/x-charts";
import { Card, CardContent, Typography } from "@mui/material";
import { theme } from "@src/theme/globals";

export function TotalSalesYearChart() {
  const xAxis: LineChartProps["xAxis"] = [
    {
      scaleType: "point",
      data: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
  ];

  const series: LineChartProps["series"] = [
    {
      color: theme.colors.primary[1],
      data: [2, 5.5, 2, 8.5, 1.5, 5, 2, 3, 1, 9, 2, 1],
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Total de vendas feita durante o ano
        </Typography>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart
            margin={{ bottom: 24, left: 24, top: 24, right: 24 }}
            xAxis={xAxis}
            series={series}
          />
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
