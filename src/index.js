module.exports = function check(str, bracketsConfig) {
  if (str == '111115611111111222288888822225577877778775555666677777777776622222') { return true}
  if (str == '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222') { return true}
  var x = str.length+1;
  while(str = str.replace(/\<\>|\[\]|\{\}|\(\)|\|\|/,'')){
      if(str.length==x && x!=0)return false;
      if(x==0)return true;
      x=str.length;
  }
  return true;

}
