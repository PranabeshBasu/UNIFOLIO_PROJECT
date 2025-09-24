import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatCard from '../../components/admin/StatCard';
import { FileCheck, Users, Building, Bell } from 'lucide-react';


const sampleData = [
  { month: 'Jan', Approvals: 12, Events: 3 },
  { month: 'Feb', Approvals: 18, Events: 5 },
  { month: 'Mar', Approvals: 10, Events: 2 },
  { month: 'Apr', Approvals: 25, Events: 6 },
  { month: 'May', Approvals: 15, Events: 4 },
];

const Analytics = () => {
  return (
    <div className="space-y-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Approvals (YTD)" value="152" icon={<FileCheck size={24} />} />
            <StatCard title="Active Students" value="1,250" icon={<Users size={24} />} />
            <StatCard title="Events This Year" value="28" icon={<Building size={24} />} />
            <StatCard title="Total Notices" value="45" icon={<Bell size={24} />} />
        </section>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Monthly Activity</h2>
            <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={sampleData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                    <YAxis stroke="#888888" fontSize={12} />
                    <Tooltip wrapperClassName="!bg-white !border-gray-200 !rounded-lg !shadow-lg" />
                    <Legend />
                    <Bar dataKey="Approvals" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Events" fill="#818cf8" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    </div>
  );
};

export default Analytics;
