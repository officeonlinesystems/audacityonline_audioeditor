(function() {
	
	var styler = document.createElement("div");
  	styler.setAttribute("style","border: solid 3px Red;width:auto;height:auto;top:100px;left:0;right:0;text-align:center;background-color:#ffffff;color:#000000;");
 	styler.innerHTML = "<h2>Saving into Clipboard to be pasted in Telegram</h2>";
 	document.body.appendChild(styler);
 	
	setTimeout(function()
 	{
   		styler.parentNode.removeChild(styler);
   		
 	},10);

})();