import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

export default class PVP extends Battle {
  private _winnerPlayer = 'undefined';

  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  private player1Attack(): void {
    this.player1.attack(this.player2);

    if (this.player2.lifePoints === -1) {
      this._winnerPlayer = 'player1';
      return;
    }
    this.player2Attack();
  }

  private player2Attack(): void {
    this.player2.attack(this.player1);

    if (this.player1.lifePoints === -1) {
      this._winnerPlayer = 'player2';
      return;
    } 
    this.player1Attack();
  }

  fight():number {
    const random = Math.floor((Math.random() * 10) + 1);

    if (random % 2) {
      this.player1Attack();
    } else {
      this.player2Attack();
    }

    return super.fight();
  }

  get winnerPlayer(): string {
    return `${this._winnerPlayer} Win!!!`;
  }
}