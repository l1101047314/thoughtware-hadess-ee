package io.thoughtware.hadess.starter.annotation;

import io.thoughtware.hadess.starter.config.HadessEeAutoConfiguration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Import({HadessEeAutoConfiguration.class})
public @interface EnableHadessEe {
}
