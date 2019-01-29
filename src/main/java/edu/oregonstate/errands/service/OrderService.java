package edu.oregonstate.errands.service;

import edu.oregonstate.errands.model.Order;

import java.util.List;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-24
 * @description:
 **/

public interface OrderService extends BaseObjectService<Order, Integer> {

    List<Order> getAllNotAcceptedOrders();
}
