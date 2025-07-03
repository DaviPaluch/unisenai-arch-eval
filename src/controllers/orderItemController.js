import { OrderItemDTO } from "../dtos/orderItemDTO.js";
import { OrderItemService } from "../services/orderItemService.js";

class OrderItemController{
    constructor(){
        this.OrderItemService = new OrderItemService()
    }
    
    getAllOrderItems = async(req, res) =>{
        try{
            const listOrderItems = await this.OrderItemService.getAllOrderItem();
            res.status(200).json(listOrderItems.map((OrderItem) => new OrderItemDTO(OrderItem)));
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }

    createOrderItem = async (req, res)=>{
        try{
            const newOrderItem = await this.OrderItemService.createOrderItem(req.body);
            
            res.status(201).json({
                message: "Item do pedido criado com sucesso",
                OrderItem: new OrderItemDTO(newOrderItem),
            }
            )
        }
        catch(error){
            res.status(500).send(error.message)
        }
    
    };

    getOrderItemById = async (req, res) =>{
        try{
            const OrderItemById = await this.OrderItemService.getOrderItemById(req.params.id);
            if (!OrderItemById){
            return res.status(404).send("Item do pedido não encontrado")
            }
            res.status(200).json(new OrderItemDTO(OrderItemById))
            
        }
        catch(error){
            res.status(500).send(error.message)
        }
    };
    
    updateOrderItem = async(req, res) =>{
        try{
            const updateOrderItem = await this.OrderItemService.updateOrderItem(req.params.id, req.body, {
                new: true,
            });
            if (!updateOrderItem){
            return res.status(404).send("Item do pedido não encontrado")
            }
            res.status(201).json({
                message: "Item do pedido atualizado com sucesso",
                OrderItems: new OrderItemDTO(updateOrderItem),
            }
            )
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }

    deleteOrderItem = async (req, res) =>{
        try{
            const deleteOrderItem = await this.OrderItemService.deleteOrderItem(req.params.id);
            if (!deleteOrderItem){
            return res.status(404).send("Item do pedido não encontrado")
            }
    
            res.status(200).json("Item do pedido deletado")
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
    
    }


//export default OrderItemController;
export default new OrderItemController();