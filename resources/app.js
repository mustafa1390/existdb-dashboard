function postRoute(){
    var loc = window.location.href;

    if(loc.indexOf('#') != -1){
        var ref = loc.substring(loc.indexOf('#'));
        document.getElementById('route').value = ref;
    }
}

function passRoute(){
    var loc = window.location.href;
    var ref = loc.substring(loc.indexOf('#'));
    console.log('ref ' ,ref );
}