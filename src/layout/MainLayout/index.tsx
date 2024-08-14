import { Outlet } from "react-router-dom";
import { Container, PageContainer } from "./styles";

import { NavigationItem, Sidebar } from "@src/components/shared/SideBar";
import { LayoutDashboard } from "lucide-react";

export function MainLayout() {
  const items: NavigationItem[] = [
    {
      Icon: LayoutDashboard,
      path: "/dashboard",
    },
  ];

  return (
    <Container>
      <Sidebar items={items} />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Container>
  );
}
