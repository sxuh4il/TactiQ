import React from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  Users, 
  Target,
  Filter
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const teamStats = [
  { name: 'Goals Scored', value: 45 },
  { name: 'Goals Conceded', value: 20 },
  { name: 'Clean Sheets', value: 12 },
  { name: 'Win Rate', value: 75 },
];

const possessionData = [
  { name: 'Possession', value: 65 },
  { name: 'Opposition', value: 35 },
];

const COLORS = ['#10b981', '#6b7280'];

const performanceByPosition = [
  { position: 'Forward', goals: 25, assists: 15, rating: 8.5 },
  { position: 'Midfielder', goals: 12, assists: 20, rating: 8.2 },
  { position: 'Defender', goals: 5, assists: 8, rating: 7.8 },
  { position: 'Goalkeeper', goals: 0, assists: 2, rating: 7.5 },
];

const Statistics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Team Statistics</h1>
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500">
            <option value="season">Current Season</option>
            <option value="last5">Last 5 Matches</option>
            <option value="last10">Last 10 Matches</option>
          </select>
          <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            <Filter className="w-5 h-5" />
            Filter Stats
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-500 p-3 rounded-lg">
                <BarChart2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-800">
                  {stat.value}{stat.name === 'Win Rate' ? '%' : ''}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance by Position</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceByPosition}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="position" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="goals" fill="#10b981" name="Goals" />
                <Bar dataKey="assists" fill="#60a5fa" name="Assists" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Possession Analysis</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={possessionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {possessionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Detailed Statistics</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Category</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Total</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Per Game</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Success Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: 'Shots', total: 245, perGame: 12.3, rate: '45%' },
                { category: 'Passes', total: 4532, perGame: 226.6, rate: '88%' },
                { category: 'Tackles', total: 384, perGame: 19.2, rate: '72%' },
                { category: 'Aerial Duels', total: 528, perGame: 26.4, rate: '65%' },
              ].map((stat, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-4 text-sm text-gray-800">{stat.category}</td>
                  <td className="text-center py-3 px-4 text-sm text-gray-800">{stat.total}</td>
                  <td className="text-center py-3 px-4 text-sm text-gray-800">{stat.perGame}</td>
                  <td className="text-center py-3 px-4 text-sm text-gray-800">{stat.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Statistics;