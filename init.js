net = require('net');
served = null;

var friendlist = new Array();
var addlist = new Array();

function send(host, port, content) {
    var client = net.Socket();
    client.connect(port,host,function(){
        client.write(content);
        client.end();
    });
}

function sendToAll(host, content) {
    var cnt;
    for (cnt = 0; cnt < friendlist.length; ++cnt) {
        //alert("sendtoall");
        send(host, friendlist[cnt], content);
    }
}

var contentList = {};

function newFriend(host, port) {
    var tr = $("<tr></tr>");
    var std = $("<td></td>");
    //alert(tr.html());
    var td = std.clone();
    td.html(host);
    tr.append(td);
    td = std.clone();
    td.html(port);
    tr.append(td);

    var a1 = $('<a href="#">allow</a>');
    var a2 = $('<a href="#">deny</a>');
    var localport = $("#port").val();

    a1.one('click', function () {
        friendlist.push(port);
        /*for (var cnt = 0; cnt < addlist.length; ++cnt) {
            if (addlist[cnt] == port) {
                //alert("fuck");
                console.log(friendlist);
                //console.log(cnt);
                addlist.splice(cnt, 1);
                //console.log(friendlist);
            }
        }*/
        send(host, port, 'A' + localport);
        a1.html('send');
        a1.click(function () {
            var content = $("#editor").html();
            send(host, port, 'C' + content);
            //$("#editor").html(contentList[host+port]);
            //console.log(host+port, contentList[host+port]);
        });

        a2.unbind('click');
        a2.html('delete');
        a2.click(function () {
            /*for (var cnt = 0; cnt < friendlist.length; ++cnt) {
                if (friendlist[cnt] == port) {
                    //alert("fuck");
                    //console.log(friendlist);
                    //console.log(cnt);
                    friendlist.splice(cnt, 1);
                    //console.log(friendlist);
                }
            }*/
            //tmp += 1;
            //var index = friendlist.indexOf(port);
            //if (index > -1) {
            //console.log("tmp"+friendlist[tmp]);

            //}
            //console.log(host+port, contentList[host+port]);
            //$("#editor").html(contentList[host+port]);
            //alert(contentList[host+port]);
            send(host, port, 'R' + localport);
            //alert("new"+tr.html());
            tr.remove();
        });
    });

    a2.one('click', function () {
        /*for (var cnt = 0; cnt < addlist.length; ++cnt) {
            if (addlist[cnt] == port) {
                //alert("fuck");
                console.log(friendlist);
                //console.log(cnt);
                addlist.splice(cnt, 1);
                //console.log(friendlist);
            }
        }*/
        send(host, port, 'D' + localport);
        tr.remove();
    });

    td = std.clone();
    td.append(a1);
    tr.append(td);
    td = std.clone();
    td.append(a2);
    tr.append(td);
    tr.attr('id', port);

    $("#friends").append(tr);
}

function declineFriend(host, port) {
    console.log("fuck"+addlist+port);
    //alert(port);
    for (var cnt = 0; cnt < addlist.length; ++cnt) {
        if (addlist[cnt] == port) {
            //alert("fuck");
            console.log(friendlist);
            //console.log(cnt);
            addlist.splice(cnt, 1);
            //console.log(friendlist);
        }
    }
}

function allowFriend(host, port) {
    //alert(port);
    var tr = $("<tr></tr>");
    //alert("allow"+tr.html());
    var std = $("<td></td>");

    var td = std.clone();
    td.html(host);
    tr.append(td);
    td = std.clone();
    td.html(port);
    tr.append(td);

    var a1 = $('<a href="#">send</a>');
    var a2 = $('<a href="#">delete</a>');
    var localport = $("#port").val();

    friendlist.push(port);

    for (var cnt = 0; cnt < addlist.length; ++cnt) {
        if (addlist[cnt] == port) {
            //alert("fuck");
            console.log(friendlist);
            //console.log(cnt);
            addlist.splice(cnt, 1);
            //console.log(friendlist);
        }
    }

    a1.click(function () {
        var content = $("#editor").html();
        send(host, port, 'C' + content);
        //$("#editor").html(contentList[host+port]);
        //console.log(host+port, contentList[host+port]);
    });

    a2.click(function () {
        //$("#editor").html(contentList[host+port]);
        //alert(contentList[host+port]);
        send(host, port, 'R' + localport);
        //alert("allow"+tr.html());
        for (var cnt = 0; cnt < friendlist.length; ++cnt) {
            if (friendlist[cnt] == port) {
                //console.log(friendlist);
                //alert("fuck");
                //console.log(cnt);
                friendlist.splice(cnt, 1);
                //console.log(friendlist);
            }
        }
        tr.remove();
    });

    td = std.clone();
    td.append(a1);
    tr.append(td);
    td = std.clone();
    td.append(a2);
    tr.append(td);
    tr.attr('id', port);

    $("#friends").append(tr);
}

