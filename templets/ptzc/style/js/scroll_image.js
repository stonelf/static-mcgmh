﻿var sina={$:function(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}},isIE:navigator.appVersion.indexOf("MSIE")!=-1?true:false,addEvent:function(l,i,I){if(l.attachEvent){l.attachEvent("on"+i,I)}else{l.addEventListener(i,I,false)}},delEvent:function(l,i,I){if(l.detachEvent){l.detachEvent("on"+i,I)}else{l.removeEventListener(i,I,false)}},readCookie:function(O){var o="",l=O+"=";if(document.cookie.length>0){var i=document.cookie.indexOf(l);if(i!=-1){i+=l.length;var I=document.cookie.indexOf(";",i);if(I==-1)I=document.cookie.length;o=document.cookie.substring(i,I)}};return o},writeCookie:function(i,l,o,c){var O="",I="";if(o!=null){O=new Date((new Date).getTime()+o*3600000);O="; expires="+O.toGMTString()};if(c!=null){I=";domain="+c};document.cookie=i+"="+escape(l)+O+I},readStyle:function(I,l){if(I.style[l]){return I.style[l]}else if(I.currentStyle){return I.currentStyle[l]}else if(document.defaultView&&document.defaultView.getComputedStyle){var i=document.defaultView.getComputedStyle(I,null);return i.getPropertyValue(l)}else{return null}},absPosition:function(o,I){var l=o.offsetLeft,O=o.offsetTop,i=o.offsetParent,c="";try{while(i.id!=document.body&&i.id!=document.documentElement&&i!=I&&i!=null){c+=i.tagName+" , ";i=i.offsetParent;l+=i.offsetLeft;O+=i.offsetTop}}catch(e){};return{left:l,top:O}},cutString:function(I,o){if(typeof(I)!="string"){return null};if(!(/^[0-9]*[1-9][0-9]*$/).test(o)){return I};if(o==0){return I};var l=0,i="";for(var O=0;O<I.length;O++){if(I.charCodeAt(O)>255){l+=2}else{l++};if(l<=o-2){i+=I.charAt(O)}else{if(O==I.length-1){i+=I.charAt(O)}else{i+=".."};break}};return i}};

function DivSelect(o,I){var c=this;c.id=o;c.divId=I;c.selectObj=sina.$(c.id);if(!c.selectObj){return};var l=c;c.status="close";c.parentObj=c.selectObj.parentNode;while(sina.readStyle(c.parentObj,"display")!="block"){if(c.parentObj.parentNode){c.parentObj=c.parentObj.parentNode}else{break}};c.parentObj.style.position="relative";c.selectObjWidth=c.selectObj.offsetWidth;c.selectObjHeight=c.selectObj.offsetHeight;c.selectPosition=sina.absPosition(c.selectObj,c.parentObj);c.selectObj.style.visibility="hidden";c.divObj=document.createElement("div");c.divObj.id=c.divId;c.parentObj.appendChild(c.divObj);c.divObj.style.width=c.selectObjWidth+"px";c.divObj.style.position="absolute";c.divObj.style.left=c.selectPosition.left+"px";c.divObj.style.top=c.selectPosition.top+"px";c.divObj.onclick=function(){l.click()};c.divObj_count=document.createElement("div");c.divObj.appendChild(c.divObj_count);c.divObj_count.className="ds_cont";c.divObj_title=document.createElement("div");c.divObj_count.appendChild(c.divObj_title);c.divObj_title.className="ds_title";c.divObj_button=document.createElement("div");c.divObj_count.appendChild(c.divObj_button);c.divObj_button.className="ds_button";c.divObj_list=document.createElement("div");c.divObj.appendChild(c.divObj_list);c.divObj_list.className="ds_list";c.divObj_list.style.display="none";c.list=[];var i;for(var O=0;O<c.selectObj.options.length;O++){i=document.createElement("p");c.list.push(i);c.divObj_list.appendChild(i);i.innerHTML=c.selectObj.options[O].innerHTML;if(c.selectObj.selectedIndex==O){c.divObj_title.innerHTML=i.innerHTML};i.onmouseover=function(){this.className="selected"};i.onmouseout=function(){this.className=""};i.onclick=function(){l.select(this.innerHTML)}};c.select=function(i){var l=this;for(var I=0;I<l.selectObj.options.length;I++){if(l.selectObj.options[I].innerHTML==i){l.selectObj.selectedIndex=I;l.divObj_title.innerHTML=i;break}}};c.clickClose=function(I){var i=I.target?I.target:event.srcElement;do{if(i==l.divObj){return};if(i.tagName=="BODY"){break};i=i.parentNode}while(i.parentNode);l.close()};c.open=function(){var i=this;i.divObj_list.style.display="block";i.status="open";sina.addEvent(document,"click",i.clickClose)};c.close=function(){var i=this;i.divObj_list.style.display="none";i.status="close";sina.delEvent(document,"click",i.clickClose)};c.click=function(){var i=this;if(i.status=="open"){i.close()}else{i.open()}}};

