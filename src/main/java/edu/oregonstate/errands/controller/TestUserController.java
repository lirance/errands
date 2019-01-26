package edu.oregonstate.errands.controller;

import edu.oregonstate.errands.model.User;
import edu.oregonstate.errands.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-17
 * @description:
 **/
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TestUserController {

    private final UserService testUserService;

    @Autowired
    public TestUserController(UserService testUserService) {
        this.testUserService = testUserService;
    }

    @RequestMapping("list")
    public List<User> list() {
        return testUserService.testGetTenUsers();
    }
}
