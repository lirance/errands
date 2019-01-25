package edu.oregonstate.errands.model;

public class UserOrder extends UserOrderKey {
    private Boolean rateflag = false;

    private Boolean ordermaker = true;

    private Float rate;

    public Boolean getRateflag() {
        return rateflag;
    }

    public void setRateflag(Boolean rateflag) {
        this.rateflag = rateflag;
    }

    public Boolean getOrdermaker() {
        return ordermaker;
    }

    public void setOrdermaker(Boolean ordermaker) {
        this.ordermaker = ordermaker;
    }

    public Float getRate() {
        return rate;
    }

    public void setRate(Float rate) {
        this.rate = rate;
    }
}