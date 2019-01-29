package edu.oregonstate.errands.model;

import java.util.ArrayList;

public class Order extends BaseModelObject {
    private Integer orderid;

    private ArrayList<String> itemlist;

    private String storeadd;

    private String destination;

    private String state = State.ORDERED.toString();

    private Integer timelimit;

    private Float tip;

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public ArrayList<String> getItemlist() {
        return itemlist;
    }

    public void setItemlist(ArrayList<String> itemlist) {
        this.itemlist = itemlist;
    }

    public String getStoreadd() {
        return storeadd;
    }

    public void setStoreadd(String storeadd) {
        this.storeadd = storeadd == null ? null : storeadd.trim();
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination == null ? null : destination.trim();
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
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