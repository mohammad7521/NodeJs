process.argv[2]='fun'
const coding =process.argv[2];
//passing the variable as the second parameter to process.argv

console.log(`process.argv[2]:${process.argv[2]}`)
if(coding==='fun'){
    console.log('coding is fun')
}else{
    console.log(':/')
}
