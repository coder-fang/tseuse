/**
 * 随机生成字符串
 * @param {number} length
 * @returns {string}
 */
export const randomString = (length: number): string => {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
  let charsLen = chars.length;
  let resultStr = '';
  for (let i = 0; i < length; i++) {
    resultStr += chars.charAt(Math.floor(Math.random() * charsLen));
  }
  return resultStr;
};
