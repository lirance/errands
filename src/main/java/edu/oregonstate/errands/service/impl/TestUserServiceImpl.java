package edu.oregonstate.errands.service.impl;

import edu.oregonstate.errands.mapper.TestUserMapper;
import edu.oregonstate.errands.model.TestUser;
import edu.oregonstate.errands.service.TestUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-17
 * @description:
 **/

@Service
public class TestUserServiceImpl implements TestUserService {

    @Autowired
    private TestUserMapper testUserMapper;

    @Override
    public List<TestUser> findAllUser() {
        List<TestUser> testUsers = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            testUsers.add(testUserMapper.selectByPrimaryKey(i));
        }
        return testUsers;
    }
}
