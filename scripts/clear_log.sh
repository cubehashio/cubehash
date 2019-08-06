# crontab task

*/13 * * * * rm -f /root/work/output/cbh.log-*


# log split
# /root/work/timetouchlog.sh

#!/bin/sh
filepath=/root/work/output
filename=cbh.log
maxsize=$((1024*1024*10))
filesize=`ls -l $filepath/$filename | awk '{ print $5 }'`
if [ $filesize -gt $maxsize ]
then
    echo "$filesize > $maxsize"
    cp $filepath/$filename $filepath/$filename.xbak
    echo "`date +%Y-%m-%d_%H:%M:%S`" > $filepath/$filename
else
    echo "$filesize < $maxsize"
fi

