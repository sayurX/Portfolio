import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { CursorProvider } from '../context/CursorContext';

export default function Layout() {
  return (
    <CursorProvider>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <Footer />
    </CursorProvider>
  );
}
