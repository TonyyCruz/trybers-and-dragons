import Fighter from '../Fighter';
import Battle from './Battle';
import SimpleFighter from '../Fighter/SimpleFighter';

export default class PVE extends Battle {
  constructor(private character: Fighter, private monster: SimpleFighter[]) {
    super(character);
  }

  private fighting(enemy: SimpleFighter): void {
    this.character.attack(enemy);
    if (enemy.lifePoints === -1) return;
    enemy.attack(this.character);
    if (this.character.lifePoints === -1) return;

    this.fighting(enemy);
  }

  fight(): number {
    this.monster.forEach((enemy) => {
      if (this.character.lifePoints === -1) return;
      this.fighting(enemy);
    });

    return super.fight();
  }
}