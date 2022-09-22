import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Mage extends Archetypes {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType = 'mana';
  
  constructor(name: string) {
    super(name);
    Mage.newArchetypeInstance();
  }

  get energyType(): EnergyType { return this._energyType; }

  private static newArchetypeInstance(): void {
    Mage._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._archetypeInstances;
  }
}