function ajaxObject(){var e;try{e=new XMLHttpRequest}catch(t){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return sweetAlert("糟糕","你的浏览器不能上传文件","error"),!1}}}return e}function getCookie(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function hpp_loadmore(e,t,n){new hpp_talk({id:e,domain:t,limit:n,start:Number(getCookie("hpp_start"))})}function hpp_talk({id:e,domain:t,limit:n,start:r}){function i(e){var t=0;for(var n in e)t++;return t}console.log(e),document.getElementById(e).innerHTML='<div class="hpp_talk_load">\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>',back="https://"+t+"/hpp/api/gethpptalk";var s=ajaxObject();s.open("post",back,!0),s.setRequestHeader("Content-Type","text/plain"),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status){document.getElementById(e).innerHTML=`<div class="hppt_streamline hppt_b-l hppt_m-l-lg hppt_m-b hppt_padder-v">\n   <ol id="hpp_talk_list"></ol> \n   <button onclick="hpp_loadmore('${e}','${t}',${n})" class="hppt_button_nextpage">下一页</button>\n  </div>`,console.log("OK"),console.log(s.responseText);let l=JSON.parse(s.responseText);document.getElementById("hpp_talk_list").innerHTML="";for(var r=0;r<i(l);r++){if(null==l[r]){document.cookie="hpp_start=0";break}let e=JSON.parse(l[r]),t=marked(e.content);document.getElementById("hpp_talk_list").innerHTML+=`<div id="${e.id}" class="hppt_comment-body hppt_comment-parent hppt_comment-odd hppt_comment-by-user"> <div id="item">\n     <a class="hppt_pull-left hppt_thumb-sm hppt_avatar hppt_m-l-n-md"> <img nogallery="" src="${e.avatar}" class="hppt_img-40px hppt_photo hppt_img-square hppt_normal-shadow"> </a> \n     <div class="hppt_time-machine hppt_m-l-lg hppt_panel hppt_box-shadow-wrap-normal"> \n      <div class="hppt_panel-heading hppt_pos-rlt hppt_b-b hppt_b-light">\n       <span class="hppt_text-muted hppt_m-l-sm hppt_pull-right" datetime="${e.time}"><strong class="talk_mobile_hide">  ${e.name}·</strong>${e.time}</span> \n      </div> \n      <div class="hppt_panel-body hppt_comment-content-true"> \n       <p>${t}</p> \n      </div> \n      <div class="hppt_panel-footer"> \n       <div class="hppt_say_footer">\t   \n\t   </div> \n      </div> \n     </div> \n    </div>`}}else console.log("ERROR")};let l={limit:n,start:r};r+=n,document.cookie="hpp_start="+r,s.send(JSON.stringify(l))}!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).marked=t()}(this,(function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,n){var r;if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator])return(r=e[Symbol.iterator]()).next.bind(r);if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e){return p[e]}var i,s=(function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}(i={exports:{}}),i.exports),l=/[&<>"']/,a=/[&<>"']/g,o=/[<>"']|&(?!#?\w+;)/,c=/[<>"']|&(?!#?\w+;)/g,p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function h(e){return e.replace(u,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var g=/(^|[^\[])\^/g,f=/[^\w:]/g,d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,k={},m=/^[^:]+:\/*[^/]*$/,b=/^([^:]+:)[\s\S]*$/,x=/^([^:]+:\/*[^/]*)[\s\S]*$/;function _(e,t,n){var r=e.length;if(0===r)return"";for(var i=0;i<r;){var s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}var v=function(e,t){if(t){if(l.test(e))return e.replace(a,r)}else if(o.test(e))return e.replace(c,r);return e},w=h,y=function(e,t){e=e.source||e,t=t||"";var n={replace:function(t,r){return r=(r=r.source||r).replace(g,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n},$={exec:function(){}},z=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},S=function(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var r=!1,i=t;0<=--i&&"\\"===n[i];)r=!r;return r?"|":" |"})).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},A=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,i=0;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&--r<0)return i;return-1},T=s.defaults,R=_,I=S,O=v,q=A;function Z(e,t,n){var r=t.href,i=t.title?O(t.title):null;t=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:t}:{type:"image",raw:n,href:r,title:i,text:O(t)}}var j=function(){function e(e){this.options=e||T}var t=e.prototype;return t.space=function(e){if(e=this.rules.block.newline.exec(e))return 1<e[0].length?{type:"space",raw:e[0]}:{raw:"\n"}},t.code=function(e,t){if(e=this.rules.block.code.exec(e))return(t=t[t.length-1])&&"paragraph"===t.type?{raw:e[0],text:e[0].trimRight()}:(t=e[0].replace(/^ {1,4}/gm,""),{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:R(t,"\n")})},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0];e=function(e,t){if(null===(e=e.match(/^(\s+)(?:```)/)))return t;var n=e[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);return null!==t&&t[0].length>=n.length?e.slice(n.length):e})).join("\n")}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]&&t[2].trim(),text:e}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var n=t[2].trim();return/#$/.test(n)&&(e=R(n,"#"),!this.options.pedantic&&e&&!/ $/.test(e)||(n=e.trim())),{type:"heading",raw:t[0],depth:t[1].length,text:n}}},t.nptable=function(e){if(e=this.rules.block.nptable.exec(e)){var t={type:"table",header:I(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[],raw:e[0]};if(t.header.length===t.align.length){for(var n=t.align.length,r=0;r<n;r++)/^ *-+: *$/.test(t.align[r])?t.align[r]="right":/^ *:-+: *$/.test(t.align[r])?t.align[r]="center":/^ *:-+ *$/.test(t.align[r])?t.align[r]="left":t.align[r]=null;for(n=t.cells.length,r=0;r<n;r++)t.cells[r]=I(t.cells[r],t.header.length);return t}}},t.hr=function(e){if(e=this.rules.block.hr.exec(e))return{type:"hr",raw:e[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t)return e=t[0].replace(/^ *> ?/gm,""),{type:"blockquote",raw:t[0],text:e}},t.list=function(e){if(e=this.rules.block.list.exec(e)){for(var t,n,r,i,s,l=e[0],a=e[2],o=1<a.length,c={type:"list",raw:l,ordered:o,start:o?+a.slice(0,-1):"",loose:!1,items:[]},p=e[0].match(this.rules.block.item),u=!1,h=p.length,g=this.rules.block.listItemStart.exec(p[0]),f=0;f<h;f++){if(l=t=p[f],f!==h-1){if((r=this.rules.block.listItemStart.exec(p[f+1]))[1].length>g[0].length||3<r[1].length){p.splice(f,2,p[f]+"\n"+p[f+1]),f--,h--;continue}(!this.options.pedantic||this.options.smartLists?r[2][r[2].length-1]!==a[a.length-1]:o==(1===r[2].length))&&(n=p.slice(f+1).join("\n"),c.raw=c.raw.substring(0,c.raw.length-n.length),f=h-1),g=r}r=t.length,~(t=t.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(r-=t.length,t=this.options.pedantic?t.replace(/^ {1,4}/gm,""):t.replace(new RegExp("^ {1,"+r+"}","gm"),"")),r=u||/\n\n(?!\s*$)/.test(t),f!==h-1&&(u="\n"===t.charAt(t.length-1),r=r||u),r&&(c.loose=!0),this.options.gfm&&(s=void 0,(i=/^\[[ xX]\] /.test(t))&&(s=" "!==t[1],t=t.replace(/^\[[ xX]\] +/,""))),c.items.push({type:"list_item",raw:l,task:i,checked:s,loose:r,text:t})}return c}},t.html=function(e){if(e=this.rules.block.html.exec(e))return{type:this.options.sanitize?"paragraph":"html",raw:e[0],pre:!this.options.sanitizer&&("pre"===e[1]||"script"===e[1]||"style"===e[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):O(e[0]):e[0]}},t.def=function(e){if(e=this.rules.block.def.exec(e))return e[3]&&(e[3]=e[3].substring(1,e[3].length-1)),{tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}},t.table=function(e){if(e=this.rules.block.table.exec(e)){var t={type:"table",header:I(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[]};if(t.header.length===t.align.length){t.raw=e[0];for(var n=t.align.length,r=0;r<n;r++)/^ *-+: *$/.test(t.align[r])?t.align[r]="right":/^ *:-+: *$/.test(t.align[r])?t.align[r]="center":/^ *:-+ *$/.test(t.align[r])?t.align[r]="left":t.align[r]=null;for(n=t.cells.length,r=0;r<n;r++)t.cells[r]=I(t.cells[r].replace(/^ *\| *| *\| *$/g,""),t.header.length);return t}}},t.lheading=function(e){if(e=this.rules.block.lheading.exec(e))return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1]}},t.paragraph=function(e){if(e=this.rules.block.paragraph.exec(e))return{type:"paragraph",raw:e[0],text:"\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1]}},t.text=function(e,t){if(e=this.rules.block.text.exec(e))return(t=t[t.length-1])&&"text"===t.type?{raw:e[0],text:e[0]}:{type:"text",raw:e[0],text:e[0]}},t.escape=function(e){if(e=this.rules.inline.escape.exec(e))return{type:"escape",raw:e[0],text:O(e[1])}},t.tag=function(e,t,n){if(e=this.rules.inline.tag.exec(e))return!t&&/^<a /i.test(e[0])?t=!0:t&&/^<\/a>/i.test(e[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):O(e[0]):e[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;if(e=R(n.slice(0,-1),"\\"),(n.length-e.length)%2==0)return}else{-1<(i=q(t[2],"()"))&&(s=(0===t[0].indexOf("!")?5:4)+t[1].length+i,t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,s).trim(),t[3]="")}var r,i=t[2],s="";return this.options.pedantic?(r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i))&&(i=r[1],s=r[3]):s=t[3]?t[3].slice(1,-1):"",i=i.trim(),Z(t,{href:(i=/^</.test(i)?this.options.pedantic&&!/>$/.test(n)?i.slice(1):i.slice(1,-1):i)&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0])}},t.reflink=function(e,t){if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){if((e=t[(e=(n[2]||n[1]).replace(/\s+/g," ")).toLowerCase()])&&e.href)return Z(n,e,n[0]);var n=n[0].charAt(0);return{type:"text",raw:n,text:n}}},t.strong=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.strong.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="**"===r[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.strong.middle.exec(t.slice(0,r.index+3)))return{type:"strong",raw:e.slice(0,i[0].length),text:e.slice(2,i[0].length-2)}}},t.em=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.em.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="*"===r[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.em.middle.exec(t.slice(0,r.index+2)))return{type:"em",raw:e.slice(0,i[0].length),text:e.slice(1,i[0].length-1)}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),r=/[^ ]/.test(n);e=/^ /.test(n)&&/ $/.test(n);return r&&e&&(n=n.substring(1,n.length-1)),n=O(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){if(e=this.rules.inline.br.exec(e))return{type:"br",raw:e[0]}},t.del=function(e){if(e=this.rules.inline.del.exec(e))return{type:"del",raw:e[0],text:e[2]}},t.autolink=function(e,t){if(e=this.rules.inline.autolink.exec(e)){var n;t="@"===e[2]?"mailto:"+(n=O(this.options.mangle?t(e[1]):e[1])):n=O(e[1]);return{type:"link",raw:e[0],text:n,href:t,tokens:[{type:"text",raw:n,text:n}]}}},t.url=function(e,t){var n,r,i,s;if(n=this.rules.inline.url.exec(e)){if("@"===n[2])i="mailto:"+(r=O(this.options.mangle?t(n[0]):n[0]));else{for(;s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0],s!==n[0];);r=O(n[0]),i="www."===n[1]?"http://"+r:r}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},t.inlineText=function(e,t,n){if(e=this.rules.inline.text.exec(e))return n=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):O(e[0]):e[0]:O(this.options.smartypants?n(e[0]):e[0]),{type:"text",raw:e[0],text:n}},e}();S=$,A=y,$=z;(y={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:S,table:S,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/}).def=A(y.def).replace("label",y._label).replace("title",y._title).getRegex(),y.bullet=/(?:[*+-]|\d{1,9}[.)])/,y.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,y.item=A(y.item,"gm").replace(/bull/g,y.bullet).getRegex(),y.listItemStart=A(/^( *)(bull)/).replace("bull",y.bullet).getRegex(),y.list=A(y.list).replace(/bull/g,y.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+y.def.source+")").getRegex(),y._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",y._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,y.html=A(y.html,"i").replace("comment",y._comment).replace("tag",y._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),y.paragraph=A(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",y._tag).getRegex(),y.blockquote=A(y.blockquote).replace("paragraph",y.paragraph).getRegex(),y.normal=$({},y),y.gfm=$({},y.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),y.gfm.nptable=A(y.gfm.nptable).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",y._tag).getRegex(),y.gfm.table=A(y.gfm.table).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",y._tag).getRegex(),y.pedantic=$({},y.normal,{html:A("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",y._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:S,paragraph:A(y.normal._paragraph).replace("hr",y.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",y.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),(S={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:S,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:S,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"}).punctuation=A(S.punctuation).replace(/punctuation/g,S._punctuation).getRegex(),S._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",S._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",S._comment=A(y._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),S.em.start=A(S.em.start).replace(/punctuation/g,S._punctuation).getRegex(),S.em.middle=A(S.em.middle).replace(/punctuation/g,S._punctuation).replace(/overlapSkip/g,S._overlapSkip).getRegex(),S.em.endAst=A(S.em.endAst,"g").replace(/punctuation/g,S._punctuation).getRegex(),S.em.endUnd=A(S.em.endUnd,"g").replace(/punctuation/g,S._punctuation).getRegex(),S.strong.start=A(S.strong.start).replace(/punctuation/g,S._punctuation).getRegex(),S.strong.middle=A(S.strong.middle).replace(/punctuation/g,S._punctuation).replace(/overlapSkip/g,S._overlapSkip).getRegex(),S.strong.endAst=A(S.strong.endAst,"g").replace(/punctuation/g,S._punctuation).getRegex(),S.strong.endUnd=A(S.strong.endUnd,"g").replace(/punctuation/g,S._punctuation).getRegex(),S.blockSkip=A(S._blockSkip,"g").getRegex(),S.overlapSkip=A(S._overlapSkip,"g").getRegex(),S._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,S._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,S._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,S.autolink=A(S.autolink).replace("scheme",S._scheme).replace("email",S._email).getRegex(),S._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,S.tag=A(S.tag).replace("comment",S._comment).replace("attribute",S._attribute).getRegex(),S._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,S._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,S._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,S.link=A(S.link).replace("label",S._label).replace("href",S._href).replace("title",S._title).getRegex(),S.reflink=A(S.reflink).replace("label",S._label).getRegex(),S.reflinkSearch=A(S.reflinkSearch,"g").replace("reflink",S.reflink).replace("nolink",S.nolink).getRegex(),S.normal=$({},S),S.pedantic=$({},S.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:A(/^!?\[(label)\]\((.*?)\)/).replace("label",S._label).getRegex(),reflink:A(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",S._label).getRegex()}),S.gfm=$({},S.normal,{escape:A(S.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),S.gfm.url=A(S.gfm.url,"i").replace("email",S.gfm._extended_email).getRegex(),S.breaks=$({},S.gfm,{br:A(S.br).replace("{2,}","*").getRegex(),text:A(S.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});S={block:y,inline:S};var C=s.defaults,E=S.block,L=S.inline,U=function(e,t){if(t<1)return"";for(var n="";1<t;)1&t&&(n+=e),t>>=1,e+=e;return n+e};function P(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function M(e){for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),n+="&#"+(t=.5<Math.random()?"x"+t.toString(16):t)+";";return n}var D=function(){function t(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||C,this.options.tokenizer=this.options.tokenizer||new j,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,e={block:E.normal,inline:L.normal},this.options.pedantic?(e.block=E.pedantic,e.inline=L.pedantic):this.options.gfm&&(e.block=E.gfm,this.options.breaks?e.inline=L.breaks:e.inline=L.gfm),this.tokenizer.rules=e}t.lex=function(e,n){return new t(n).lex(e)},t.lexInline=function(e,n){return new t(n).inlineTokens(e)};var n,r,i=t.prototype;return i.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},i.blockTokens=function(e,t,n){var r,i,s,l;for(void 0===t&&(t=[]),void 0===n&&(n=!0),this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),s=r.items.length,i=0;i<s;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(e){var a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}throw new Error(a)}return t},i.inline=function(e){for(var t,n,r,i,s,l=e.length,a=0;a<l;a++)switch((s=e[a]).type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},r=s.header.length,t=0;t<r;t++)s.tokens.header[t]=[],this.inlineTokens(s.header[t],s.tokens.header[t]);for(r=s.cells.length,t=0;t<r;t++)for(i=s.cells[t],s.tokens.cells[t]=[],n=0;n<i.length;n++)s.tokens.cells[t][n]=[],this.inlineTokens(i[n],s.tokens.cells[t][n]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(r=s.items.length,t=0;t<r;t++)this.inline(s.items[t].tokens)}return e},i.inlineTokens=function(e,t,n,r){var i;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===r&&(r=!1);var s,l,a,o=e;if(this.tokens.links){var c=Object.keys(this.tokens.links);if(0<c.length)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(o));)c.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+U("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,s.index)+"["+U("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(l||(a=""),l=!1,i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e,n,r))e=e.substring(i.raw.length),n=i.inLink,r=i.inRawBlock,t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.strong(e,o,a))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.em(e,o,a))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.autolink(e,M))e=e.substring(i.raw.length),t.push(i);else if(n||!(i=this.tokenizer.url(e,M))){if(i=this.tokenizer.inlineText(e,r,P))e=e.substring(i.raw.length),a=i.raw.slice(-1),l=!0,t.push(i);else if(e){var p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}throw new Error(p)}}else e=e.substring(i.raw.length),t.push(i);return t},n=t,r=[{key:"rules",get:function(){return{block:E,inline:L}}}],(i=null)&&e(n.prototype,i),r&&e(n,r),t}(),H=s.defaults,N=function(e,t,n){if(e){var r;try{r=decodeURIComponent(h(n)).replace(f,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!d.test(n)&&(n=function(e,t){k[" "+e]||(m.test(e)?k[" "+e]=e+"/":k[" "+e]=_(e,"/",!0));var n=-1===(e=k[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(b,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(x,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},B=v,X=function(){function e(e){this.options=e||H}var t=e.prototype;return t.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];return!this.options.highlight||null!=(t=this.options.highlight(e,r))&&t!==e&&(n=!0,e=t),e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+B(r,!0)+'">'+(n?e:B(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:B(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n"+(t=t&&"<tbody>"+t+"</tbody>")+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){return null===(e=N(this.options.sanitize,this.options.baseUrl,e))?n:(e='<a href="'+B(e)+'"',t&&(e+=' title="'+t+'"'),e+">"+n+"</a>")},t.image=function(e,t,n){return null===(e=N(this.options.sanitize,this.options.baseUrl,e))?n:(n='<img class="hpp_talk_img" src="'+e+'" alt="'+n+'"',t&&(n+=' title="'+t+'"'),n+(this.options.xhtml?"/>":">"))},t.text=function(e){return e},e}(),F=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),J=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,r=0;if(this.seen.hasOwnProperty(n))for(r=this.seen[e];n=e+"-"+ ++r,this.seen.hasOwnProperty(n););return t||(this.seen[e]=r,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),G=s.defaults,K=w,V=function(){function e(e){this.options=e||G,this.options.renderer=this.options.renderer||new X,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new F,this.slugger=new J}e.parse=function(t,n){return new e(n).parse(t)},e.parseInline=function(t,n){return new e(n).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);for(var n,r,i,s,l,a,o,c,p,u,h,g,f,d,k,m="",b=e.length,x=0;x<b;x++)switch((c=e[x]).type){case"space":continue;case"hr":m+=this.renderer.hr();continue;case"heading":m+=this.renderer.heading(this.parseInline(c.tokens),c.depth,K(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue;case"code":m+=this.renderer.code(c.text,c.lang,c.escaped);continue;case"table":for(a=p="",i=c.header.length,n=0;n<i;n++)a+=this.renderer.tablecell(this.parseInline(c.tokens.header[n]),{header:!0,align:c.align[n]});for(p+=this.renderer.tablerow(a),o="",i=c.cells.length,n=0;n<i;n++){for(a="",s=(l=c.tokens.cells[n]).length,r=0;r<s;r++)a+=this.renderer.tablecell(this.parseInline(l[r]),{header:!1,align:c.align[r]});o+=this.renderer.tablerow(a)}m+=this.renderer.table(p,o);continue;case"blockquote":o=this.parse(c.tokens),m+=this.renderer.blockquote(o);continue;case"list":for(p=c.ordered,_=c.start,u=c.loose,i=c.items.length,o="",n=0;n<i;n++)f=(g=c.items[n]).checked,d=g.task,h="",g.task&&(k=this.renderer.checkbox(f),u?0<g.tokens.length&&"text"===g.tokens[0].type?(g.tokens[0].text=k+" "+g.tokens[0].text,g.tokens[0].tokens&&0<g.tokens[0].tokens.length&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=k+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:k}):h+=k),h+=this.parse(g.tokens,u),o+=this.renderer.listitem(h,d,f);m+=this.renderer.list(o,p,_);continue;case"html":m+=this.renderer.html(c.text);continue;case"paragraph":m+=this.renderer.paragraph(this.parseInline(c.tokens));continue;case"text":for(o=c.tokens?this.parseInline(c.tokens):c.text;x+1<b&&"text"===e[x+1].type;)o+="\n"+((c=e[++x]).tokens?this.parseInline(c.tokens):c.text);m+=t?this.renderer.paragraph(o):o;continue;default:var _='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(_);throw new Error(_)}return m},t.parseInline=function(e,t){t=t||this.renderer;for(var n,r="",i=e.length,s=0;s<i;s++)switch((n=e[s]).type){case"escape":r+=t.text(n.text);break;case"html":r+=t.html(n.text);break;case"link":r+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":r+=t.image(n.href,n.title,n.text);break;case"strong":r+=t.strong(this.parseInline(n.tokens,t));break;case"em":r+=t.em(this.parseInline(n.tokens,t));break;case"codespan":r+=t.codespan(n.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(n.tokens,t));break;case"text":r+=t.text(n.text);break;default:var l='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}return r},e}(),Q=z,W=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},Y=v,ee=(v=s.getDefaults,s.changeDefaults);s=s.defaults;function te(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=Q({},te.defaults,t||{}),W(t),n){var r,i=t.highlight;try{r=D.lex(e,t)}catch(e){return n(e)}var s=function(e){var s;if(!e)try{s=V.parse(r,t)}catch(s){e=s}return t.highlight=i,e?n(e):n(null,s)};if(!i||i.length<3)return s();if(delete t.highlight,!r.length)return s();var l=0;return te.walkTokens(r,(function(e){"code"===e.type&&(l++,setTimeout((function(){i(e.text,e.lang,(function(t,n){return t?s(t):(null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),void(0==--l&&s()))}))}),0))})),void(0===l&&s())}try{var a=D.lex(e,t);return t.walkTokens&&te.walkTokens(a,t.walkTokens),V.parse(a,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+Y(e.message+"",!0)+"</pre>";throw e}}return te.options=te.setOptions=function(e){return Q(te.defaults,e),ee(te.defaults),te},te.getDefaults=v,te.defaults=s,te.use=function(e){var t,n=Q({},e);e.renderer&&function(){var t,r=te.defaults.renderer||new X;for(t in e.renderer)!function(t){var n=r[t];r[t]=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];var a=e.renderer[t].apply(r,s);return!1===a?n.apply(r,s):a}}(t);n.renderer=r}(),e.tokenizer&&function(){var t,r=te.defaults.tokenizer||new j;for(t in e.tokenizer)!function(t){var n=r[t];r[t]=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];var a=e.tokenizer[t].apply(r,s);return!1===a?n.apply(r,s):a}}(t);n.tokenizer=r}(),e.walkTokens&&(t=te.defaults.walkTokens,n.walkTokens=function(n){e.walkTokens(n),t&&t(n)}),te.setOptions(n)},te.walkTokens=function(e,t){for(var r,i=n(e);!(r=i()).done;){var s=r.value;switch(t(s),s.type){case"table":for(var l=n(s.tokens.header);!(a=l()).done;){var a=a.value;te.walkTokens(a,t)}for(var o,c=n(s.tokens.cells);!(o=c()).done;)for(var p=n(o.value);!(u=p()).done;){var u=u.value;te.walkTokens(u,t)}break;case"list":te.walkTokens(s.items,t);break;default:s.tokens&&te.walkTokens(s.tokens,t)}}},te.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=Q({},te.defaults,t||{}),W(t);try{var n=D.lexInline(e,t);return t.walkTokens&&te.walkTokens(n,t.walkTokens),V.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+Y(e.message+"",!0)+"</pre>";throw e}},te.Parser=V,te.parser=V.parse,te.Renderer=X,te.TextRenderer=F,te.Lexer=D,te.lexer=D.lex,te.Tokenizer=j,te.Slugger=J,te.parse=te})),document.cookie="hpp_start=";