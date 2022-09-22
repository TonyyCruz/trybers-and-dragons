export default abstract class Race {
  private static racesInstances = 0;

  constructor(private _name: string, private _dexterity: number) {
    Race.newRaceInstance();
  }

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  private static newRaceInstance(): void { Race.racesInstances += 1; }

  static createdRacesInstances(): number { throw new Error('Not implemented'); }

  abstract get maxLifePoints(): number;
}
