package edu.oregonstate.errands.controller;

import edu.oregonstate.errands.model.Order;
import edu.oregonstate.errands.model.OrderShow;
import edu.oregonstate.errands.model.User;
import edu.oregonstate.errands.model.UserOrder;
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
        List<UserOrder> orders = userOrderService.getUsersByOrder(orderId);
        for (UserOrder o : orders) {
            User user = userService.selectByPrimaryKey(o.getUserid());
            if(o.getOrdermaker()){
                orderShow.setMaker(user);
            }else {
                orderShow.setRecipient(user);
            }
        }
        return orderShow;

    }
}
