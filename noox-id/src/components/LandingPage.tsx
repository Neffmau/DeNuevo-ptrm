import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Users, Zap, Eye, Key } from 'lucide-react';

interface LandingPageProps {
  onTryNow: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onTryNow }) => {
  const features = [
    {
      icon: Shield,
      title: 'Autenticación Segura',
      description: 'Protección avanzada con múltiples factores de autenticación incluyendo reconocimiento facial.'
    },
    {
      icon: Lock,
      title: 'Privacidad Total',
      description: 'Tus datos están completamente protegidos con encriptación de extremo a extremo.'
    },
    {
      icon: Users,
      title: 'Gestión Centralizada',
      description: 'Administra todas tus aplicaciones y servicios desde un solo lugar.'
    },
    {
      icon: Zap,
      title: 'Acceso Instantáneo',
      description: 'Inicia sesión en segundos con nuestro sistema de autenticación rápida.'
    },
    {
      icon: Eye,
      title: 'Reconocimiento Facial',
      description: 'Tecnología biométrica avanzada para una autenticación sin contraseñas.'
    },
    {
      icon: Key,
      title: 'API para Desarrolladores',
      description: 'Integra fácilmente nuestro sistema de autenticación en tus aplicaciones.'
    }
  ];

  return (
    <div className="landing-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="landing-title">Noox ID</h1>
          <p className="landing-subtitle">
            La plataforma de autenticación más segura y moderna. 
            Protege tus datos con tecnología biométrica avanzada.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button onClick={onTryNow} className="btn btn-primary">
              <Zap size={20} />
              Try Now
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="landing-features"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">
                <feature.icon size={32} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;