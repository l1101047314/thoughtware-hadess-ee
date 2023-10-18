!/bin/bash
host=$host
port=$port
userName=$userName
password=$password
dbName=$dbName
schemaName=$schemaName
backupsUrl=$backupsUrl


backupsCodeUrl=$backupsCodeUrl
sourceFilePath=$sourceFilePath
reduceName=$reduceName
length=$length

mysql_bin=$pgsqlUrl
pg_dump="${mysql_bin}/pg_dump"

echo "用户名:"$userName
echo "密码:"$password
echo "host:"$host
echo "dbName:"$dbName
echo "schemaName:"$schemaName
echo "pg_dump:"$pg_dump
echo "备份地址:"$backupsUrl


echo "备份命令：" PGPASSWORD=${password} ${pg_dump} -U ${userName} -h ${host} -p ${port} -d ${dbName} -n ${schemaName}>${backupsUrl}/${dbName}.sql


PGPASSWORD=${password} ${pg_dump} -U ${userName} -h ${host} -p ${port} -d ${dbName} -n ${schemaName}>${backupsUrl}/${dbName}.sql


echo "执行dump完成"






