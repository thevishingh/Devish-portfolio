import React, { useState, useCallback } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorTrail from "@/components/effects/CursorTrail";
import Preloader from "@/components/effects/Preloader";
import HomePage from "@/components/sections/HomePage";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    filter: "blur(4px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.99,
    filter: "blur(3px)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      onAnimationStart={() => window.scrollTo(0, 0)}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider>
      {/* Preloader */}
      <AnimatePresence>
        {loading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <BrowserRouter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="portfolio-app min-h-screen bg-[var(--bg-primary)] transition-colors duration-500"
        >
          <CursorTrail />
          <Header />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </motion.div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
