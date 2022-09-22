import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static dwarfInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.newDwarfInstance();
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  private static newDwarfInstance(): void { Dwarf.dwarfInstances += 1; }

  static createdRacesInstances(): number { return Dwarf.dwarfInstances; }
}