import mongoose from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log('MongoDB connected succefully, DBConfig');
        })
        connection.on('error', (err)=>{
            console.log('MongoDB connected error, Please make sure MongoDB is running, DBConfig. ' + err);
            process.exit();
        })

    } catch(error){
        console.log("Some error in DBConfig")

    }
}

