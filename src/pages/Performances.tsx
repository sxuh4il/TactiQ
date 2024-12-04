import React from 'react';
import { BarChart2, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Performance } from '../types';

const mockPerformances: Performance[] = [
  {
    id: '1',
    playerId: '1',
    matchId: '1',
    goals: 2,
    assists: 1,
    passAccuracy: 85,
    distanceCovered: 10.5
  },
  // Add more mock performances
];

const performanceTrend = [
  { match: 'Match 1', rating: 8.5 },
  { match: 'Match 2', rating: 7.8 },
  { match: 'Match 3', rating: 8.2 },
  { match: 'Match 4', rating: 9.0 },
  { match: 'Match 5', rating: 8.7 },
];

const Performances = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Performance Analysis</h1>
        <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500">
          <option value="">Last 5 Matches</option>
          <option value="10">Last 10 Matches</option>
          <option value="season">Entire Season</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Average Rating', value: '8.2', icon: BarChart2, color: 'bg-emerald-500' },
          { label: 'Goals', value: '15', icon: TrendingUp, color: 'bg-blue-500' },
          { label: 'Assists', value: '8', icon: TrendingUp, color: 'bg-purple-500' },
          { label: 'Pass Accuracy', value: '87%', icon: TrendingUp, color: 'bg-orange-500' },
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

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance Trend</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="match" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Line type="monotone" dataKey="rating" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Performances;