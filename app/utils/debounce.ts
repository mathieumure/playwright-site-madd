export const debounce = (func: Function, wait: number, immediate?: boolean) => {
  let timeout: ReturnType<typeof setTimeout> | null;
  return (...args: any[]) => {
    const context: any = this;
    if (timeout) clearTimeout(timeout);
    if (immediate && !timeout) func.apply(context, args);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
  };
};
