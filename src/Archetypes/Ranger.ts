import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Ranger extends Archetypes {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.newArchetypeInstance();
  }
  
  get energyType(): EnergyType { return this._energyType; }
  
  private static newArchetypeInstance(): void {
    Ranger._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._archetypeInstances;
  }
}