import app from './app.js';

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello</h1>");
// });

app.listen(process.env.PORT,()=>{
    console.log(`Listening to port ${process.env.PORT}`);
})