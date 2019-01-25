package edu.oregonstate.errands.mapper;

import edu.oregonstate.errands.model.UserOrder;
import edu.oregonstate.errands.model.UserOrderKey;

public interface UserOrderMapper {
    int deleteByPrimaryKey(UserOrderKey key);

    int insert(UserOrder record);

    int insertSelective(UserOrder record);

    UserOrder selectByPrimaryKey(UserOrderKey key);

    int updateByPrimaryKeySelective(UserOrder record);

    int updateByPrimaryKey(UserOrder record);
}