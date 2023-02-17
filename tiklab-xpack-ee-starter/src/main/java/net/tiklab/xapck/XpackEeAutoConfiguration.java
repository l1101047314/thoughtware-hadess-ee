package net.tiklab.xapck;


import net.tiklab.dal.starter.annotation.EnableDal;
import net.tiklab.dcs.starter.EnableDcs;
import net.tiklab.dfs.starter.EnableDfs;
import net.tiklab.dsm.starter.annotation.EnableDsm;
import net.tiklab.dss.starter.EnableDss;
import net.tiklab.eam.starter.EnableEam;
import net.tiklab.integration.starter.EnableIntegration;
import net.tiklab.licence.starter.EnableLicenceServer;
import net.tiklab.logging.stater.EnableLog;
import net.tiklab.message.starter.EnableMessage;
import net.tiklab.mysql.starter.EnableMysql;
import net.tiklab.privilege.stater.EnablePrivilegeServer;
import net.tiklab.rpc.starter.annotation.EnableRpc;
import net.tiklab.tks.annotation.EnableTks;
import net.tiklab.user.starter.EnableUser;
import net.tiklab.web.starter.annotation.EnableWeb;
import net.tiklab.xpack.annotation.EnableXpackServer;
import org.springframework.context.annotation.Configuration;

/**
 * XpackServerAutoConfiguration
 */
@Configuration
//common
@EnableTks
@EnableWeb
@EnableMysql
@EnableDal
@EnableDss
@EnableDfs
@EnableDcs
@EnableDsm
@EnableRpc

//eam
@EnableEam
@EnableLog
@EnableIntegration
@EnableLicenceServer
@EnableUser
@EnablePrivilegeServer
@EnableMessage
//ocs
@EnableXpackServer
public class XpackEeAutoConfiguration {
}

