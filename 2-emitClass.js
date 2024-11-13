const EventEmitter=require('events');

const celebrity=new EventEmitter();

// subscribe to celebrity for observer1
celebrity.on('race',(result)=>{

    if(result==='win')
    console.log('congrats! you are the best')

    else{
        console.log('try again next time')
    }
})

// subscribe to celebrity for observer2
celebrity.on('race',(result)=>{
    if(result==='win')
    console.log('i am better than you');
    else{
        console.log('hahahahaha')
    }
})


//celebrity winning
celebrity.emit('race','win')


//celebrity losing
celebrity.emit('race','lose')
//because the process is an instance of the 
//event emitter we can use the on with it
process.on('exit',(code)=>{
    console.log('prcess exit with event code:',code)
})