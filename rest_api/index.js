const express = require('express');
const app = express();
const Joi = require('joi');

const { v4: uuidv4 } = require('uuid');
app.use(express.json());






app.get('/', (req, res)=>{
    res.send("<h1>hello</h1>");
});





//show list of products
let products = [
    {
        id: '1',
        name: "Mango",
        price: 120,
    },
    {
        id: '2',
        name: "banana",
        price: 150,
    }
];
app.get('/api/products',(req, res)=>{
    res.json(products);
} );
///////////////////////////////////////////




//show a specific product

app.get("/api/products/:id",(req, res)=>{
    const id = req.params.id;
    const product = products.find((p)=> p.id===id);
    
    if(product){
        return res.send(product);
    }
    else
    {
        return res.status(404).json({
            error : "product not found"
        });
    }
    
});
///////////////////////////////////////////





//Insert a product(post) with validation

app.post("/api/products",(req, res)=>{

    const {error} = validation(req.body);//validation() is a function

    if (error){
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    const product={
        id: uuidv4(),
        name: req.body.name,
        price: req.body.price,
    };
    
    products.push(product);
    return res.json(product);
});
///////////////////////////////////////////




//Update a specific product (PUT)
app.put("/api/products/:id", (req, res)=>{


    const {error} = validation(req.body);//validation() is a function

    if (error){
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    const index = products.findIndex(p=> p.id===req.params.id);
    if(index === -1){
        return res.status(404).json({
            message: 'ID not found'
        });
    }

    products[index].name = req.body.name;
    products[index].price = req.body.price;

    return res.json({
        product: products[index]
    });
});
///////////////////////////////////////////








///Delete a specific product (DELETE)

app.delete("/api/products/:id", (req, res) => {
    const product = products.find( p => p.id === req.params.id );

    if(!product){
       return res.status(404).json({
            message: "Product Not found using ID"

       });
    }

    const index = products.findIndex( p => p.id === req.params.id);
    products.splice(index, 1); //1 holo index hote kotota item delete korbo. ekhaneb ekta delete kora hobe tai 1 use hoise
    return res.json(product);
});
//////////////////////////////////////////////////////










///Delete all products (DELETE)

app.delete("/api/products", (req, res) => {

   
    products.splice(0); //0 holo 0 to last index porjonto sob product delete er jonno. Orthat sob delete howea jabe
    return res.json(products);
});
//////////////////////////////////////////////////////











//validation function
function validation(body){
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        price: Joi.number().required()
    });
    
  return schema.validate(body);
    
}
///////////////////////////////////////////













//Update a specific product (PATCH)
app.patch("/api/products/:id", (req, res)=>{

    const index = products.findIndex(p=> p.id===req.params.id);

    if(index=== -1){
        return res.status(404).json({
            message: "Product not found with the id"
        });
       
    }

    let updatedProduct = {
        ...products[index],
        ...req.body
    }

    products[index]=updatedProduct;
    return res.json(updatedProduct);

});






//Port
let port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Farhan\nFarhan\nServer is running at port ${port}`));