/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var out = s.trimStart();
    var limit = Math.pow(2,31)
    out = parseInt(out)
    if(isNaN(out)){
        return 0;
    }else{
        if(out>=-limit && out<=limit-1){
            return out;
        }else if(out<-limit){
            return -limit
        }else{
            return limit-1
        }
    }
};
