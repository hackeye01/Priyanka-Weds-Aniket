import { useState, useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen">
      {children}
    </div>
  );
}

export default function Root() {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen for initial load
  if (isLoading) {
    return (
      <Layout>
        <LoadingScreen />
      </Layout>
    );
  }

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.main
          key={navigation.location?.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </Layout>
  );
}

export function ErrorBoundary() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
          <p className="text-xl mb-4">
            An unexpected error has occurred. Please try again later.
          </p>
          <a href="/" className="text-blue-600 hover:underline">
            Go back home
          </a>
        </div>
      </div>
    </Layout>
  );
}