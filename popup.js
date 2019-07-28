(function(){
  var apps_urls = {
    png1: "https://www.offidocs.com/community/preedit-audacity.php",
    png2: "https://www.redcoolmedia.net/appdirect/preaudistudio.php",
    png3: "https://www.redcoolmedia.net/html5-audio-editor/",
    png4: "https://www.redcoolmedia.net/mixer/music",
    files: "https://www.offidocs.com/community/preprefile.php",
    email: "http://www.offilive.com/signin.php",
    usersettings: "https://www.offidocs.com/community/offidocschangeuser.html",
    tel: "https://www.offidocs.com/community/preedit-messagegram.php"
  };

 
  var filexxx = Math.floor(Math.random() * 2000000);
  for (var link_id in apps_urls){
        var url = apps_urls[link_id];
        document.getElementById(link_id).firstElementChild.href = url;
  }
  
  aaa = encodeURIComponent("https://www.offidocs.com/community/preprefile.php");
  document.getElementById("usersettings").firstElementChild.href = "https://www.offidocs.com/community/offidocschangeuser.html?ira=" + aaa;
 
  document.getElementById('status').innerText = `Using Audacity audio editor online with Telegram`;
    

  for (var link_id in apps_urls) {
    var localLabel = chrome.i18n.getMessage("new_" + link_id);
    document.querySelector(`#${link_id} .label`).innerText = localLabel;
  }
  
  document.querySelector(`#png1 .label`).innerText = "AudaCity";
  document.querySelector(`#png2 .label`).innerText = "Sound editor";
  document.querySelector(`#png3 .label`).innerText = "Audio editor";
  document.querySelector(`#png4 .label`).innerText = "Music mixer";
  document.querySelector(`#files .label`).innerText = "File manager";
  document.querySelector(`#usersettings .label`).innerText = "Set userid";
  document.querySelector(`#email .label`).innerText = "Email";
  
  
})();
