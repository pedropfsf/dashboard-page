import {
  Building2,
  DollarSign,
  Package,
  Star,
  Store,
  Users,
} from "lucide-react";
import { Grid, Typography } from "@mui/material";

import { Counter } from "@src/components/dashboard/Counter";
import { TotalSalesYearChart } from "@src/components/dashboard/TotalSalesYearChart";
import { LatestBestDiscounts } from "@src/components/dashboard/LatestBestDiscounts";
import { TopBestSellingItems } from "@src/components/dashboard/TopBestSellingItems";
import { latestBestDiscountsMock } from "@src/constants/latest-best-discount";
import { ComparisonSalesRestaurants } from "@src/components/dashboard/ComparisonSalesRestaurants";

export function DashboardPage() {
  return (
    <div>
      <Typography variant="h4" marginBottom="32px">
        Dashboard
      </Typography>

      <Grid container spacing="8px" marginBottom="8px">
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Counter Icon={Users} title="Usuários" value="10" />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Counter Icon={Store} title="Restaurantes" value="3" />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Counter Icon={Package} title="Sem estoque" value="5" />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Counter Icon={DollarSign} title="Vendidos/mês" value="R$ 100,00" />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Counter Icon={Building2} title="Usuários" value="10" />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Counter Icon={Star} title="Garçom" value="Rodrigo Andrade" />
        </Grid>
        <Grid item lg={8} md={6} sm={12} xs={12}>
          <TotalSalesYearChart />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <LatestBestDiscounts items={latestBestDiscountsMock} />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <TopBestSellingItems />
        </Grid>
        <Grid item lg={8} md={6} sm={12} xs={12}>
          <ComparisonSalesRestaurants />
        </Grid>
      </Grid>
    </div>
  );
}
