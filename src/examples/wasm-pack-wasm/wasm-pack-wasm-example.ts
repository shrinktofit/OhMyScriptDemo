import * as RAPIER from '@dimforge/rapier2d';
import { defineExample } from '../utils/example-util.js';

export default RAPIER;

defineExample(`WebAssembly pack import`, () => {
  console.log(`RAPIER.Ball: `, RAPIER.Ball);
});
