package edu.oregonstate.errands.service.impl;

import edu.oregonstate.errands.mapper.OrderMapper;
import edu.oregonstate.errands.model.Order;
import edu.oregonstate.errands.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-24
 * @description:
 **/

@Service
public class OderServiceImpl implements OrderService {


    private final OrderMapper orderMapper;

    @Autowired
    public OderServiceImpl(OrderMapper orderMapper) {
        this.orderMapper = orderMapper;
    }

    @Override
    public int insert(Order record) {
        return orderMapper.insert(record);
    }

    @Override
    public Order selectByPrimaryKey(Integer integer) {
        return orderMapper.selectByPrimaryKey(integer);
    }

    @Override
    public int updateByPrimaryKey(Order object) {
        return orderMapper.updateByPrimaryKey(object);
    }

    @Override
    public int deleteByPrimaryKey(Integer integer) {
        return orderMapper.deleteByPrimaryKey(integer);
    }

    @Override
    public List<Order> getAllNotAcceptedOrders() {
        return orderMapper.getAllNotAcceptedOrders();
    }
}
