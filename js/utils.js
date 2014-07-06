



if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    function Log(text) {
        JSI.showLog(text);
    }
}else{
    function Log(text) {
        console.log(text);
    }
}