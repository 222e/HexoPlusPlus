function hpp_get_doc_long(){var e=ajaxObject();e.open("get","/hpp/admin/api/getlist",!0),e.setRequestHeader("Content-Type","text/plain"),e.onreadystatechange=function(){4==e.readyState&&(200==e.status?document.getElementById("document_all").innerHTML=JSON.parse(e.responseText).length:document.getElementById("document_all").innerHTML="获取失败")},e.send()}function hpp_get_img_long(){var e=ajaxObject();e.open("get","/hpp/admin/api/getimglist",!0),e.setRequestHeader("Content-Type","text/plain"),e.onreadystatechange=function(){4==e.readyState&&(200==e.status?document.getElementById("img_all").innerHTML=JSON.parse(e.responseText).length:document.getElementById("document_all").innerHTML="获取失败")},e.send()}function hpp_del_all(){function e(){swal("您放弃了销毁数据","您的数据是安全的","success")}swal({title:"你真的要销毁？",text:"我相信你是手滑了",icon:"warning",buttons:["没有","是的！"],dangerMode:!0}).then((t=>{t?swal({title:"你真的要删除数据吗？",text:"我寻思你也不想再配置一遍",icon:"warning",buttons:["我放弃了","爷肯定了"],dangerMode:!0}).then((t=>{t?swal({title:"你真的要重来啦？",text:"我觉得也不是不可以(bushi",icon:"warning",buttons:["我萎了","视死如归"],dangerMode:!0}).then((t=>{if(t){var n=ajaxObject();swal({title:"\n删除中...",icon:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button:!1,closeModal:!1}),n.open("get","/hpp/admin/api/del_all",!0),n.setRequestHeader("Content-Type","text/plain"),n.onreadystatechange=function(){4==n.readyState&&(swal.close(),200==n.status?window.location.reload():sweetAlert("糟糕","删除配置失败！","error"))},n.send()}else e()})):e()})):e()}))}function hpp_artitalk_into_hpptalk(){var e=document.createElement("textarea");e.id="artitalk",e.style="border:0;border-radius:5px;background-color:rgba(241,241,241,.98);width: 355px;height: 100px;padding: 10px;resize: none;",swal({title:"输入从LeanCloud中导出的数据",content:e}).then((e=>{if(talk_re=document.getElementById("artitalk").value,""!=talk_re){talk_re=talk_re.split("\n"),talk=[];for(var t=0;t<talk_re.length-1;t++)talk.push(JSON.parse(talk_re[t]));swal({title:"\n导入中...",icon:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button:!1,closeModal:!1});var n=ajaxObject();n.open("post","/hpp/admin/api/inputtalk",!0),n.setRequestHeader("Content-Type","text/plain"),n.onreadystatechange=function(){4==n.readyState&&(swal.close(),200==n.status?sweetAlert("成功","说说已导入","success"):sweetAlert("糟糕","说说导入失败","error"))},n.send(JSON.stringify(talk))}else sweetAlert("成功","你取消了此次导入","success")}))}hpp_get_doc_long(),hpp_get_img_long();