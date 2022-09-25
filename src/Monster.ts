import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints = 85;
  protected _strength = 63;

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public receiveDamage(attackPoints: number): number {
    if (attackPoints <= 0) return this._lifePoints;

    const newLifePoints = this._lifePoints - attackPoints;

    if (newLifePoints <= 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }

    this._lifePoints = newLifePoints;

    return this._lifePoints;
  }
}
