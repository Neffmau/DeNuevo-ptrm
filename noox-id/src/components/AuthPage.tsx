import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';

interface AuthPageProps {
  onLogin: (userData: any) => void;
  onBack: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onBack }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    // Simular OAuth2 de Google
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSuccess(true);
    
    // Simular datos de usuario
    const userData = {
      id: '1',
      name: 'Usuario Demo',
      email: 'usuario@demo.com',
      avatar: 'U'
    };
    
    setTimeout(() => {
      onLogin(userData);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="auth-container">
        <motion.div
          className="auth-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="success-check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Check size={32} />
          </motion.div>
          <h2 className="auth-title">¡Registro Exitoso!</h2>
          <p className="auth-subtitle">
            Tu cuenta ha sido creada correctamente. 
            Serás redirigido al panel de control.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <motion.div
        className="auth-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button 
          onClick={onBack}
          className="btn btn-secondary"
          style={{ position: 'absolute', top: '20px', left: '20px' }}
        >
          <ArrowLeft size={20} />
        </button>
        
        <motion.div
          className="sidebar-logo"
          style={{ margin: '0 auto 20px' }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          N
        </motion.div>
        
        <h2 className="auth-title">Únete a noox id</h2>
        <p className="auth-subtitle">
          Para iniciar, conecta tu cuenta de Google
        </p>
        
        <motion.button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="google-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <motion.div
              style={{ width: '20px', height: '20px', border: '2px solid #333', borderTop: '2px solid #4285f4', borderRadius: '50%' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          )}
          {isLoading ? 'Conectando...' : 'Continuar con Google'}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AuthPage;