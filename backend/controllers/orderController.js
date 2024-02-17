import asyncHandler from '../middleware/asyncHandler.js'
import Order from '../models/orderModel.js'

//desc Create new order
//route Post / api/orders
//access Private
const addOrderItems = asyncHandler(async (req,res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;
    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
    }else{
        const order = new Order({
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
       
        const createOrder = await order.save();
        
        res.status(201).json(createOrder)
    }
   
})
//desc Get logged in user orders
//route Get /api/orders/myorders
//access Private
const getMyOrder = asyncHandler(async (req,res) => {
    const orders = Order.find({user: req.user._id})
    res.json(orders)
})
//desc Get ORDER BY ID
//route Get /api/orders/myorders
//access Private
const getOrderById = asyncHandler(async (req,res) => {
    const order = Order.findById(req.params.id).populate('user', 'name email')

    if(order){
        res.json(order)
    }else {
        res.status(400)
        throw new Error('Order not found')
    }
})

//desc  update order do paid
//route Get /api/orders/:id/pay
//access Private/
const updateOrderToPaid = asyncHandler(async (req,res) => {
    res.send('update order to paid')
})
//desc  update order do delivered
//route Get /api/orders/:id/delivered
//access Private/Admion
const updateOrderToDelivered = asyncHandler(async (req,res) => {
    res.send('update order to delevered')
})
//desc  Get All orders
//route Get /api/orders/
//access Private/Admion
const getOrders = asyncHandler(async (req,res) => {
    res.send('Get All orders')
})

export{
    addOrderItems,
    getMyOrder,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
}