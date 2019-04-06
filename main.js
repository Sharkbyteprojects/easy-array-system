var mains = [];
var num = 0;
function generate(array){
    mains[num] = array;
    num++;
}function readall(){
    return mains;
}function read(idno){
    return mains[idno];
} function reade(idno, name){
    return eval(`mains[${idno}].` + name);
}function change(idno, array){
    mains[idno] = array;
}function changee(idno, name, array){
    eval(`mains[${idno}].${name} = ${array}`)
}
module.exports = {
    generate,
    readall,
    read,
    reade,
    change,
    changee,
};