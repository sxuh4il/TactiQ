import React from 'react';
import type { Match } from '../types';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-500">{match.date}</div>
        <div className="text-sm text-emerald-600 font-medium">{match.venue}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-center flex-1">
          <h3 className="font-semibold text-gray-800">{match.homeTeam}</h3>
        </div>
        <div className="px-4">
          <span className="text-2xl font-bold text-gray-800">{match.score}</span>
        </div>
        <div className="text-center flex-1">
          <h3 className="font-semibold text-gray-800">{match.awayTeam}</h3>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;