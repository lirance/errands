package edu.oregonstate.errands.controller;

import edu.oregonstate.errands.model.TestUser;
import edu.oregonstate.errands.service.TestUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-17
 * @description:
 **/

@RestController
public class TestUserController {

    @Autowired
    private TestUserService testUserService;

    @RequestMapping("list")
    public List<TestUser> list() {
        List<TestUser> list = testUserService.findAllUser();
        return list;
    }
}
