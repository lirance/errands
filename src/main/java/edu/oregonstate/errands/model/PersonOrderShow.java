package edu.oregonstate.errands.model;

/**
 * @author: Chendi Zhang
 * @date: 2019-03-09
 * @description:
 **/

public class PersonOrderShow extends OrderShow {

    private boolean isRated;

    public boolean isRated() {
        return isRated;
    }

    public void setRated(boolean rated) {
        isRated = rated;
    }


    public PersonOrderShow(Order order) {
        this.setState(order.getState());
        this.setDestination(order.getDestination());
        this.setItemlist(order.getItemlist());
        this.setOrderid(order.getOrderid());
        this.setStoreadd(order.getStoreadd());
        this.setTimelimit(order.getTimelimit());
        this.setTip(order.getTip());
    }

    public PersonOrderShow(OrderShow order) {
        this.setState(order.getState());
        this.setDestination(order.getDestination());
        this.setItemlist(order.getItemlist());
        this.setOrderid(order.getOrderid());
        this.setStoreadd(order.getStoreadd());
        this.setTimelimit(order.getTimelimit());
        this.setTip(order.getTip());
        this.setMaker(order.getMaker());
        this.setRecipient(order.getRecipient());
    }

}
