import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Check, Eye, EyeOff } from 'lucide-react';

const PasswordSection: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // Simular registro
    setTimeout(() => {
      setIsSuccess(true);
    }, 1000);
  };

  const passwordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthColor = (strength: number) => {
    if (strength <= 1) return '#ea4335';
    if (strength <= 2) return '#fbbc05';
    if (strength <= 3) return '#34a853';
    return '#34a853';
  };

  const getStrengthText = (strength: number) => {
    if (strength <= 1) return 'Débil';
    if (strength <= 2) return 'Regular';
    if (strength <= 3) return 'Fuerte';
    return 'Muy fuerte';
  };

  if (isSuccess) {
    return (
      <div>
        <div className="header">
          <h1 className="header-title">Contraseña configurada</h1>
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
            ¡Contraseña de respaldo configurada!
          </h3>
          
          <p style={{ color: '#9aa0a6', fontSize: '16px', lineHeight: '1.6' }}>
            Tu contraseña de respaldo ha sido guardada de forma segura.
            Podrás usarla para acceder a tu cuenta si no tienes acceso a otros métodos de autenticación.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Contraseña de respaldo</h1>
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
            <Lock size={32} />
          </div>
          
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
            Crear contraseña de respaldo
          </h3>
          
          <p style={{ color: '#9aa0a6', fontSize: '16px' }}>
            Esta contraseña te permitirá acceder a tu cuenta si pierdes acceso a otros métodos
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Ingresa tu contraseña"
                required
                style={{ paddingRight: '48px' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9aa0a6',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            {password && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: '8px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', color: '#9aa0a6' }}>Fortaleza</span>
                  <span style={{ fontSize: '14px', color: getStrengthColor(passwordStrength()) }}>
                    {getStrengthText(passwordStrength())}
                  </span>
                </div>
                <div style={{ width: '100%', height: '4px', backgroundColor: '#404040', borderRadius: '2px' }}>
                  <div 
                    style={{ 
                      width: `${(passwordStrength() / 4) * 100}%`, 
                      height: '100%', 
                      backgroundColor: getStrengthColor(passwordStrength()),
                      borderRadius: '2px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Confirmar contraseña</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
                placeholder="Confirma tu contraseña"
                required
                style={{ paddingRight: '48px' }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9aa0a6',
                  cursor: 'pointer'
                }}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Lock size={20} />
            Guardar contraseña
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PasswordSection;