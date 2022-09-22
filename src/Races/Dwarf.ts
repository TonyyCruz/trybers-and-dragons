import Race from './Race';

export default class Dwarf extends Race {
  get maxLifePoints(): number {
    throw new Error('Method not implemented.');
  }
}