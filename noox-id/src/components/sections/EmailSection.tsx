import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';

const EmailSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular registro
    setTimeout(() => {
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div>
        <div className="header">
          <h1 className="header-title">Correo registrado</h1>
        </div>

        <motion.div
          className="card"
          style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="success-check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Check size={48} />
          </motion.div>
          
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
            ¡Correo registrado exitosamente!
          </h3>
          
          <p style={{ color: '#9aa0a6', fontSize: '16px', lineHeight: '1.6' }}>
            Hemos enviado un correo de verificación a <strong>{email}</strong>.
            Revisa tu bandeja de entrada y sigue las instrucciones.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Registrar correo</h1>
      </div>

      <motion.div
        className="card"
        style={{ maxWidth: '500px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'linear-gradient(135deg, #4285f4, #34a853)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: 'white'
          }}>
            <Mail size={32} />
          </div>
          
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
            Verificar correo electrónico
          </h3>
          
          <p style={{ color: '#9aa0a6', fontSize: '16px' }}>
            Agrega tu correo electrónico para recibir notificaciones importantes
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={20} />
            Registrar correo
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailSection;