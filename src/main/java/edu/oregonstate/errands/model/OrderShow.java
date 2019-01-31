package edu.oregonstate.errands.model;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-28
 * @description:
 **/

public class OrderShow extends Order {

    private User maker;


    private User recipient;

    public OrderShow(Order order) {
        this.setState(order.getState());
        this.setDestination(order.getDestination());
        this.setItemlist(order.getItemlist());
        this.setOrderid(order.getOrderid());
        this.setStoreadd(order.getStoreadd());
        this.setTimelimit(order.getTimelimit());
        this.setTip(order.getTip());
    }

    public OrderShow() {
    }

    public User getMaker() {
        return maker;
    }

    public void setMaker(User maker) {
        this.maker = maker;
    }


    public User getRecipient() {
        return recipient;
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
    }
}
