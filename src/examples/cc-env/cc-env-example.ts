import * as env from 'cc/env';
import { defineExample } from '../utils/example-util.js';

defineExample(`cc/env`, () => {
  console.log( `cc/env: `, JSON.stringify({
    ...env
  }, undefined, 2));
});

