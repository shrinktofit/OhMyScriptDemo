export function defineExample(title: string, exec: () => void | Promise<void>) {
  console.log(`=== Example: ${title} begin ===`);
  const logEnd = () => {
    void 0;
  }
  const execResult = exec();
  if (execResult instanceof Promise) {
    return execResult.then(() => {
      logEnd();
    });
  } else {
    logEnd();
  }
}