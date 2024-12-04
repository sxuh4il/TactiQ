export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  team: string;
  age: number;
  nationality: string;
  image: string;
}

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  score: string;
  venue: string;
}

export interface Performance {
  id: string;
  playerId: string;
  matchId: string;
  goals: number;
  assists: number;
  passAccuracy: number;
  distanceCovered: number;
}