//滚动图片构造函数
function ScrollPic(i,o,I,l,O){var c=this;c.scrollContId=i;c.arrLeftId=o;c.arrRightId=I;c.dotListId=l;c.listType=O;c.dotClassName="dotItem";c.dotOnClassName="dotItemOn";c.dotObjArr=[];c.listEvent="onclick";c.circularly=true;c.pageWidth=0;c.frameWidth=0;c.speed=10;c.space=10;c.upright=false;c.pageIndex=0;c.autoPlay=false;c.autoPlayTime=5;c._autoTimeObj;c._scrollTimeObj;c._state="ready";c.stripDiv=document.createElement("DIV");c.listDiv01=document.createElement("DIV");c.listDiv02=document.createElement("DIV")};ScrollPic.prototype.version="1.20";ScrollPic.prototype.author="mengjia";ScrollPic.prototype.initialize=function(){var O=this,l=O;if(!O.scrollContId){throw new Error("必须指定scrollContId.");return};O.scrollContDiv=sina.$(O.scrollContId);if(!O.scrollContDiv){throw new Error("scrollContId不是正确的对象.(scrollContId = \""+O.scrollContId+"\")");return};O.scrollContDiv.style[O.upright?'height':'width']=O.frameWidth+"px";O.scrollContDiv.style.overflow="hidden";O.listDiv01.innerHTML=O.scrollContDiv.innerHTML;O.scrollContDiv.innerHTML="";O.scrollContDiv.appendChild(O.stripDiv);O.stripDiv.appendChild(O.listDiv01);if(O.circularly){O.stripDiv.appendChild(O.listDiv02);O.listDiv02.innerHTML=O.listDiv01.innerHTML};O.stripDiv.style.overflow="hidden";O.stripDiv.style.zoom="1";O.stripDiv.style[O.upright?'height':'width']="32766px";if(!O.upright){O.listDiv01.style.cssFloat="left";O.listDiv01.style.styleFloat="left";O.listDiv01.style.overflow="hidden"};O.listDiv01.style.zoom="1";if(O.circularly&&!O.upright){O.listDiv02.style.cssFloat="left";O.listDiv02.style.styleFloat="left";O.listDiv02.style.overflow="hidden"};O.listDiv02.style.zoom="1";sina.addEvent(O.scrollContDiv,"mouseover",function(){l.stop()});sina.addEvent(O.scrollContDiv,"mouseout",function(){l.play()});if(O.arrLeftId){O.arrLeftObj=sina.$(O.arrLeftId);if(O.arrLeftObj){sina.addEvent(O.arrLeftObj,"mousedown",function(){l.rightMouseDown()});sina.addEvent(O.arrLeftObj,"mouseup",function(){l.rightEnd()});sina.addEvent(O.arrLeftObj,"mouseout",function(){l.rightEnd()})}};if(O.arrRightId){O.arrRightObj=sina.$(O.arrRightId);if(O.arrRightObj){sina.addEvent(O.arrRightObj,"mousedown",function(){l.leftMouseDown()});sina.addEvent(O.arrRightObj,"mouseup",function(){l.leftEnd()});sina.addEvent(O.arrRightObj,"mouseout",function(){l.leftEnd()})}};if(O.dotListId){O.dotListObj=sina.$(O.dotListId);O.dotListObj.innerHTML="";if(O.dotListObj){var I=Math.round(O.listDiv01[O.upright?'offsetHeight':'offsetWidth']/O.frameWidth+0.4),o,i;for(o=0;o<I;o++){i=document.createElement("span");O.dotListObj.appendChild(i);O.dotObjArr.push(i);if(o==O.pageIndex){i.className=O.dotOnClassName}else{i.className=O.dotClassName};if(O.listType=='number'){i.innerHTML=o+1};i.title="第"+(o+1)+"页";i.num=o;i[O.listEvent]=function(){l.pageTo(this.num)}}}};O.scrollContDiv[O.upright?'scrollTop':'scrollLeft']=0;if(O.autoPlay){O.play()}};ScrollPic.prototype.leftMouseDown=function(){if(this._state!="ready"){return};var thisTemp=this;this._state="floating";this._scrollTimeObj=setInterval(function(){thisTemp.moveLeft()},this.speed)};ScrollPic.prototype.rightMouseDown=function(){if(this._state!="ready"){return};var thisTemp=this;this._state="floating";this._scrollTimeObj=setInterval(function(){thisTemp.moveRight()},this.speed)};ScrollPic.prototype.moveLeft=function(){var i=this;if(i.circularly){if(i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]+i.space>=i.listDiv01[(i.upright?'scrollHeight':'scrollWidth')]){i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]=i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]+i.space-i.listDiv01[(i.upright?'scrollHeight':'scrollWidth')]}else{i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]+=i.space}}else{if(i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]+i.space>=i.listDiv01[(i.upright?'scrollHeight':'scrollWidth')]-i.frameWidth){i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]=i.listDiv01[(i.upright?'scrollHeight':'scrollWidth')]-i.frameWidth;i.leftEnd()}else{i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]+=i.space}};i.accountPageIndex()};ScrollPic.prototype.moveRight=function(){var i=this;if(i.circularly){if(i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]-i.space<=0){i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]=i.listDiv01[(i.upright?'scrollHeight':'scrollWidth')]+i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]-i.space}else{i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]-=i.space}}else{if(i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]-i.space<=0){i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]=0;i.rightEnd()}else{i.scrollContDiv[(i.upright?'scrollTop':'scrollLeft')]-=i.space}};i.accountPageIndex()};ScrollPic.prototype.leftEnd=function(){var I=this;if(I._state!="floating"){return};I._state="stoping";clearInterval(I._scrollTimeObj);var i=I.pageWidth-I.scrollContDiv[(I.upright?'scrollTop':'scrollLeft')]%I.pageWidth;I.move(i)};ScrollPic.prototype.rightEnd=function(){var I=this;if(I._state!="floating"){return};I._state="stoping";clearInterval(I._scrollTimeObj);var i=-I.scrollContDiv[(I.upright?'scrollTop':'scrollLeft')]%I.pageWidth;I.move(i)};ScrollPic.prototype.move=function(num,quick){var thisTemp=this,thisMove=num/5;if(!quick){if(thisMove>this.space){thisMove=this.space};if(thisMove<-this.space){thisMove=-this.space}};if(Math.abs(thisMove)<1&&thisMove!=0){thisMove=thisMove>=0?1:-1}else{thisMove=Math.round(thisMove)};var temp=this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+thisMove;if(thisMove>0){if(this.circularly){if(this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+thisMove>=this.listDiv01[(this.upright?'scrollHeight':'scrollWidth')]){this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]=this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+thisMove-this.listDiv01[(this.upright?'scrollHeight':'scrollWidth')]}else{this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+=thisMove}}else{if(this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+thisMove>=this.listDiv01[(this.upright?'scrollHeight':'scrollWidth')]-this.frameWidth){this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]=this.listDiv01[(this.upright?'scrollHeight':'scrollWidth')]-this.frameWidth;this._state="ready";return}else{this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+=thisMove}}}else{if(this.circularly){if(this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+thisMove<0){this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]=this.listDiv01[(this.upright?'scrollHeight':'scrollWidth')]+this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+thisMove}else{this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+=thisMove}}else{if(this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]-thisMove<0){this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]=0;this._state="ready";return}else{this.scrollContDiv[(this.upright?'scrollTop':'scrollLeft')]+=thisMove}}};num-=thisMove;if(Math.abs(num)==0){this._state="ready";if(this.autoPlay){this.play()};this.accountPageIndex();return}else{this.accountPageIndex();this._scrollTimeObj=setTimeout(function(){thisTemp.move(num,quick)},this.speed)}};ScrollPic.prototype.pre=function(){var i=this;if(i._state!="ready"){return};i._state="stoping";i.move(-i.pageWidth,true)};ScrollPic.prototype.next=function(i){var I=this;if(I._state!="ready"){return};I._state="stoping";if(I.circularly){I.move(I.pageWidth,true)}else{if(I.scrollContDiv[(I.upright?'scrollTop':'scrollLeft')]>=I.listDiv01[(I.upright?'scrollHeight':'scrollWidth')]-I.frameWidth){I._state="ready";if(i){I.pageTo(0)}}else{I.move(I.pageWidth,true)}}};ScrollPic.prototype.play=function(){var thisTemp=this;if(!this.autoPlay){return};clearInterval(this._autoTimeObj);this._autoTimeObj=setInterval(function(){thisTemp.next(true)},this.autoPlayTime*1000)};ScrollPic.prototype.stop=function(){clearInterval(this._autoTimeObj)};ScrollPic.prototype.pageTo=function(i){var l=this;if(l.pageIndex==i){return};clearTimeout(l._scrollTimeObj);l._state="stoping";var I=i*l.frameWidth-l.scrollContDiv[(l.upright?'scrollTop':'scrollLeft')];l.move(I,true)};ScrollPic.prototype.accountPageIndex=function(){var I=this,i=Math.round(I.scrollContDiv[(I.upright?'scrollTop':'scrollLeft')]/I.frameWidth);if(i==I.pageIndex){return};I.pageIndex=i;if(I.pageIndex>Math.round(I.listDiv01[I.upright?'offsetHeight':'offsetWidth']/I.frameWidth+0.4)-1){I.pageIndex=0};var l;for(l=0;l<I.dotObjArr.length;l++){if(l==I.pageIndex){I.dotObjArr[l].className=I.dotOnClassName}else{I.dotObjArr[l].className=I.dotClassName}}};
