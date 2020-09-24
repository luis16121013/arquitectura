const store = require('./store');

function addMessage(user,message){
    return new Promise((resolve,reject)=>{
        if(!message || !(Number.isInteger(user))) reject('information invalue');
        const msg = {
            user,
            message,
            date: new Date()
        }
        store.add(msg);
        resolve(msg)
    });
}
function getMessages(){
    return new Promise((resolve,reject)=>{
        resolve(store.list())
    });
}
module.exports = {
    addMessage,
    getMessages
}