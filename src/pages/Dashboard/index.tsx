import { Grid, Typography } from "@mui/material";
import { Counter } from "@src/components/dashboard/Counter";
import {
  Building2,
  DollarSign,
  Package,
  Star,
  Store,
  Users,
} from "lucide-react";

export function DashboardPage() {
  return (
    <div>
      <Typography variant="h3" marginBottom="32px">
        Dashboard
      </Typography>

      <Grid container spacing="8px">
        <Grid item lg={2} md={4} sm={6}>
          <Counter Icon={Users} title="Usuários" value="10" />
        </Grid>
        <Grid item lg={2} md={4} sm={6}>
          <Counter Icon={Store} title="Restaurantes" value="3" />
        </Grid>
        <Grid item lg={2} md={4} sm={6}>
          <Counter Icon={Package} title="Sem estoque" value="5" />
        </Grid>
        <Grid item lg={2} md={4} sm={6}>
          <Counter Icon={DollarSign} title="Vendidos/mês" value="R$ 100,00" />
        </Grid>
        <Grid item lg={2} md={4} sm={6}>
          <Counter Icon={Building2} title="Usuários" value="10" />
        </Grid>
        <Grid item lg={2} md={4} sm={6}>
          <Counter Icon={Star} title="Garçom" value="Rodrigo Andrade" />
        </Grid>
      </Grid>
    </div>
  );
}
