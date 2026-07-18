import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import BackgroundBlobs from './components/BackgroundBlobs.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Loader from './components/Loader.jsx';
import ScrollProgress, { ScrollToTopButton } from './components/ScrollProgress.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import { useLoaded } from './hooks/useScrollSpy.js';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function Shell() {
  const loaded = useLoaded();
  return (
    <>
      <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>
      {loaded && (
        <>
          <BackgroundBlobs />
          <CustomCursor />
          <ScrollProgress />
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
