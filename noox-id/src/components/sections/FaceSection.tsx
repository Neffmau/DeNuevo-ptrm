import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Check, AlertCircle } from 'lucide-react';

const FaceSection: React.FC = () => {
  const [step, setStep] = useState<'instructions' | 'scanning' | 'success'>('instructions');

  const handleStartScan = () => {
    setStep('scanning');
    // Simular escaneo
    setTimeout(() => {
      setStep('success');
    }, 3000);
  };

  const instructions = [
    'Asegúrate de estar en un lugar bien iluminado',
    'Mantén tu rostro centrado en el cuadro',
    'No uses gafas de sol o máscaras',
    'Mantén una expresión neutral'
  ];

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Registrar rostro</h1>
      </div>

      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        {step === 'instructions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '20px', textAlign: 'center' }}>
              Configurar reconocimiento facial
            </h3>
            
            <div className="camera-container">
              <div className="camera-placeholder">
                <Camera size={64} style={{ color: '#9aa0a6' }} />
                <p style={{ marginTop: '16px', fontSize: '18px' }}>
                  Cámara lista para escanear
                </p>
              </div>
            </div>

            <div className="camera-instructions">
              <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#ffffff', marginBottom: '16px' }}>
                Instrucciones importantes:
              </h4>
              <ul style={{ textAlign: 'left', color: '#e0e0e0', lineHeight: '1.8' }}>
                {instructions.map((instruction, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              onClick={handleStartScan}
              className="btn btn-primary"
              style={{ marginTop: '24px' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Camera size={20} />
              Comenzar escaneo
            </motion.button>
          </motion.div>
        )}

        {step === 'scanning' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '20px', textAlign: 'center' }}>
              Escaneando rostro...
            </h3>
            
            <div className="camera-container">
              <motion.div
                style={{
                  width: '200px',
                  height: '200px',
                  border: '3px solid #4285f4',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                animate={{ 
                  borderColor: ['#4285f4', '#34a853', '#4285f4'],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Camera size={48} style={{ color: '#4285f4' }} />
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '-5px',
                    right: '-5px',
                    bottom: '-5px',
                    border: '2px solid #4285f4',
                    borderRadius: '50%',
                    borderTop: 'transparent',
                    borderRight: 'transparent'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>

            <div className="camera-instructions">
              <p style={{ color: '#4285f4', fontSize: '16px', fontWeight: '500' }}>
                Mantén tu rostro centrado y espera...
              </p>
            </div>
          </motion.div>
        )}

        {step === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '20px', textAlign: 'center' }}>
              ¡Registro exitoso!
            </h3>
            
            <div className="camera-container">
              <motion.div
                className="success-check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <Check size={48} />
              </motion.div>
            </div>

            <div className="camera-instructions">
              <p style={{ color: '#34a853', fontSize: '16px', fontWeight: '500' }}>
                Tu rostro ha sido registrado correctamente.
                Ya puedes usar el reconocimiento facial para autenticarte.
              </p>
            </div>

            <motion.button
              onClick={() => setStep('instructions')}
              className="btn btn-secondary"
              style={{ marginTop: '24px' }}
              whileHover={{ scale: 1.02 }}
            >
              Volver a escanear
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FaceSection;