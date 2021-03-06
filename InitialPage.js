let botaoLogout = document.getElementById('logout');

botaoLogout.addEventListener("click", async (event) => {
    event.preventDefault();
    
    deleteCookie('id');
    window.location.href = "index.html";

});


function deleteCookie(name) { 
    setCookie(name, '', -1); 
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
