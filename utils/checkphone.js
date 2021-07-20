const mainland = /^[1][3-8]\d{9}$|^([6|9])\d{7}$|^[6]([8|6])\d{5}$/;
const taiwan = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
const hongkong = /^([6|9])\d{7}$/;
const macau = /^[0][9]\d{8}$/;

const checkPhone = (area, num) => {
  if (area === '86' && num) {
    if (mainland.test(num.trim())) {
      return true;
    }
    return false;
  }
  if (area === '886' && num) {
    if (taiwan.test(num)) {
      return true;
    }
    return false;
  }
  if (area === '852' && num) {
    if (hongkong.test(num)) {
      return true;
    }
    return false;
  }
  if (area === '853' && num) {
    if (macau.test(num)) {
      return true;
    }
    return false;
  }
  return false;
};

export default checkPhone;
