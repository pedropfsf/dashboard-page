import { Fragment } from "react";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface DiscountItem {
  label: string;
  value: string;
}

interface LatestBestDiscounts {
  items: DiscountItem[];
}

export function LatestBestDiscounts({ items }: LatestBestDiscounts) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Últimas Melhores Promoções</Typography>
        <List
          sx={{
            width: "100%",
            height: 260,
            overflowY: "auto",
            bgcolor: "background.paper",
          }}
        >
          {items.map((item, index) => (
            <Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText primary={item.label} secondary={item.value} />
              </ListItem>
              {index + 1 !== items.length && <Divider />}
            </Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
