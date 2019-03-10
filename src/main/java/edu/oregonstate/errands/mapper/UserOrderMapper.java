package edu.oregonstate.errands.mapper;

import edu.oregonstate.errands.model.UserOrder;
import edu.oregonstate.errands.model.UserOrderKey;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserOrderMapper {
    int deleteByPrimaryKey(UserOrderKey key);

    int insert(UserOrder record);

    int insertSelective(UserOrder record);

    UserOrder selectByPrimaryKey(UserOrderKey key);

    int updateByPrimaryKeySelective(UserOrder record);

    int updateByPrimaryKey(UserOrder record);

    int rate(UserOrder record);

    int setRateFlag(UserOrder record);

    UserOrder selectRate(UserOrderKey key);

    List<UserOrder> getAllOrderMakers();

    List<UserOrder> getUsersByOrder(int orderid);

    List<UserOrder> getOrdersByUser(int userid, boolean orderMaker);
}