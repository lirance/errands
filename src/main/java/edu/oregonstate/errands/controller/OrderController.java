package edu.oregonstate.errands.controller;

import edu.oregonstate.errands.model.*;
import edu.oregonstate.errands.service.OrderService;
import edu.oregonstate.errands.service.UserOrderService;
import edu.oregonstate.errands.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-24
 * @description:
 **/

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    private final UserOrderService userOrderService;
    private final OrderService orderService;
    private final UserService userService;

    @Autowired
    public OrderController(UserOrderService userOrderService, OrderService orderService, UserService userService) {
        this.userOrderService = userOrderService;
        this.orderService = orderService;
        this.userService = userService;
    }

    @RequestMapping("/create")
    public boolean createOrder(Order order, int userid) {

        UserOrder userOrder = new UserOrder();
//
//        order.setState(State.ORDERED);
        userOrder.setUserid(userid);

        try {
            // insert into the order table
            orderService.insert(order);
            if (order.getOrderid() != null) {
                // insert into the userOrder table
                userOrder.setOrderid(order.getOrderid());
                return userOrderService.insert(userOrder) == 1;
            }
        } catch (Exception e) {

            return false;
        }

        return false;

    }


    @RequestMapping("/accept")
    public boolean AcceptOrder(int orderId, int userId) {

        UserOrder userOrder = new UserOrder();
        userOrder.setOrderid(orderId);
        userOrder.setUserid(userId);
        // not order maker, order accepter
        userOrder.setOrdermaker(false);

        try {
            Order order = orderService.selectByPrimaryKey(orderId);

            if (!order.getState().equals(State.ORDERED.toString())) {
                return false;
            }

            // insert the user order
            if (userOrderService.insert(userOrder) != 1) {
                return false;
            }

            // update order state
            order.setState(State.ACCEPTED.toString());
            return orderService.updateByPrimaryKey(order) == 1;


        } catch (Exception e) {
            return false;
        }


    }

    @RequestMapping("/rate")
    public boolean RateOrder(int orderId, int userId, int rate) {
        UserOrderKey userOrderKey = new UserOrderKey();
        userOrderKey.setUserid(userId);
        userOrderKey.setOrderid(orderId);

        try {
            if (userOrderService.getRateFlag(userOrderKey)) {
                return false;
            }

            if (userOrderService.setRate(orderId, userId, rate)) {
                int rateUserId = userOrderService.getRateUser(userOrderKey).getUserid();
                User user = userService.selectByPrimaryKey(rateUserId);


                if (user.getAveragerate() == null) {
                    user.setAveragerate((float) rate);
                    user.setRatenumber(1);
                } else {
                    float avgRate = user.getAveragerate();
                    int rateNum = user.getRatenumber();
                    user.setAveragerate((avgRate * rateNum + rate) / (rateNum + 1));
                }
                return userService.updateByPrimaryKey(user) == 1;


            }
        } catch (Exception e) {
            return false;
        }

        return false;
    }
}