import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static halflingInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling.newHalflingInstance();
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  private static newHalflingInstance(): void {
    Halfling.halflingInstances += 1;
  }

  static createdRacesInstances(): number { return Halfling.halflingInstances; }
}