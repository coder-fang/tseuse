/**
 * 判断是否为空对象
 * @param obj
 * @returns {boolean}
 */
const isObject = (obj: any): boolean => {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
};
/**
 * 深拷贝合并对象
 * @param {object} obj1 外部的参数对象
 * @param {object} obj2 默认参数对象
 * @returns {Object}
 */
export const mergeObejct = (obj1: any, obj2: Object): Object => {
  if (!isObject(obj1)) {
    return mergeObejct({}, obj2);
  }
  if (!isObject(obj2)) {
    return mergeObejct({}, obj1);
  }
  // 定义一个以默认值为基础的新对象
  let newObj = Object.assign({}, obj2);
  // 遍历传参对象
  Object.keys(obj1).forEach(function (key) {
    let val = obj1[key];
    if (key === '__proto__' || key === 'constructor') {
      return;
    }
    if (val === null) {
      return;
    }
    // 如果传参对象中的值为对象，则递归调用
    if (isObject(val) && isObject(newObj[key])) {
      newObj[key] = mergeObejct(val, newObj[key]);
    } else {
      newObj[key] = val;
    }
  });
  return newObj;
};
