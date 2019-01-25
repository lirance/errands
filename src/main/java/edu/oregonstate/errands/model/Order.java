package edu.oregonstate.errands.model;

public class Order extends BaseModelObject {
    private Integer orderid;

    private String itemlist;

    private String storeadd;

    private String state;

    private Integer timelimit;

    private Float tip;

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public String getItemlist() {
        return itemlist;
    }

    public void setItemlist(String itemlist) {
        this.itemlist = itemlist == null ? null : itemlist.trim();
    }

    public String getStoreadd() {
        return storeadd;
    }

    public void setStoreadd(String storeadd) {
        this.storeadd = storeadd == null ? null : storeadd.trim();
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state == null ? null : state.trim();
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