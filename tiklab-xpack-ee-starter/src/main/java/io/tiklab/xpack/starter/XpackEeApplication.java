package io.tiklab.xpack.starter;

import io.tiklab.core.property.PropertyAndYamlSourceFactory;
import io.tiklab.xpack.starter.annotation.EnableXpackEe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.PropertySource;

/**
 * WorkbenchApplication
 */
@SpringBootApplication
@PropertySource(value = {"classpath:application.yaml" },factory = PropertyAndYamlSourceFactory.class )
@EnableXpackEe
@ServletComponentScan("io.tiklab.xpack")
public class XpackEeApplication {

    public static final Logger logger = LoggerFactory.getLogger(XpackEeApplication.class);

    public static void main(String[] args) {
        System.setProperty("org.apache.tomcat.util.buf.UDecoder.ALLOW_ENCODED_SLASH","true");
        SpringApplication.run(XpackEeApplication.class, args);
    }

}

