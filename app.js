$(document).ready(function() {
   var url = document.URL;
   var fbid = url.substring(url.indexOf('?')+1)
   document.getElementById('fbid').setAttribute('value',fbid)
});