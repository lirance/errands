package edu.oregonstate.errands.controller;

import edu.oregonstate.errands.model.*;
import edu.oregonstate.errands.service.OrderService;
import edu.oregonstate.errands.service.UserOrderService;
import edu.oregonstate.errands.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-24
 * @description:
 **/

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "*")
public class PersonalOrderController {

    private final UserOrderService userOrderService;
    private final OrderService orderService;
    private final UserService userService;

    @Autowired
    public PersonalOrderController(UserOrderService userOrderService, OrderService orderService, UserService userService) {
        this.userOrderService = userOrderService;
        this.orderService = orderService;
        this.userService = userService;
    }

    @RequestMapping("/create")
    public boolean createOrder(@RequestParam(value = "itemlist", required = true) List<String> itemlist, String storeadd, String destination, int timelimit, float tip, int userid) {

        UserOrder userOrder = new UserOrder();
        Order order = new Order();

        userOrder.setUserid(userid);
        order.setItemlist(itemlist);
        order.setStoreadd(storeadd);
        order.setDestination(destination);
        order.setTimelimit(timelimit);
        order.setTip(tip);

        if (itemlist == null || storeadd == null) {
            return false;
        }


        try {

            if (order.getDestination() == null || order.getDestination().isEmpty()) {
                String destinationNew = userService.selectByPrimaryKey(userid).getAddress();
                order.setDestination(destinationNew);
            }
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

    @RequestMapping("/delete")
    public boolean deleteOrder(int orderId, int userId) {

        try {
            Order order = orderService.selectByPrimaryKey(orderId);
            if (!order.getState().equals(State.ORDERED.toString())) {
                return false;
            }

            UserOrderKey userOrderKey = new UserOrderKey();
            userOrderKey.setUserid(userId);
            userOrderKey.setOrderid(orderId);

            UserOrder userOrder = userOrderService.selectByPrimaryKey(userOrderKey);
            if (userOrder == null || !userOrder.getOrdermaker()) {
                return false;
            }

            // delete user order
            if (userOrderService.deleteByPrimaryKey(userOrderKey) != 1) {
                return false;
            }
            //delete order
            return orderService.deleteByPrimaryKey(orderId) == 1;
        } catch (Exception e) {
            return false;
        }

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

    @RequestMapping("/cancel")
    public boolean cancelOrder(int orderId, int userId) {

        try {
            Order order = orderService.selectByPrimaryKey(orderId);

            if (!order.getState().equals(State.ACCEPTED.toString())) {
                return false;
            }

            UserOrderKey userOrderKey = new UserOrderKey();
            userOrderKey.setOrderid(orderId);
            userOrderKey.setUserid(userId);
            if (userOrderService.deleteByPrimaryKey(userOrderKey) != 1) {
                return false;
            }
            order.setState(State.ORDERED.toString());
            return (orderService.updateByPrimaryKey(order) == 1);

        } catch (Exception e) {
            return false;
        }

    }

    @RequestMapping("/complete")
    public boolean completeOrder(int orderId, int userId) {
        UserOrderKey userOrderKey = new UserOrderKey();
        userOrderKey.setUserid(userId);
        userOrderKey.setOrderid(orderId);

        try {
            if (userOrderService.selectByPrimaryKey(userOrderKey) == null) {
                return false;
            }

            Order order = orderService.selectByPrimaryKey(orderId);

            // the order is already been accepted
            if (!State.ACCEPTED.toString().equals(order.getState())) {
                return false;
            }

            order.setState(State.COMPLETED.toString());
            orderService.updateByPrimaryKey(order);
            return true;

        } catch (Exception e) {
            return false;
        }

    }

    @RequestMapping("/rate")
    public boolean RateOrder(int orderId, int userId, float rate) {
        UserOrderKey userOrderKey = new UserOrderKey();
        userOrderKey.setUserid(userId);
        userOrderKey.setOrderid(orderId);

        try {
            // the order status is not completed.
            if (!(State.COMPLETED.toString()).equals(orderService.selectByPrimaryKey(orderId).getState())) {
                return false;
            }

            // the user is already rate the order
            if (userOrderService.getRateFlag(userOrderKey)) {
                return false;
            }

            if (userOrderService.setRate(orderId, userId, rate)) {
                int rateUserId = userOrderService.getRateUser(userOrderKey).getUserid();
                User user = userService.selectByPrimaryKey(rateUserId);


                if (user.getAveragerate() == null) {
                    user.setAveragerate(rate);
                    user.setRatenumber(user.getRatenumber() + 1);
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
