import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RoutesEnum } from '@/enums/Routes';
import { HeroDetailsPage, HomePage } from '@/pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.HOME} element={<HomePage />} />

        <Route path={RoutesEnum.HERO_DETAILS} element={<HeroDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
