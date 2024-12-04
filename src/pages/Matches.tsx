import React from 'react';
import { Plus, Calendar } from 'lucide-react';
import MatchCard from '../components/MatchCard';
import type { Match } from '../types';

const mockMatches: Match[] = [
  {
    id: '1',
    homeTeam: 'Team A',
    awayTeam: 'Team B',
    date: '2024-03-15',
    score: '2 - 1',
    venue: 'Home Stadium'
  },
  {
    id: '2',
    homeTeam: 'Team C',
    awayTeam: 'Team A',
    date: '2024-03-20',
    score: '0 - 3',
    venue: 'Away Stadium'
  },
  // Add more mock matches as needed
];

const Matches = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Matches</h1>
        <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          <Plus className="w-5 h-5" />
          Schedule Match
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="date"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500"
          />
          <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500">
          <option value="">All Venues</option>
          <option value="home">Home</option>
          <option value="away">Away</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Matches;