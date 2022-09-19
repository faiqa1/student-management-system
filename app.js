let students =[
    {id: 1, name: 'Faiqa', rollno:  11, phoneno: '03128451924'},
    {id: 2, name: 'Maham', rollno: 12, phoneno: '03328451924'},
    {id: 3, name: 'Fatima', rollno: 13, phoneno: '03128821924'},
    {id: 4, name: 'Laiba', rollno:  14, phoneno: '01248451924'},
    {id: 5, name: 'Ayesha', rollno: 15, phoneno: '0773451924'},
];

let express = require("express");
//let studentss = require("./students");
let app = express();
app.use(express.json());
app.use(function(req,res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST, OPTIONS , PUT, PATCH,DELTE , HEAD");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});
/*app.get("/test",function(req,res)
{
 res.json("Faiqa Doggy");
});*/

const port = 3500;
app.listen(port, () => console.log(`listening at port  ${port}!`) );


//GET API

app.get("/test/std", function (req, res) {
    res.json(students);
    
});

//POST API
app.post("/tst/students" ,function(req,res){
    let body = req.body;
    console.log(body);
    let maxid = students.reduce(
     (acc,curr) => (curr.id>=acc?curr.id:acc)  ,0

    );
    let newid = maxid+1;
    let newstd= {id:newid, ...body};
    students.push(newstd);
    res.send(newstd);

});
//PUT API
app.put("/tst/std/:id", function(req,res){
    let id = +req.params.id;
    let body= req.body;
    let index = students.findIndex((st)=> st.id ===id);
    let update= {id: id,...body};
    students[index] = update;
    res.send(update);
});

//DELETE API
app.delete("/tst/std/:id", function(req,res){
    let id = +req.params.id;
    let index = students.findIndex((st) => st.id ===id);
    let del = students.splice(index,1);
    res.send(del);
})






