import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static RaceInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.newRaceInstance();
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  private static newRaceInstance(): void { Dwarf.RaceInstances += 1; }

  static createdRacesInstances(): number { return Dwarf.RaceInstances; }
}