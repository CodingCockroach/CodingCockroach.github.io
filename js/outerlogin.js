function checkInput(){
	var b=document.form1.uin,a=document.form1.pwd;
	if(0==b.value.length){
		b.focus();
		return false;
	}
	if(0==a.value.length){
		a.focus();
		return false;
	}
	document.form1.submit();
	setTimeout(" document.form1.pwd.value = '' ",500);
	return false;
}
function writeLoginPanel(b){
	if(!b||!b.domainlist||-1==b.domainlist.indexOf(".")){
		return;
	}
	var e='return checkInput()',
	    c='<div id="bg" class="bizmail_loginpanel"></div><div id="about" class="bizmail_LoginBox"><img id="about-picture" src="/img/favicon.ico"/><img id="about-close" src="/img/close.png" onclick="hidediv();"/><h4 id="about-name" color:#F00>@CodingCockroach.com</h4><div id="login"><form name="form1" action="https://exmail.qq.com/cgi-bin/login" target="_blank" method="post" onsubmit="'+e+'"><input type="hidden" name="firstlogin" value="false" /><input type="hidden" name="errtemplate" value="dm_loginpage" /><input type="hidden" name="aliastype" value="other" /><input type="hidden" name="dmtype" value="bizmail" /><input type="hidden" name="p" value="" /><span class="fontawesome-user"></span><input type="text" id="user" name="uin" placeholder="Username" class="text" value="" /><input type="hidden" name="domain" value="codingcockroach.com" /><span class="fontawesome-lock"></span><input type="password" name="pwd" id="pass" placeholder="Password" class="text" value="" /><input type="submit" class="" name="" value="Login" />&nbsp;<a href="https://exmail.qq.com/cgi-bin/readtemplate?check=false&t=bizmail_orz" target="_blank"  class="lnk"><span class="icon icon--min">ಠ╭╮ಠ</span>I have forgotten something</a></form></div></div>',
	    d='<div id="divLoginpanelVer" class="bizmail_loginpanel"><div class="bizmail_LoginBox"><form name="form1" action="https://exmail.qq.com/cgi-bin/login" target="_blank" method="post" onsubmit="'+e+'"><input type="hidden" name="firstlogin" value="false" /><input type="hidden" name="errtemplate" value="dm_loginpage" /><input type="hidden" name="aliastype" value="other" /><input type="hidden" name="dmtype" value="bizmail" /><input type="hidden" name="p" value="" /><div class="bizmail_column"><div class="bizmail_inputArea"><input type="text" name="uin" class="text" value="" /></div></div><div class="bizmail_column"><div class="bizmail_inputArea"><input type="password" name="pwd" class="text" value="" /></div></div><div class="bizmail_SubmitArea"><input type="submit" class="" name="" value="Login" /></div></form></div></div>';

	var g=b.domainlist.split(";");
	if(g.length==1){
		var a='<span>#domain#</span><input type="hidden" name="domain" value="#domain#" />';
		var f=a.replace(/#domain#/g,g[0]);
	}
	else{
		var f='<select name="domain">';
		for(i=0;i<g.length;i++){
			f+='<option value="'+g[i]+'">'+g[i]+'</option>';
		}
		f+='</select>';
	}
	if(!b.mode||b.mode=="vertical"||b.mode=="both"){
		document.write(d.replace(/#domainlist#/g,f));
	}
	if(b.mode=="horizontal"||b.mode=="both"){
		document.write(c.replace(/#domainlist#/g,f));
	}
}