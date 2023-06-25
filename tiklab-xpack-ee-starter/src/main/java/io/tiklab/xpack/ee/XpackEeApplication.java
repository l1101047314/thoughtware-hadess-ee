package io.tiklab.xpack.ee;

import io.tiklab.core.property.PropertyAndYamlSourceFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

/**
 * WorkbenchApplication
 */
@SpringBootApplication
@PropertySource(value = {"classpath:application.yaml" },factory = PropertyAndYamlSourceFactory.class )
@EnableXpackEe
public class XpackEeApplication {

    public static final Logger logger = LoggerFactory.getLogger(XpackEeApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(XpackEeApplication.class, args);
    }

}

