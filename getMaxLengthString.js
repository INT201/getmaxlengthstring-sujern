const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString == null || undefined){
    return undefined
}
else{
    let max_str = arrayOfString[0].length
    let ans_max = arrayOfString[0]

    for(let i = 1; i < arrayOfString.length;i++){
        let max_str_i = arrayOfString[i].length;
        if(max_str_i > max_str){
            ans_max = arrayOfString[i];
            max_str = max_str_i;
        }
        else if(max_str_i == max_str && ans_max != arrayOfString[i]){
            ans_max = [`${ans_max}`,`${arrayOfString[i]}`]
            return ans_max
        }
    }
    return ans_max = [ans_max]
}
}
module.exports = getMaxLengthString
