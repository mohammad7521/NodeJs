const axios=require('axios');


//axios is promise based 
//therefore we can use then
//instead of callback function
axios.get('https://google.com',)
    .then((res)=>{ 
        console.log(res);
    })
    .catch((err)=>{
        console.log(err)
    })
    .then(()=>{
        console.log('all done')
    })


    