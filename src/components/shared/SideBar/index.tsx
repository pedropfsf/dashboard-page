import { LucideIcon } from "lucide-react";
import { useSideBar } from "./useSideBar";
import { Container, Item, List, Logo } from "./styles";

export interface NavigationItem {
  Icon: LucideIcon;
  path: string;
}

interface SidebarProps {
  items: NavigationItem[];
}

export function Sidebar({ items }: SidebarProps) {
  const { getIconColor, goTo } = useSideBar();

  return (
    <Container>
      <Logo onClick={goTo("/")} />
      <List>
        {items.map(({ Icon, path }, index) => (
          <Item key={index} onClick={goTo(path)}>
            <Icon color={getIconColor(path)} size={36} />
          </Item>
        ))}
      </List>
    </Container>
  );
}
