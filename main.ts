var mains = [];
var num = 0;
function generate(array){
    mains[num] = array;
    num++;
}function readall(){
    return mains;
}function read(idno:number){
    return mains[idno];
} function reade(idno:string, name:string){
    return eval(`mains[${idno}].` + name);
}function change(idno:string, array){
    mains[idno] = array;
}function changee(idno:string, name:string, array:string){
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