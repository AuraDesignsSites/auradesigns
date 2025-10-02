import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import { SecurityProvider } from "./components/SecurityProvider";
import { initLazyLoading } from "./utils/imageLoader";
import { performanceMetrics } from "./utils/performance";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize lazy loading for images
    initLazyLoading();
    
    // Initialize performance monitoring
    if (process.env.NODE_ENV === 'development') {
      // Measure page load performance
      const pageMetrics = performanceMetrics.measurePageLoad();
      if (pageMetrics) {
        console.log('🚀 Page Load Performance:', pageMetrics);
      }
      
      // Measure bundle size
      performanceMetrics.measureBundleSize();
      
      // Monitor memory usage
      const memoryUsage = performanceMetrics.getMemoryUsage();
      if (memoryUsage) {
        console.log('💾 Memory Usage:', memoryUsage);
      }
      
      // Monitor scroll performance
      const cleanupScrollMonitoring = performanceMetrics.measureScrollPerformance();
      
      return () => {
        cleanupScrollMonitoring();
      };
    }
  }, []);

  return (
    <ErrorBoundary>
      <SecurityProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
          <BrowserRouter>
            <Layout>
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading...</p>
                  </div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
                  <Route path="/about" element={<ErrorBoundary><About /></ErrorBoundary>} />
                  <Route path="/services" element={<ErrorBoundary><Services /></ErrorBoundary>} />
                  <Route path="/projects" element={<ErrorBoundary><Projects /></ErrorBoundary>} />
                  <Route path="/pricing" element={<ErrorBoundary><Pricing /></ErrorBoundary>} />
                  <Route path="/contact" element={<ErrorBoundary><Contact /></ErrorBoundary>} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </SecurityProvider>
    </ErrorBoundary>
  );
};

export default App;
