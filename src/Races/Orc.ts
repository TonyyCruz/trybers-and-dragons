import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static raceInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc.newRaceInstance();
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  private static newRaceInstance(): void { Orc.raceInstances += 1; }

  static createdRacesInstances(): number { return Orc.raceInstances; }
}