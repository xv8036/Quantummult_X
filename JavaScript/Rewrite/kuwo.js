#!name=酷我音乐
#!desc=代码重构,这版是最完美！！！的酷我解锁
#!openUrl=https://t.me/Functional_Store_Hub
#!author=@Nameking77 https://t.me/Nameking77
#!homepage=https://github.com/I-am-R-E/Functional-Store-Hub/tree/Master/KuWoMusic
#!manual=https://t.me/Functional_Store_Hub/10
#!icon=https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/Files/icon.png
#!other=KuWoMusic.Surge.sgmodel

[Script]
酷我音乐=type=http-response,pattern=^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/xv8036/Quantummult_X/master/JavaScript/JavaScripts/kuwovip.js,script-update-interval=0

[MITM]
hostname = %APPEND% *.kuwo.cn, *.lrts.me
