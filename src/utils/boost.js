// 拓展JS原型方法

// 查找指定的元素在数组中的位置
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
  if (this[i] == val) return i
  }
  return -1
}

// 删除数组指定的某个元素
Array.prototype.remove = function(val) {
  var index = this.indexOf(val)
  if (index > -1) {
  this.splice(index, 1)
  }
}

// 在数组的指定位置插入一个数组
Array.prototype.insertArr = function(arr1, index, arr2) {
  // 把arr2 变成一个适合splice的数组（包含splice前2个参数的数组）
  arr2.unshift(index, 0)
  // 利用apply把新得到的arr2整个数组做为参数传给arr1
  Array.prototype.splice.apply(arr1, arr2)
}

// 去掉数组中的空元素
Array.prototype.removeEmptyArrayEle = function() {    
  for(var i = 0; i < this.length; i++) {
   if(this[i] == undefined) {
      this.splice(i,1);
      i = i - 1;
    }
   }
   return this
}


// 判断两个数组是否存在重叠
Array.prototype.isExitedRepeat = function(arr) {
  if (this.find(item=>arr.includes(item))) {
    return true
  } else {
    return false
  }
}

// 返回两个数组的唯一重叠项
Array.prototype.intersection = function(arr) {
  return this.find(item=>arr.includes(item))
}

// 返回两个数组的重叠值数组（交集）
Array.prototype.interArr= function(arr) {
  return this.filter(item=>arr.includes(item))
}