import { defineExample } from "../utils/example-util.js";

defineExample(`Language features`, () => {
  class C {
    static {
      console.log(`If you see me, static block is supported and executed!`);
    }

    get privateField() {
      return this.#privateField;
    }

    #privateField = 1;
  }

  new C().privateField;
  console.log(`If you see me, private field is supported`);
});