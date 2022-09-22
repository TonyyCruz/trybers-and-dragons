import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static raceInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.newRaceInstance();
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  private static newRaceInstance(): void { Elf.raceInstances += 1; }

  static createdRacesInstances(): number { return Elf.raceInstances; }
}