export enum GameConsoleStatus {
  /** 首頁 */
  HOME = 'home',
  /** 大廳等待中 */
  LOBBY = 'lobby',
  /** 遊戲中 */
  PLAYING = 'playing',
}

export interface Player {
  clientId: string;
}

export interface GameConsoleState {
  status: `${GameConsoleStatus}`;
  gameName?: string;
  players: Player[];
}

export type UpdateGameConsoleState = Partial<GameConsoleState>;
