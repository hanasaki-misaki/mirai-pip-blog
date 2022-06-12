	//弹窗
	function setCookie(www_wap3_cn, value, expire)
	{
		window.document.cookie = www_wap3_cn + "=" + escape(value) + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()));
	} 
	function getCookie(www_wap3_cn)
	{
		var search = www_wap3_cn + "=";
		if (window.document.cookie.length > 0)
		{ // if there are any cookies
		  offset = window.document.cookie.indexOf(search);
			if (offset != -1)
			{ // if cookie exists
			    offset += search.length;
			// set index of beginning of value
			  end = window.document.cookie.indexOf(";", offset)
			// set index of end of cookie value
			  if (end == -1)
			    end = window.document.cookie.length;
			  return unescape(window.document.cookie.substring(offset, end));
			}
		  }
	  return null;
	}
	function register(www_wap3_cn) {
		var today = new Date();
		var expires = new Date();
		expires.setTime(today.getTime() + 1000*60*60*24);
		setCookie("wap3_cn", www_wap3_cn, expires);
	}
	var exitURL="";//这个地方放置你的HTML代码
	function openWin() {
		var c = getCookie("wap3_cn");
		if (c != null) {
		  return;
		}
		register("wap3_cn");
		var featureStr="''";
		featureStr="'top=0,left=0,width=300,height=100,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no,center:no'";//这里是设置你上面的HTML弹出的高度和宽度的
		self.focus();
		var ExitWindow = window.open(exitURL,'', featureStr);
		ExitWindow.focus();
	}
	setTimeout("openWin()",5000);
	window.focus();