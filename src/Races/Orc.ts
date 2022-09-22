import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static orcInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc.newOrcInstance();
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  private static newOrcInstance(): void { Orc.orcInstances += 1; }

  static createdRacesInstances(): number { return Orc.orcInstances; }
}