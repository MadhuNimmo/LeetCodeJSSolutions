/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    var out = 0
    var boxes = 0
    var item =0
    boxTypes = boxTypes.sort(function(a,b) {return b[1]-a[1]})
    while(truckSize>0 && item<boxTypes.length){
        if(boxTypes[item][0]<truckSize){
            boxes = boxTypes[item][0]
        }else{
            boxes = truckSize
        }
        out = out + (boxes * boxTypes[item][1])
        truckSize = truckSize - boxes
        item = item + 1
    }
    return out
};
