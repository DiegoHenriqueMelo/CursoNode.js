import connectToDatabase from "./database/data.js";

async function main() {

    // console.log(process.env.USERDATABASE);
    // console.log(process.env.PASSWORDDATABASE);

    await connectToDatabase("Kakashi", "Hatake");
    await connectToDatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE);
}

main();
