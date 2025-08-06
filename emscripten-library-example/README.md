# 必备条件

- [Emscripten](https://emscripten.org/docs/getting_started/downloads.html)
- [CMake](https://cmake.org/download/)
- [Ninja](https://ninja-build.org/)

如果你是 Window 用户，可通过 winget 安装以上依赖：
```pwsh
winget install -e --id Kitware.CMake
winget install -e --id Ninja-build.Ninja
```

# 构建

```bash
npm run generate
npm run build
```