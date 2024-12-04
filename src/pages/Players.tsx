import React from 'react';
import { Plus, Search } from 'lucide-react';
import PlayerCard from '../components/PlayerCard';
import type { Player } from '../types';

const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'John Smith',
    position: 'Forward',
    team: 'Team A',
    age: 24,
    nationality: 'England',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Marco Silva',
    position: 'Midfielder',
    team: 'Team A',
    age: 27,
    nationality: 'Spain',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
  },
  // Add more mock players as needed
];

const Players = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Players</h1>
        <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Player
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search players..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500">
          <option value="">All Positions</option>
          <option value="forward">Forward</option>
          <option value="midfielder">Midfielder</option>
          <option value="defender">Defender</option>
          <option value="goalkeeper">Goalkeeper</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Players;