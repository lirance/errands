package edu.oregonstate.errands.controller;

import edu.oregonstate.errands.model.User;
import edu.oregonstate.errands.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-24
 * @description:
 **/

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/login")
    public boolean logIn(String phone, String password) {

        try {
            User user = userService.getUserByPhone(phone);
            password = String.valueOf(password.hashCode());
            return password.equals(user.getPassword());

        } catch (Exception e) {
            return false;
        }
    }

    @RequestMapping("/login/getId")
    public int logInGetId(String phone, String password) {

        try {
            User user = userService.getUserByPhone(phone);
            // hash password
            password = String.valueOf(password.hashCode());
            return password.equals(user.getPassword()) ? user.getUserid() : -1;
        } catch (Exception e) {
            return -1;
        }
    }

    @RequestMapping("/register")
    public boolean register(String username, String password, String phone, String address) {

        User user = new User();
        user.setUsername(username);
        // hash password
        user.setPassword(String.valueOf(password.hashCode()));
        user.setPhone(phone);
        user.setAddress(address);

        try {
            return userService.insert(user) == 1;
        } catch (Exception e) {
            return false;
        }

    }

    @RequestMapping("/registerU")
    public boolean register1(User user) {

        try {
            return userService.insert(user) == 1;
        } catch (Exception e) {
            return false;
        }

    }

    @RequestMapping("/getUserById")
    public User getUserById(int userid) {
        return userService.selectByPrimaryKey(userid);
    }

    @RequestMapping("/getUserByPhone")
    public User getUserByPhone(String phone) {
        return userService.getUserByPhone(phone);
    }
}
