package net.tiklab.xapck.config;


import net.tiklab.eam.author.Authenticator;
import net.tiklab.eam.client.author.AuthorHandler;
import net.tiklab.eam.client.author.config.IgnoreConfig;
import net.tiklab.eam.client.author.config.IgnoreConfigBuilder;
import net.tiklab.gateway.GatewayFilter;
import net.tiklab.gateway.router.RouterHandler;
import net.tiklab.gateway.router.config.RouterConfig;
import net.tiklab.gateway.router.config.RouterConfigBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayFilterAutoConfiguration {


    @Bean
    GatewayFilter gatewayFilter(RouterHandler routerHandler, AuthorHandler authorHandler){
        return new GatewayFilter()
                .setRouterHandler(routerHandler)
                .addHandler(authorHandler);
    }

    //认证handler
    @Bean
    AuthorHandler authorHandler(Authenticator authenticator, IgnoreConfig ignoreConfig){
        return new AuthorHandler()
                .setAuthenticator(authenticator)
                .setIgnoreConfig(ignoreConfig);

    }

    @Bean
    RouterHandler routerHandler(RouterConfig routerConfig){
        return new RouterHandler()
                .setRouterConfig(routerConfig);
    }

    @Bean
    public IgnoreConfig ignoreConfig(){
        return IgnoreConfigBuilder.instance()
                .ignoreTypes(new String[]{
                        ".ico",
                        ".jpg",
                        ".jpeg",
                        ".png",
                        ".gif",
                        ".html",
                        ".js",
                        ".css",
                        ".json",
                        ".xml",
                        ".ftl",
                })
                .ignoreUrls(new String[]{
                        "/",
                        "/note/vaildSmsCode",
                        "/note/sendSmsCode",
                        "/dfs/upload",
                        "/uploadFile/ftpUpload",

                        "/message/mailcfg/config",
                        "/message/messageSendType/findMessageSendTypePage",
                        "/message/messageSendType/createMessageSendType",
                        "/message/messageTemplate/findMessageTemplateList",
                        "/passport/member/authCodeLogin",
                        "/passport/member/logout",
                        "/passport/member/valid",
                        "/passport/ent/user/login",
                        "/visit/addVisit",
                        "/ram/passport/login",
                        "/passport/login",
                        "/ram/passport/logout",
                        "/ram/passport/valid",
                        "/passport/third/login",
                        "/third/passport/logout",
                        "/third/passport/valid",
                        "/artifact/findNewArtifactPage",
                        "/sockjs-node/info",
                        "/eam/auth/login",
                        "/libraryFile/tag",

                })
                .ignorePreUrls(new String[]{
                        "/service",
                        "/api/list",
                        "/api/detail",
                        "/file",
                        "/image",
                        "/plugin",
                        "/authConfig",
                        "/services",
                        "/repository",
                        "/library",


                })
                .get();
    }


    //路由转发配置
    @Value("${eas.address:null}")
    String authUrl;


    @Value("${eas.embbed.enable}")
    Boolean enableEam;


    //gateway路由配置
    @Bean
    RouterConfig routerConfig(){
        String[] s = {
               /* "/user",
                "/message",
                "/oplog",*/
                "/todo"
        };

        if (!enableEam){

            s = new String[]{};
        }

        return RouterConfigBuilder.instance()
                .preRoute(s, authUrl)
                .get();
    }
}