function removeFriend(host, port) {
    //alert(host+port);
    var tr = document.getElementById(port);
    //alert($("#friends").tr.html());
    //var tmp = 0;
    for (var cnt = 0; cnt < friendlist.length; ++cnt) {
        if (friendlist[cnt] == port) {
            //console.log(cnt);
            friendlist.splice(cnt, 1);
            //console.log(friendlist);
        }
    }
    //var index = friendlist.indexOf(port);
    //if (index > -1) {
    //console.log("tmp"+friendlist[tmp]);

    //}
    tr.remove();
    //var std = $("<td></td>");

    //var td = std.clone();

    /*td.html(host);
    tr.append(td);
    td = std.clone();
    td.html(port);
    alert(port);
    tr.append(td);*/
    //alert("remove"+tr.html());
    //alert(td.html());
    //tr.append(td);
    //alert(td.html());
    //tr.remove();

    //var a1 = $('<a href="#">send</a>');
    //var a2 = $('<a href="#">delete</a>');
    //alert("fuck");

    /*a1.click(function () {
        var content = $("#editor").html();
        send(host, port, 'C' + content);
        //$("#editor").html(contentList[host+port]);
        //console.log(host+port, contentList[host+port]);
    });

    a2.click(function () {
        //$("#editor").html(contentList[host+port]);
        //alert(contentList[host+port]);
        send(host, port, 'R');
        tr.remove();
    });*/

    //td = std.clone();
    //alert("fuck");

    //td.remove();
    //td = std.clone();
    //td.remove(a2);
    //tr.remove(td);

    //$("#friends").remove(tr);
}

$(document).ready(function () {
    $("#editor").wysiwyg();

    $("#sendtoall").click(function () {
        var content = $("#editor").html();
        var host = $("#remoteHost").val();
        sendToAll(host, 'C' + content);
    });

    $("#onoffswitch").on('click', function() {
        clickSwitch()
    });
    var int = 0;
    var clickSwitch = function() {
        if ($("#onoffswitch").is(':checked')) {
            //定时器每秒调用一次fnDate()
            int = setInterval(function(){
                fnDate();
            }, 1000);
            function fnDate(){
                /*var oDiv=document.getElementById("div1");
                var date=new Date();
                var year=date.getFullYear();//当前年份
                var month=date.getMonth();//当前月份
                var data=date.getDate();//天
                var hours=date.getHours();//小时
                var minute=date.getMinutes();//分
                var second=date.getSeconds();//秒
                var time=year+"-"+((month+1))+"-"+(data)+" "+(hours)+":"+(minute)+":"+(second);
                oDiv.innerHTML=time;*/
                var content = $("#editor").html();
                var host = $("#remoteHost").val();
                sendToAll(host, 'C' + content);
            }
            //clearInterval(int);
            //console.log("a"+int);
            //console.log("在ON的状态下");
        }
        else {
            console.log(int);
            clearInterval(int);
            console.log("在OFF的状态下");
        }
    };

    $("#add").click(function () {
        //alert(document.form.input[1].value);
        //$("#editor").html(document.getElementById("filein").value);
        var host = $("#remoteHost").val();
        var port = $("#remotePort").val();
        var localport = $("#port").val();
        //var cnt_2;
        var flag = 0;
        var flag_2 = 0;
        port = parseInt(port);

        for (var cnt_2 = 0; cnt_2 < friendlist.length; ++cnt_2) {
            //alert("sendtoall");
            if (friendlist[cnt_2] == port)
            {
                flag = 1;
            }
            //send(host, friendlist[cnt], content);
        }
        for (var cnt_2 = 0; cnt_2 < addlist.length; ++cnt_2) {
            //alert("sendtoall");
            if (addlist[cnt_2] == port)
            {
                flag_2 = 1;
            }
            //send(host, friendlist[cnt], content);
        }
        if (flag == 1) {
            alert("You have added this friend!")
        }
        else if (flag_2 == 1) {
            alert("You have sent a request!")
        }
        else {
            addlist.push(port);
            send(host, port, 'F'+localport);
        }
    });

    $("#serve").click(function () {
        var host = $("#host").val();
        var port = $("#port").val();

        if(served == null) {
            net.createServer(function(sock) {
                var buf = "";
                var remoteAddress = sock.remoteAddress;

                // 为这个socket实例添加一个"data"事件处理函数
                sock.on('data', function(data) {
                    buf += data;
                    if('\x00' in buf.split()) {
                    }
                });

                // 为这个socket实例添加一个"close"事件处理函数
                sock.on('close', function() {
                    var t = buf[0];
                    var c = buf.slice(1);
                    switch(t) {
                        case 'F':
                            port = c;
                            newFriend(remoteAddress, c);
                            break;
                        case 'C':
                            contentList[remoteAddress+port] = c;
                            $("#editor").html(contentList[remoteAddress+port]);
                            break;
                        /*case 'S':
                            contentList[remoteAddress+port] = c;
                            $("#editor").html(contentList[remoteAddress+port]);
                            break;*/
                        case 'A':
                            //alert(c);
                            allowFriend(remoteAddress, c);
                            console.log(t, c);
                            break;
                        case 'R':
                            //alert(c);
                            removeFriend(remoteAddress, c);
                            console.log(t, c);
                            break;
                        case 'D':
                            //console.log("addlist"+addlist);
                            //alert(c);
                            declineFriend(remoteAddress, c);
                            console.log(t, c);
                            break;
                        default:
                            console.log(t, c);
                            break;
                    }
                });

            }).listen(port, host);
            served = "lancy";
        }
    });
});
