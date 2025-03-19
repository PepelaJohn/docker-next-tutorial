

// components/DashboardCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, color }) => {
  return (
    <Card className="w-full h-full">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
        <div className={`${color} p-2 rounded-lg`}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;