package edu.oregonstate.errands;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * @author: Chendi Zhang
 * @date: 1/15/19
 * @description:
 **/

@SpringBootApplication
@MapperScan("edu.oregonstate.errands.mapper")
public class ErrandsApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(ErrandsApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        // TODO Auto-generated method stub
        return builder.sources(ErrandsApplication.class);
    }

}
