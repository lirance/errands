package edu.oregonstate.errands.model;

import com.alibaba.fastjson.JSON;

import java.io.Serializable;

/**
 * @author: Chendi Zhang
 * @date:
 * @description:
 **/

public abstract class BaseModelObject implements Serializable {

    @Override
    public String toString() {
        return JSON.toJSONString(this);
    }

    @Override
    public boolean equals(Object obj) {

        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        BaseModelObject baseModelObject = (BaseModelObject) obj;
        return (this.toString()).equals(baseModelObject.toString());
    }

    @Override
    public int hashCode() {
        return this.toString().hashCode();

    }
}
