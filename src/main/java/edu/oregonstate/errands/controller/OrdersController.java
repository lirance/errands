package edu.oregonstate.errands.controller;

import edu.oregonstate.errands.model.*;
import edu.oregonstate.errands.service.OrderService;
import edu.oregonstate.errands.service.UserOrderService;
import edu.oregonstate.errands.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-28
 * @description:
 **/

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrdersController {

    private final UserOrderService userOrderService;
    private final OrderService orderService;
    private final UserService userService;

    @Autowired
    public OrdersController(UserOrderService userOrderService, OrderService orderService, UserService userService) {
        this.userOrderService = userOrderService;
        this.orderService = orderService;
        this.userService = userService;
    }

    @RequestMapping("/getOrders")
    public List<OrderShow> getAllNotAcceptedOrders() {

        List<OrderShow> orderShowList = new ArrayList<>();

        try {

            List<Order> orders = orderService.getAllNotAcceptedOrders();
            Map<Integer, Integer> userOrders = userOrderService.getOrderMakers();

            for (Order order : orders) {
                OrderShow os = new OrderShow(order);
                User maker = userService.selectByPrimaryKey(userOrders.get(os.getOrderid()));
                maker.setPassword(null);
                os.setMaker(maker);
                orderShowList.add(os);
            }
        } catch (Exception e) {
            return orderShowList;
        }

        return orderShowList;

    }

    @RequestMapping("/getOrderDetailById")
    public OrderShow getOrderDetail(int orderId) {

        Order order = orderService.selectByPrimaryKey(orderId);
        OrderShow orderShow = new OrderShow(order);
        setOrderUsers(orderId, orderShow);
        return orderShow;

    }


    @RequestMapping("/getCreateOrder")
    public List<PersonOrderShow> getCreateOrderCR(int userId) {
        List<PersonOrderShow> orderShowList = new ArrayList<>();

        try {
            List<UserOrder> userOrders = userOrderService.getOrdersByMaker(userId);

            for (UserOrder uo : userOrders) {
                PersonOrderShow orderShow = new PersonOrderShow(getOrderDetail(uo.getOrderid()));
                orderShow.setRated(uo.getRateflag());
                orderShowList.add(orderShow);
            }

        } catch (Exception e) {
            return null;
        }
        return orderShowList;

    }

    @RequestMapping("/getAcceptedOrder")
    public List<PersonOrderShow> getAcceptedOrder(int userId) {
        List<PersonOrderShow> orderShowList = new ArrayList<>();

        try {
            List<UserOrder> userOrders = userOrderService.getOrdersByAccepter(userId);

            for (UserOrder uo : userOrders) {
                PersonOrderShow orderShow = new PersonOrderShow(getOrderDetail(uo.getOrderid()));
                orderShow.setRated(uo.getRateflag());
                orderShowList.add(orderShow);
            }

        } catch (Exception e) {
            return null;
        }
        return orderShowList;

    }


    private void setOrderUsers(int orderId, OrderShow orderShow) {
        List<UserOrder> orders = userOrderService.getUsersByOrder(orderId);
        for (UserOrder o : orders) {
            User user = userService.selectByPrimaryKey(o.getUserid());
            if (o.getOrdermaker()) {
                orderShow.setMaker(user);
            } else {
                orderShow.setRecipient(user);
            }
        }
    }
}
