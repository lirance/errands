package edu.oregonstate.errands.model;

public class UserOrder extends UserOrderKey {
    private Boolean rateflag;

    private Float rate;

    public Boolean getRateflag() {
        return rateflag;
    }

    public void setRateflag(Boolean rateflag) {
        this.rateflag = rateflag;
    }

    public Float getRate() {
        return rate;
    }

    public void setRate(Float rate) {
        this.rate = rate;
    }
}