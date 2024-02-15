import asyncHandler from '../middleware/asyncHandler.js'
import Order from '../models/orderModel.js'

//desc Create new order
//route Post / api/orders
//access Private
const addOrderItems = asyncHandler(async (req,res) => {
    res.send('create order')
})
//desc Get logged in user orders
//route Get /api/orders/myorders
//access Private
const getMyOrder = asyncHandler(async (req,res) => {
    res.send('get loggen in user orders')
})
//desc Get ORDER BY ID
//route Get /api/orders/myorders
//access Private
const getOrderById = asyncHandler(async (req,res) => {
    res.send('get order by Id')
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