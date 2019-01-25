package edu.oregonstate.errands.service;

import edu.oregonstate.errands.model.User;

import java.util.List;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-24
 * @description:
 **/

public interface UserService extends BaseObjectService<User, Integer> {

    List<User> testGetTenUsers();

    User getUserByPhone(String phone);
}
