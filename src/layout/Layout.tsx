import { ReactNode } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { Grid2 } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Grid2 container spacing={2} marginX={5} marginTop={2}>
        <Grid2 size={{ xs: 12, sm: 2 }}>
          <Sidebar />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 10 }}>{children}</Grid2>
      </Grid2>
    </>
  );
};

export default Layout;
