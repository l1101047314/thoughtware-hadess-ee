!/bin/bash
host=$host
port=$port
userName=$userName
password=$password
dbName=$dbName
schemaName=$schemaName
prePath=$prePath
backupsSqlUrl=$backupsSqlUrl

backupsCodeUrl=$backupsCodeUrl
sourceFilePath=$sourceFilePath
reduceUrl=$reduceUrl

mysql_bin=$pgsqlUrl
psql="${mysql_bin}/psql"


echo "用户名:"$userName
echo "密码:"$password
echo "host:"$host
echo "dbName:"$dbName
echo "schemaName:"$schemaName
echo "psql:"$psql
echo "删除schenam:"PGPASSWORD=${password} ${psql} -U ${userName} -d ${dbName} -h ${host} -p ${port} -c "DROP SCHEMA IF EXISTS ${schemaName} CASCADE;"
echo "创建schenam:"PGPASSWORD=${password} ${psql} -U ${userName} -h ${host} -p ${port} -d ${dbName} -c "CREATE schema  ${schemaName};"



PGPASSWORD=${password} ${psql} -U ${userName} -d ${dbName} -h ${host} -p ${port} -c "DROP SCHEMA IF EXISTS ${schemaName} CASCADE;"
PGPASSWORD=${password} ${psql} -U ${userName} -h ${host} -p ${port} -d ${dbName} -c "CREATE schema  ${schemaName};"


PGPASSWORD=${password} ${psql} -U ${userName} -h ${host} -p ${port} -d ${dbName}  -n ${schemaName}<${backupsSqlUrl}${dbName}.sql;







