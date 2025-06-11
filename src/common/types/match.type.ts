export interface MatchType {
  id: number;
  tournaments: { id: number };
  teamHome: { id: number; name: string; logo?: string };
  teamAway: { id: number; name: string; logo?: string };
  localgoals: number;
  visitangoals: number;
  pointsLocal: number;
  pointsVisitan: number;
}