chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Edit with audio editor Audacity",
        id: "Audacity",
        contexts: ["link"]
    });
});


chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "Audacity") {
        var urlxx = info.linkUrl;
        Audacity(urlxx);
    }
});



function Audacity(urlxx) {      
     
  	 var filenamex = Math.floor(Math.random() * 2000000) + ".mp3";

  	
  	if ( (urlxx.indexOf("http://") !=-1) || (urlxx.indexOf("https://") !=-1)) {
  		finalurl =  "https://www.offidocs.com/community/preedit-audacity.php?fileurl="+ encodeURIComponent(urlxx)+"&filename="+ filenamex ;
    	window.open(finalurl,'_blank');
  	}	
  	else {
  		alert("This is not a video. Select a url with a video");
  			
  	}		

	
}



