package io.thoughtware.hadess.starter.config;

import io.thoughtware.hadess.repository.service.InitializeSampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/*
 * 启动项目初始化示例制品库数据
 * */
@Component
@Order(10)
public class ZInitializeSample implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    InitializeSampleService sampleService;


    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        // 获取应用上下文
        ApplicationContext context = event.getApplicationContext();
        // 判断是否为根上下文
        if (context.getParent() == null) {
            // 在这里执行需要最后加载的操作，例如创建和初始化特定Bean
          //  sampleService.createSampleData();
        }
    }
}