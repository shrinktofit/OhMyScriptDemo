#include <emscripten/bind.h>

int add(int a, int b) {
  return a + b;
}

EMSCRIPTEN_BINDINGS(example) {
  emscripten::function("add", &add);
}
