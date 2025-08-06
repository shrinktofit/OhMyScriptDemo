import './examples/language-features/language-features-example.js';
import './examples/cc-env/cc-env-example.js';
import './examples/emscripten-wasm/emscripten-wasm-example.js';
import './examples/wasm-pack-wasm/wasm-pack-wasm-example.js';
import './examples/wasm-binary/wasm-binary-example.js';
import { defineExample } from './examples/utils/example-util.js';

defineExample(`index`, () => {
  console.log('This is index!');
});
