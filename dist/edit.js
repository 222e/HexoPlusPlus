(()=>{class e{constructor(e){const t={logo:"OwO表情",container:document.getElementsByClassName("OwO")[0],position:"down",width:"100%",maxHeight:"250px",api:"https://api.anotherhome.net/OwO/OwO.json"};for(let a in t)t.hasOwnProperty(a)&&!e.hasOwnProperty(a)&&(e[a]=t[a]);this.container=e.container,"up"===e.position&&this.container.classList.add("OwO-up");const a=new XMLHttpRequest;a.onreadystatechange=()=>{4===a.readyState&&(a.status>=200&&a.status<300||304===a.status?(this.odata=JSON.parse(a.responseText),this.init(e)):console.log("OwO data request was unsuccessful: "+a.status))},a.open("get",e.api,!0),a.send(null)}init(e){this.packages=Object.keys(this.odata);let t=`\n            <div class="OwO-logo"><span>${e.logo}</span></div>\n            <div class="OwO-body" style="width: ${e.width}">`;for(let a=0;a<this.packages.length;a++){t+=`\n                <ul class="OwO-items OwO-items-${this.odata[this.packages[a]].type}" style="max-height: ${parseInt(e.maxHeight)-53+"px"};">`;let n=this.odata[this.packages[a]].container;for(let e=0;e<n.length;e++)t+=`\n                    <li class="OwO-item" title="${n[e].text}">${n[e].icon}</li>`;t+="\n                </ul>"}t+='\n                <div class="OwO-bar">\n                    <ul class="OwO-packages">';for(let e=0;e<this.packages.length;e++)t+=`\n                        <li><span>${this.packages[e]}</span></li>`;t+="\n                    </ul>\n                </div>\n            </div>\n            ",this.container.innerHTML=t,this.logo=this.container.getElementsByClassName("OwO-logo")[0],this.logo.addEventListener("click",(()=>{this.toggle()})),this.container.getElementsByClassName("OwO-body")[0].addEventListener("click",(e=>{let t=null;e.target.classList.contains("OwO-item")?t=e.target:e.target.parentNode.classList.contains("OwO-item")&&(t=e.target.parentNode),t&&hpp_add_mark(t.innerHTML)})),this.packagesEle=this.container.getElementsByClassName("OwO-packages")[0];for(let e=0;e<this.packagesEle.children.length;e++)(t=>{this.packagesEle.children[e].addEventListener("click",(()=>{this.tab(t)}))})(e);this.tab(0)}toggle(){this.container.classList.contains("OwO-open")?this.container.classList.remove("OwO-open"):this.container.classList.add("OwO-open")}tab(e){const t=this.container.getElementsByClassName("OwO-items-show")[0];t&&t.classList.remove("OwO-items-show"),this.container.getElementsByClassName("OwO-items")[e].classList.add("OwO-items-show");const a=this.container.getElementsByClassName("OwO-package-active")[0];a&&a.classList.remove("OwO-package-active"),this.packagesEle.getElementsByTagName("li")[e].classList.add("OwO-package-active")}}"undefined"!=typeof module&&void 0!==module.exports?module.exports=e:window.OwO=e})();var OwO_demo=new OwO({logo:"OωO表情",container:document.getElementsByClassName("OwO")[0],api:hpp_OwO,position:"down",maxHeight:"250px"});function base64Encode(e){var t;return t=encodeURIComponent(e),t=unescape(t),t=window.btoa(t)}function hpp_replace_mark(e,t){void 0===e&&(e=""),$((function(){editormd("md-editor",{width:"100%",markdown:e,placeholder:"",toolbarIcons:function(){return["undo","redo","|","preview","watch","|","upimage"]},toolbarIconsClass:{upimage:"fa-image"},toolbarHandlers:{upimage:function(){$("#input").click()}},height:440,path:"https://cdn.jsdelivr.net/npm/editor.md/lib/",htmlDecode:!0,saveHTMLToTextarea:!0})}))}function hpp_add_mark(e){void 0===e&&(e=""),$((function(){editormd("md-editor",{width:"100%",markdown:document.getElementById("doc_editor").value+"\n"+e,placeholder:"",toolbarIcons:function(){return["undo","redo","|","preview","watch","|","upimage"]},toolbarIconsClass:{upimage:"fa-image"},toolbarHandlers:{upimage:function(){$("#input").click()}},height:440,path:"https://cdn.jsdelivr.net/npm/editor.md/lib/",htmlDecode:!0,saveHTMLToTextarea:!0})}))}function hpp_get_list(){$.getJSON("/hpp/admin/api/getlist",(function(e){$.each(e,(function(e,t){$("#choo").append(`\n\t\t\t\t  <option>${t.name}</option>\n                `)})),console.log("get!"),$("#choo").editableSelect(),choo.value="选择一个文件或直接新增一个文件"}))}var input=document.getElementById("input");function copyToClip(content,message){var aux=document.createElement("input");aux.setAttribute("value",content),document.body.appendChild(aux),aux.select(),document.execCommand("copy"),document.body.removeChild(aux),null==message?sweetAlert("复制成功"):eval(message)}function readFile(){var e=this.files[0],t=e.name.substring(e.name.lastIndexOf(".")+1),a=new FileReader;a.readAsDataURL(e),a.onloadstart=function(e){},a.onprogress=function(e){},a.onload=function(e){hpp_uploadimage(this.result.substring(this.result.indexOf(",")+1),t)},a.onloadend=function(e){}}function hpp_uploadimage(e,t){var a=ajaxObject();a.open("post","/hpp/admin/api/addimage/"+t,!0),a.setRequestHeader("Content-Type","text/plain"),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?sweetAlert("成功","图片已更新","success"):201==a.status?(hpp_add_mark(`![](${a.responseText})`),sweetAlert("成功","图片已上传","success")):sweetAlert("糟糕","上传图片失败!","error"))},a.send(e)}function hpp_upload_md(){var e=ajaxObject();e.open("post","/hpp/admin/api/adddoc/"+choo.value,!0),e.setRequestHeader("Content-Type","text/plain"),e.onreadystatechange=function(){4==e.readyState&&(200==e.status?sweetAlert("成功","文件已上传","success"):201==e.status?sweetAlert("成功","文件已新建","success"):sweetAlert("糟糕","上传文件失败!","error"))},e.send(base64Encode(document.getElementById("doc_editor").value))}function hpp_get_md(){hpp_replace_mark("正在获取"+choo.value+"中");var e=ajaxObject();e.open("get","/hpp/admin/api/getdoc/"+choo.value,!0),e.setRequestHeader("Content-Type","text/plain"),e.onreadystatechange=function(){4==e.readyState&&(200==e.status?hpp_replace_mark(e.responseText):hpp_replace_mark("# 获取文件失败！"))},e.send()}input.addEventListener("change",readFile,!1),hpp_get_list(),hpp_replace_mark();