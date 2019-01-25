package edu.oregonstate.errands.model;

import java.util.List;

public class Order extends BaseModelObject {
    private Integer orderid;

    private List<String> itemlist;

    private String storeadd;

    private State state = State.ORDERED;

    private Integer timelimit;

    private Float tip;

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public List<String> getItemlist() {
        return itemlist;
    }

    public void setItemlist(List<String> itemlist) {
        this.itemlist = itemlist;
    }

    public String getStoreadd() {
        return storeadd;
    }

    public void setStoreadd(String storeadd) {
        this.storeadd = storeadd == null ? null : storeadd.trim();
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public Integer getTimelimit() {
        return timelimit;
    }

    public void setTimelimit(Integer timelimit) {
        this.timelimit = timelimit;
    }

    public Float getTip() {
        return tip;
    }

    public void setTip(Float tip) {
        this.tip = tip;
    }

}