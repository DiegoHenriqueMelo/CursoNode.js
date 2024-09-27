async function connectToDatabase(user, password) { 
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log("Database connected");
    }else{
        console.log("Database not connected");
    }
}
export default connectToDatabase;
