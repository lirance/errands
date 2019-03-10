package edu.oregonstate.errands.service.impl;

import edu.oregonstate.errands.mapper.UserOrderMapper;
import edu.oregonstate.errands.model.UserOrder;
import edu.oregonstate.errands.model.UserOrderKey;
import edu.oregonstate.errands.service.UserOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-24
 * @description:
 **/

@Service
public class UserOrderServiceImpl implements UserOrderService {

    private final UserOrderMapper userOrderMapper;

    @Autowired
    public UserOrderServiceImpl(UserOrderMapper userOrderMapper) {
        this.userOrderMapper = userOrderMapper;
    }

    @Override
    public int insert(UserOrder record) {
        return userOrderMapper.insert(record);
    }

    @Override
    public UserOrder selectByPrimaryKey(UserOrderKey userOrderKey) {
        return userOrderMapper.selectByPrimaryKey(userOrderKey);
    }

    @Override
    public int updateByPrimaryKey(UserOrder object) {
        return userOrderMapper.updateByPrimaryKey(object);
    }

    @Override
    public int deleteByPrimaryKey(UserOrderKey userOrderKey) {
        return userOrderMapper.deleteByPrimaryKey(userOrderKey);
    }

    @Override
    public boolean getRateFlag(UserOrderKey userOrderKey) {
        return this.selectByPrimaryKey(userOrderKey).getRateflag();
    }

    @Override
    public boolean setRate(int orderId, int userId, float rate) {
        UserOrder userOrder = new UserOrder();
        userOrder.setOrderid(orderId);
        userOrder.setUserid(userId);
        userOrder.setRate(rate);
        userOrder.setRateflag(true);
        return userOrderMapper.rate(userOrder) == 1 && userOrderMapper.setRateFlag(userOrder) == 1;
    }

    @Override
    public UserOrder getRateUser(UserOrderKey userOrderKey) {
        return userOrderMapper.selectRate(userOrderKey);
    }

    @Override
    public Map<Integer, Integer> getOrderMakers() {
        List<UserOrder> userOrders = userOrderMapper.getAllOrderMakers();

        Map<Integer, Integer> resultMap = new HashMap<>();

        for (UserOrder uo : userOrders) {
            resultMap.put(uo.getOrderid(), uo.getUserid());
        }

        return resultMap;

    }

    @Override
    public List<UserOrder> getUsersByOrder(int orderId) {
        return userOrderMapper.getUsersByOrder(orderId);
    }

    @Override
    public List<UserOrder> getOrdersByMaker(int userid) {
        return userOrderMapper.getOrdersByUser(userid, true);
    }

    @Override
    public List<UserOrder> getOrdersByAccepter(int userid) {
        return userOrderMapper.getOrdersByUser(userid, false);
    }


}
