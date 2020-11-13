export function getStrLenght(message) {
  var strlenght = 0; // 初始定义长度为0
  var txtval = message.trim()
  for (var i = 0; i < txtval.length; i++) {
      if (isCN(txtval.charAt(i)) == true) {
          strlenght = strlenght + 1; //中文为2个字符
      } else {
          strlenght = strlenght + 0.5; //英文一个字符
      }
  }
  return strlenght
}

export function isCN(str) { // 判断是不是中文
  var regexCh = /[u00-uff]/;
  return !regexCh .test(str);
}

export function isNull(val) { // 判断是否为空
  let arr = ['', null, undefined, '--']
  return arr.includes(val)
}

export function NumNorm(val, unit='') {  // 数值通用规范：对于数值非常大的字段
  if (!isNull(val)) {
    let sizes = ['', '万', '亿', '万亿'], k = 10000, i
    val = parseFloat(val)
    if (val <k) {
      val = (val >= 100) ? val.toPrecision(4) : val.toFixed(2)
      return val + unit
    } else {
      i = Math.floor(Math.log(val) / Math.log(k))
      val = ((val / Math.pow(k, i)))
      val = (val > 100) ? val.toPrecision(4) : val.toFixed(2)
      return val + sizes[i] + unit
    }
  } else {
    return "--"
  }
}

// export function get_dateList(length, time_stamp, step) {
//   // 获取日期列表，
//   var length = length || '3';
//   var time_stamp = time_stamp || Date.parse(new Date());
//   var date_list = [];
//   var step = step || '1'; // 跨度
//   for (var i = 0; i < length; i++) {
//       date_list.push(new Date(time_stamp + i * 86400000 * step).getFullYear() + '-' + (new Date(time_stamp + i *
//           86400000 * step).getMonth() + 1) + '-' + new Date(time_stamp + i * 86400000 * step).getDate());
//   }
//   return date_list;
// }

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days);
  return dat;
}

export function getDates(startDate, stopDate) {
 var dateArray = new Array();
 var currentDate = startDate;
 while (currentDate <= stopDate) {
   dateArray.push(currentDate)
   currentDate = currentDate.addDays(1);
 }
 return dateArray;
}

var dateArray = getDates(new Date(), (new Date()).addDays(2));

console.log(dateArray)


