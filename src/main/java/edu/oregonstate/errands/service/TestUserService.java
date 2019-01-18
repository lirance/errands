package edu.oregonstate.errands.service;

import edu.oregonstate.errands.model.TestUser;

import java.util.List;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-17
 * @description:
 **/

public interface TestUserService {
    public List<TestUser> findAllUser();
}
