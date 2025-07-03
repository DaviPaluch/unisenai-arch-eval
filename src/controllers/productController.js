import { ProductDTO } from "../dtos/productDTO.js";
import { ProductService } from "../services/productService.js";

class ProductController{
    constructor(){
        this.ProductService = new ProductService()
    }
    
    getAllProducts = async(req, res) =>{
        try{
            const listProducts = await this.ProductService.getAllProduct();
            res.status(200).json(listProducts.map((Product) => new ProductDTO(Product)));
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }

    createProduct = async (req, res)=>{
        try{
            const newProduct = await this.ProductService.createProduct(req.body);
            
            res.status(201).json({
                message: "Product Criado com sucesso",
                Product: new ProductDTO(newProduct),
            }
            )
        }
        catch(error){
            res.status(500).send(error.message)
        }
    
    };

    getProductById = async (req, res) =>{
        try{
            const ProductById = await this.ProductService.getProductById(req.params.id);
            if (!ProductById){
            return res.status(404).send("Product não encontrado")
            }
            res.status(200).json(new ProductDTO(ProductById))
            
        }
        catch(error){
            res.status(500).send(error.message)
        }
    };
    
    updateProduct = async(req, res) =>{
        try{
            const updateProduct = await this.ProductService.updateProduct(req.params.id, req.body, {
                new: true,
            });
            if (!updateProduct){
            return res.status(404).send("Produto não encontrado")
            }
            res.status(201).json({
                message: "Produto atualizado com sucesso",
                Products: new ProductDTO(updateProduct),
            }
            )
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }

    deleteProduct = async (req, res) =>{
        try{
            const deleteProduct = await this.ProductService.deleteProduct(req.params.id);
            if (!deleteProduct){
            return res.status(404).send("Product não encontrado")
            }
    
            res.status(200).json("Produto deletado")
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
    
    }


//export default ProductController;
export default new ProductController();