const cors=require('cors');
const express=require('express');
const app=express();
app.use (cors());
app.use(express.json());
const PORT=5000;
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
const server=app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});