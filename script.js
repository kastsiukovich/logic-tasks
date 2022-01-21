// HW10
function reorderNums(arr, a) {
   if (a == 'asc') {
      var reorderN = arr.sort((a, b) => a - b);
      return reorderN;
   } else if (a == 'desc') {
      var reorderN = arr.sort((a, b) => b - a);
      return reorderN;
   }
}
console.log(reorderNums([515, 341, 98, 44, 211], "asc"));
console.log(reorderNums([515, 341, 98, 44, 211], "desc"));
console.log(reorderNums([63251, 78221], "asc"));
console.log(reorderNums([63251, 78221], "desc"));
console.log(reorderNums([1, 2, 3, 4], "asc"));
console.log(reorderNums([1, 2, 3, 4], "desc"));

function parseCode(str) {
   var obj = {};
   var newStr = str.split('0')
   var filtered = newStr.filter(Boolean);
   obj.firstName = filtered[0];
   obj.lastName = filtered[1];
   obj.id = filtered[2];
   return obj;
}
console.log(parseCode("John000Doe000123"));
console.log(parseCode("michael0smith004331"));
console.log(parseCode("Thomas00LEE0000043"));

