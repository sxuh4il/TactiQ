import React from 'react';
import { Users, Trophy, Calendar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'Match 1', goals: 2, assists: 1 },
  { name: 'Match 2', goals: 1, assists: 2 },
  { name: 'Match 3', goals: 3, assists: 0 },
  { name: 'Match 4', goals: 0, assists: 3 },
  { name: 'Match 5', goals: 2, assists: 1 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Users, label: 'Total Players', value: '28', color: 'bg-emerald-500' },
          { icon: Trophy, label: 'Matches Won', value: '12', color: 'bg-blue-500' },
          { icon: Calendar, label: 'Upcoming Matches', value: '3', color: 'bg-purple-500' },
          { icon: TrendingUp, label: 'Win Rate', value: '75%', color: 'bg-orange-500' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="goals" fill="#10b981" name="Goals" />
                <Bar dataKey="assists" fill="#60a5fa" name="Assists" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { title: 'Team Training Session', time: '2 hours ago', desc: 'Completed morning training session' },
              { title: 'Match Analysis', time: '5 hours ago', desc: 'Generated AI analysis for last match' },
              { title: 'Player Performance Update', time: '1 day ago', desc: 'Updated statistics for all players' },
              { title: 'Tactical Meeting', time: '2 days ago', desc: 'Reviewed upcoming match strategy' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-800">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.desc}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;