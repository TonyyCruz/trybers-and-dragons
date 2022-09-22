import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static elfInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.newElfInstance();
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  private static newElfInstance(): void { Elf.elfInstances += 1; }

  static createdRacesInstances(): number { return Elf.elfInstances; }
}