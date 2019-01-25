package edu.oregonstate.errands.model;

public class User extends BaseModelObject {
    private Integer userid;

    private String username;

    private String password;

    private String phone;

    private String address;

    private Integer ratenumber = 0;

    private Float averagerate;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public Integer getRatenumber() {
        return ratenumber;
    }

    public void setRatenumber(Integer ratenumber) {
        this.ratenumber = ratenumber;
    }

    public Float getAveragerate() {
        return averagerate;
    }

    public void setAveragerate(Float averagerate) {
        this.averagerate = averagerate;
    }
}