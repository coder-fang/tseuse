/**
 * 判断是否为对象
 * @param {any} data
 * @returns {boolean}
 */
export function isObject(data: any): boolean {
    return Object.prototype.toString.call(data) === '[object Object]';
}
  