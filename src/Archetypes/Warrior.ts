import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Warrior extends Archetypes {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.newArchetypeInstance();
  }
  
  get energyType(): EnergyType { return this._energyType; }
  
  private static newArchetypeInstance(): void {
    Warrior._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeInstances;
  }
}