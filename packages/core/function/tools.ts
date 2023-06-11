/**
 * 函数节流（每隔一段时间执行一次，防止函数过于频繁调用，导致性能问题）
 * @param {Function} fn
 * @param {number} wait 时间（单位：ms）
 * @returns 节流函数
 */
export const throttle = (fn: Function, wait: number = 300) => {
  let timer = false;
  return (...args: any[]) => {
    if (timer) return;
    timer = true;
    setTimeout(() => {
      fn(...args);
      timer = false;
    }, wait);
  };
};
/**
 * 函数防抖（保证一个函数在多少毫秒内不被再次触发，只会执行一次）
 * @param fn 将要处理的函数
 * @param wait 事件（单位：ms）
 * @param immediate 是否在触发事件后，在时间段n开始，立即执行；否则在时间段n结束，才执行。
 * @returns 防抖函数
 */
export const debounce = (fn: Function, wait: number, immediate: boolean = false) => {
  let timer: any = null;
  let ctx = this;
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (immediate) {
      if (!timer) fn.apply(ctx, args); // 第一次调用时执行
      timer = setTimeout(() => {
        // n秒内多次触发事件，重新计算timer
        timer = null; // n秒内没有触发事件，timer设置为null，保证n秒后能重新触发事件
      }, wait);
    } else {
      timer = setTimeout(() => {
        // 延迟指定毫秒后调用
        fn.apply(this, args);
      }, wait);
    }
  };
};

export const deepClone = (obj: Object,hash: any = new WeakMap) => {
  if(obj instanceof Date){
    return new Date(obj);
  }
  if(obj instanceof RegExp){
    return new RegExp(obj);
  }
  if(hash.has(obj)){  
    return hash.get(obj);
  }
  
}