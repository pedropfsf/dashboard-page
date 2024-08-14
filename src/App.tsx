import { Route, Routes } from "react-router-dom";

import { MainLayout } from "./layout/MainLayout";

import { HomePage } from "./pages/Home";
import { DashboardPage } from "./pages/Dashboard";

import GlobalStyles from "./theme/globals";

function App() {
  return (
    <main>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
