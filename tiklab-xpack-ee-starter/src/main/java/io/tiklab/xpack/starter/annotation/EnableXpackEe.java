package io.tiklab.xpack.starter.annotation;

import io.tiklab.xpack.starter.config.XpackEeAutoConfiguration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Import({XpackEeAutoConfiguration.class})
public @interface EnableXpackEe {
}
