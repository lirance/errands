package edu.oregonstate.errands.service;

import edu.oregonstate.errands.model.UserOrder;
import edu.oregonstate.errands.model.UserOrderKey;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-24
 * @description:
 **/

public interface UserOrderService extends BaseObjectService<UserOrder, UserOrderKey> {

    boolean getRateFlag(UserOrderKey userOrderKey);

    boolean setRate(int orderId, int userId, float rate);

    UserOrder getRateUser(UserOrderKey userOrderKey);
}
