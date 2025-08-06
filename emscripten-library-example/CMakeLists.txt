cmake_minimum_required(VERSION 3.27)

project (emscripten-library-example)

add_executable (emscripten-library-example main.cpp)

target_link_options (
  emscripten-library-example
  PRIVATE
  -sEXPORT_ES6=1
  -sMODULARIZE=1
  -g0
  -lembind
  "--emit-tsd emscripten-library-example.d.ts"
)
