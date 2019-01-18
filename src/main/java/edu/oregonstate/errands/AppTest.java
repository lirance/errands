package edu.oregonstate.errands;

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
public class AppTest extends SpringBootServletInitializer {

    public static void main( String[] args )
    {
        SpringApplication.run(AppTest.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        // TODO Auto-generated method stub
        return builder.sources(AppTest.class);
    }

}
