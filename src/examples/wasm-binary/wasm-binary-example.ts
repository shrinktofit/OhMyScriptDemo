import RAPIERBinary from '@dimforge/rapier2d/rapier_wasm2d_bg.wasm?wasm-binary';
import { defineExample } from '../utils/example-util.js';

defineExample(`WebAssembly binary import example`, () => {
  console.log(`RAPIERBinary: `, RAPIERBinary);
});
