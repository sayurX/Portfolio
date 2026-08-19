import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';
import { CursorProvider } from './context/CursorContext';

export default function App() {
  return (
    <CursorProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
    </CursorProvider>
  );
}
