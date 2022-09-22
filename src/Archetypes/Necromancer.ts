import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Necromancer extends Archetypes {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.newArchetypeInstance();
  }
  
  get energyType(): EnergyType { return this._energyType; }
  
  private static newArchetypeInstance(): void {
    Necromancer._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._archetypeInstances;
  }
}