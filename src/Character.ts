import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';

export default class Character implements Fighter {
  private _race!: Race;
  private _archetype!: Archetypes;
  private _maxLifePoints!: number;
  private _lifePoints!: number;
  private _strength!: number;
  private _defense!: number;
  private _dexterity: number;
  private _energy!: Energy;

  constructor(private _name: string) {
    this._dexterity = Character.randomValue(10);
    this.defaultCharacter();
  }

  private static randomValue(max: number): number {
    return Math.floor((Math.random() * max) + 1);
  }

  private characterInitialStatus(): void {
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.randomValue(10);
    this._defense = Character.randomValue(10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomValue(10),
    };
  }

  private defaultCharacter(): void {
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this.characterInitialStatus();
  }

  private levelUpLifeUpdate(): void {
    if (this._maxLifePoints === this._race.maxLifePoints) return;

    const newLifeValue = this._maxLifePoints + Character.randomValue(10);

    if (newLifeValue > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      return;
    }

    this._maxLifePoints = newLifeValue;
  }

  get race(): Race { return this._race; }

  get archetype(): Archetypes { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public special(enemy: Fighter): void {
    const energyPower = Character.randomValue(this._energy.amount);
    const luck = Character.randomValue(5);
    const badLuck = Character.randomValue(5);
    const damage = (energyPower * this._strength * luck) / 10 + badLuck;

    this._energy.amount -= energyPower;

    enemy.receiveDamage(damage);
  }

  public receiveDamage(attackPoints: number): number {
    const damageTaken = attackPoints - this._defense;
    if (damageTaken <= 0) return this._lifePoints;

    this._lifePoints -= damageTaken;

    if (this._lifePoints <= 0) return -1;

    return this._lifePoints;
  }

  levelUp(): void {
    this.levelUpLifeUpdate();
    this._strength += Character.randomValue(10);
    this._dexterity += Character.randomValue(10);
    this._defense += Character.randomValue(10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
}
