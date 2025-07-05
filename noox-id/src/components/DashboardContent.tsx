import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from './sections/ProfileSection';
import FaceSection from './sections/FaceSection';
import EmailSection from './sections/EmailSection';
import PasswordSection from './sections/PasswordSection';
import NamesSection from './sections/NamesSection';
import AppsSection from './sections/AppsSection';
import DataSection from './sections/DataSection';
import ApiSection from './sections/ApiSection';
import SettingsSection from './sections/SettingsSection';

interface DashboardContentProps {
  activeSection: string;
  user: any;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activeSection, user }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection user={user} />;
      case 'face':
        return <FaceSection />;
      case 'email':
        return <EmailSection />;
      case 'password':
        return <PasswordSection />;
      case 'names':
        return <NamesSection />;
      case 'apps':
        return <AppsSection />;
      case 'data':
        return <DataSection />;
      case 'api':
        return <ApiSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <ProfileSection user={user} />;
    }
  };

  return (
    <motion.div
      key={activeSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {renderSection()}
    </motion.div>
  );
};

export default DashboardContent;