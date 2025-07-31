const mongoose=require('mongoose')


const connectdb = ()=>{
return mongoose.connect(process.env.MONGODB_LIVE)
.then(()=>{
    console.log('connecting successfully')
}).catch((err)=>{
console.log(err)
})
}
module.exports=connectdb