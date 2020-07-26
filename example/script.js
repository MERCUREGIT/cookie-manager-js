// window.onload = function(){

// //for(i=2; i<10;i++)
// /* {
// 	var keyValue = 'ngum +i+'=hhsbsjnkkbfuihjjbvfbvjdv' + i;
// 	var now = new Date();
// 	now.setTime(now.getTime() + 24*60*60*1000);

// 	var expires = 'expires=' + now.toUTCString();
// cooke string
// 	var cookie =  keyValue + ';' + expires 
// 	console.log(cookie);

// create cookie
// 	document.cookie = cookie+"secure";
// }

// */ 

// }

// console.log(getCookieValue('loginkey'));


// function getCookieValue(cookieKey)
// {

// var  cookieList= document.cookie.split(';').map(function(cookie){
// console.log(cookie.trim());

// return cookie.trim();
// });




// for(var i=0; i<cookieList.length; i++)
// {
// 	var cookie = cookieList[i].split('=');
// 	var key = cookie[0];
// 	var value = cookie[1];

// 	console.log(key +'-->' + value);
//   if(key===cookieKey){return value;}
// else{return undefined;}


// }

// }

window.onload = function() {
    cookieManager.clear();


}