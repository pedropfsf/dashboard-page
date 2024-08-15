import {
  Card,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { theme } from "@src/theme/globals";
import { LucideIcon } from "lucide-react";

interface CounterProps {
  Icon: LucideIcon;
  title: string;
  value: string;
}

export function Counter({ Icon, title, value }: CounterProps) {
  return (
    <Card>
      <ListItemButton color="#ffffff">
        <ListItemIcon>
          <Icon color={theme.colors.primary[1]} />
        </ListItemIcon>
        <ListItemText primary={title} secondary={value} />
      </ListItemButton>
    </Card>
  );
}
