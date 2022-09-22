import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static raceInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling.newRaceInstance();
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  private static newRaceInstance(): void {
    Halfling.raceInstances += 1;
  }

  static createdRacesInstances(): number { return Halfling.raceInstances; }
}