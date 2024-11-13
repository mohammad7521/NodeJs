

//extracting only request from the http module
const {request}=require('http');




const req=request('http://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`data chunk ${chunk}`)
    })
    res.on('end',()=>{
        console.log('no more data')
    })
})

req.end();




//we can also run it with https module
const https=require('https');
//rest of the code


