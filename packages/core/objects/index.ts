/**
 * 判断是否为对象
 * @param {any} data
 * @returns {boolean}
 */
export function isObject(data: any): boolean {
  return Object.prototype.toString.call(data) === '[object Object]';
}
/**
 * 合并对象
 * @param objs
 * @returns {object}
 */
export function mergeObject(...objs): object {
  let result = {};
  objs.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      let value = obj[key];
      if (!result.hasOwnProperty(key)) {
        // 说明result中没有该属性
        result[key] = result;
      } else {
        // 说明result已经存在该属性，那么就把同名属性的值合并为一个数组
        result[key] = [].concat(result[key], value);
      }
    });
  });
  return result;
}
