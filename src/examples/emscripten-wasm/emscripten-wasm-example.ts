import factory from '../../../emscripten-library-example/build/emscripten-library-example.js' with { type: 'oms:emscripten-glue' };
import { defineExample } from '../utils/example-util.js';

await defineExample(`Emscripten WebAssembly import`, async () => {
  const instance = await factory();
  const { add } = instance;
  console.log(`add(1, 2) =`, add(1, 2));
});
