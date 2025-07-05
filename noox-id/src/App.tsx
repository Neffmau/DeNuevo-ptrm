import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import './styles/globals.css';

type AppState = 'landing' | 'auth' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<AppState>('landing');
  const [user, setUser] = useState<any>(null);

  const handleLogin = (userData: any) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition: { type: 'tween'; ease: 'anticipate'; duration: number } = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <AnimatePresence mode="wait">
      {currentPage === 'landing' && (
        <motion.div
          key="landing"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <LandingPage onTryNow={() => setCurrentPage('auth')} />
        </motion.div>
      )}
      
      {currentPage === 'auth' && (
        <motion.div
          key="auth"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <AuthPage onLogin={handleLogin} onBack={() => setCurrentPage('landing')} />
        </motion.div>
      )}
      
      {currentPage === 'dashboard' && user && (
        <motion.div
          key="dashboard"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Dashboard user={user} onLogout={handleLogout} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;