interface LeagueData {
  tier: string;
  leagueId: string;
  queue: string;
  name: string;
  entries: SummonerData[];
}

interface SummonerData {
  freshBlood: boolean;
  hotStreak: boolean;
  inactive: boolean;
  leaguePoints: number;
  losses: number;
  rank: string;
  summonerId: string;
  summonerName: string;
  veteran: boolean;
  wins: number;
}

export type { LeagueData, SummonerData };
