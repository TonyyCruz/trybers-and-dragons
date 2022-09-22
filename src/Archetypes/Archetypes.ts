import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  private _special = 0;
  private _cost = 0;
  // private static _archetypeInstances = 0;

  constructor(private _name: string) {
    // Archetypes.newArchetypeInstances();
  }

  get name(): string { return this._name; }

  get special(): number { return this._special; }

  get cost(): number { return this._cost; }

  // private static newArchetypeInstance(): void {
  //   Archetype._archetypeInstances += 1;
  // }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}