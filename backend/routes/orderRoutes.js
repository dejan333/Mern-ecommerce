import express from 'express'

const orderRoutes = express.Router();
import {
    addOrderItems,getMyOrder,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders,
} from '../controllers/orderController.js'
import {protect, admin} from '../middleware/authMiddleware.js'

orderRoutes
    .route('/')
    .post(protect,addOrderItems)
    .get(protect, admin, getOrders);
orderRoutes.route('/mine').get(protect, getMyOrder)    
orderRoutes.route('/:id').get(protect, getOrderById)    
orderRoutes.route('/:id/pay').put(protect, updateOrderToPaid)    
orderRoutes.route('/:id/deliver').put(protect, updateOrderToDelivered)    
export default orderRoutes;