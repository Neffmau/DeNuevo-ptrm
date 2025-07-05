import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Clock, Mail } from 'lucide-react';

const DataSection: React.FC = () => {
  const [isRequested, setIsRequested] = useState(false);

  const handleDownloadRequest = () => {
    setIsRequested(true);
  };

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Solicitar datos personales</h1>
      </div>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!isRequested ? (
          <div className="download-section">
            <motion.div
              className="download-icon"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Download size={40} />
            </motion.div>
            
            <h3 className="download-title">
              Descargar mis datos
            </h3>
            
            <p className="download-description">
              Solicita una copia de todos tus datos personales almacenados en noox id.
              El proceso puede demorar entre 3 a 15 días hábiles.
            </p>

            <div style={{ 
              backgroundColor: '#272727', 
              border: '1px solid #404040', 
              borderRadius: '12px', 
              padding: '20px', 
              marginBottom: '32px',
              textAlign: 'left'
            }}>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                ¿Qué incluye la descarga?
              </h4>
              <ul style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
                <li>• Información de perfil (nombre, email, etc.)</li>
                <li>• Configuraciones de cuenta</li>
                <li>• Historial de autenticación</li>
                <li>• Aplicaciones vinculadas</li>
                <li>• Logs de actividad</li>
              </ul>
            </div>

            <motion.button
              onClick={handleDownloadRequest}
              className="btn btn-primary"
              style={{ fontSize: '18px', padding: '16px 32px' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={24} />
              Solicitar descarga
            </motion.button>
          </div>
        ) : (
          <motion.div
            className="download-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #4285f4, #34a853)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white'
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Clock size={40} />
            </motion.div>
            
            <h3 className="download-title">
              Solicitud procesándose
            </h3>
            
            <p className="download-description">
              Tu solicitud de datos ha sido recibida y está siendo procesada.
              Recibirás un email con el archivo de descarga en los próximos 3-15 días hábiles.
            </p>

            <div style={{ 
              backgroundColor: '#272727', 
              border: '1px solid #404040', 
              borderRadius: '12px', 
              padding: '20px', 
              marginBottom: '32px',
              textAlign: 'left'
            }}>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Próximos pasos:
              </h4>
              <ul style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
                <li>• Recibirás un email de confirmación</li>
                <li>• Procesaremos tu solicitud</li>
                <li>• Te enviaremos un enlace de descarga seguro</li>
                <li>• El enlace expirará en 48 horas</li>
              </ul>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#9aa0a6', fontSize: '14px' }}>
              <Mail size={16} />
              <span>Te notificaremos por email cuando esté listo</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DataSection;