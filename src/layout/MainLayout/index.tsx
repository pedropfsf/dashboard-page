import { Outlet } from "react-router-dom";
import { Container, PageContainer } from "./styles";

import { NavigationItem, Sidebar } from "@src/components/shared/SideBar";
import { LayoutDashboard } from "lucide-react";
import { useMediaQueries } from "@src/hooks/useMediaQueries";

export function MainLayout() {
  const { isMatches } = useMediaQueries("(max-width: 610px)");

  const items: NavigationItem[] = [
    {
      Icon: LayoutDashboard,
      path: "/dashboard",
    },
  ];

  return (
    <Container>
      {isMatches || <Sidebar items={items} />}
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Container>
  );
}
