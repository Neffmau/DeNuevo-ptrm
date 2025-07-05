import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Key, Code, Globe, Users, Check } from 'lucide-react';

const ApiSection: React.FC = () => {
  const [formData, setFormData] = useState({
    appName: '',
    appUrl: '',
    description: '',
    userCount: '',
    purpose: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div>
        <div className="header">
          <h1 className="header-title">Solicitud de API Key</h1>
        </div>

        <motion.div
          className="card"
          style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
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
            ¡Solicitud enviada!
          </h3>
          
          <p style={{ color: '#9aa0a6', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
            Tu solicitud de API Key ha sido enviada a nuestro equipo de desarrollo.
            Recibirás una respuesta en tu email en un plazo de 1-3 días hábiles.
          </p>

          <div style={{ 
            backgroundColor: '#272727', 
            border: '1px solid #404040', 
            borderRadius: '12px', 
            padding: '20px',
            textAlign: 'left'
          }}>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              Resumen de tu solicitud:
            </h4>
            <ul style={{ color: '#e0e0e0', lineHeight: '1.6', fontSize: '14px' }}>
              <li>• Aplicación: {formData.appName}</li>
              <li>• URL: {formData.appUrl}</li>
              <li>• Usuarios estimados: {formData.userCount}</li>
              <li>• Propósito: {formData.purpose}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Solicitar API Key</h1>
      </div>

      <motion.div
        className="card"
        style={{ maxWidth: '800px', margin: '0 auto' }}
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
            <Key size={32} />
          </div>
          
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
            Solicitud de API Key para Desarrolladores
          </h3>
          
          <p style={{ color: '#9aa0a6', fontSize: '16px' }}>
            Completa este formulario para integrar noox id en tu aplicación
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="form-group">
              <label className="form-label">
                <Code size={16} style={{ display: 'inline', marginRight: '8px' }} />
                Nombre de la aplicación
              </label>
              <input
                type="text"
                name="appName"
                value={formData.appName}
                onChange={handleChange}
                className="form-input"
                placeholder="Mi App Increíble"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Globe size={16} style={{ display: 'inline', marginRight: '8px' }} />
                URL o DNS
              </label>
              <input
                type="url"
                name="appUrl"
                value={formData.appUrl}
                onChange={handleChange}
                className="form-input"
                placeholder="https://miapp.com"
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="form-group">
              <label className="form-label">
                <Users size={16} style={{ display: 'inline', marginRight: '8px' }} />
                Cantidad de usuarios estimados
              </label>
              <select
                name="userCount"
                value={formData.userCount}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Selecciona un rango</option>
                <option value="1-100">1 - 100 usuarios</option>
                <option value="101-1000">101 - 1,000 usuarios</option>
                <option value="1001-10000">1,001 - 10,000 usuarios</option>
                <option value="10000+">Más de 10,000 usuarios</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Propósito de la integración</label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Selecciona un propósito</option>
                <option value="authentication">Autenticación de usuarios</option>
                <option value="sso">Single Sign-On (SSO)</option>
                <option value="api-access">Acceso a APIs protegidas</option>
                <option value="user-management">Gestión de usuarios</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Descripción detallada</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Describe tu aplicación, cómo planeas usar la API de noox id, y cualquier característica especial que necesites..."
              required
            />
          </div>

          <div style={{ 
            backgroundColor: '#272727', 
            border: '1px solid #404040', 
            borderRadius: '12px', 
            padding: '20px', 
            margin: '24px 0'
          }}>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              Especificaciones técnicas incluidas:
            </h4>
            <ul style={{ color: '#e0e0e0', lineHeight: '1.6', fontSize: '14px' }}>
              <li>• Documentación completa de la API</li>
              <li>• SDKs para JavaScript, Python, y PHP</li>
              <li>• Ejemplos de integración</li>
              <li>• Soporte técnico por email</li>
              <li>• Rate limiting: 1000 requests/hora</li>
              <li>• Webhooks para eventos de usuario</li>
            </ul>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', padding: '16px', fontSize: '16px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Key size={20} />
            Enviar solicitud
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ApiSection;