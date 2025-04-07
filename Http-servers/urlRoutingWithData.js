/* url routing : it is a mechanism to redirect from one application url to another , to extract url path from req.url , url parsing is to be done */

import http from 'http';
import url from 'url';

http.createServer((req,res)=>{  
 var urlobj=url.parse(req.url,true);    
 var msg;
 var urlRoute="<h2>Click on the link below to redirect</h2><a href='/home'>Home page</a><br/><br/><a href='/about'>About page</a><br/><br/><a href='/contact'>Contact page</a><br/><br/><a href='/service'>Service page</a><br/><br/><a href='/register'>Register page</a><br/><br/><a href='/login'>Login page</a>";

 if(urlobj.pathname=="/" || urlobj.pathname=="/home")
  msg="<h1>/ or /home url invoked</h1>";
 else if(urlobj.pathname=="/about")
  msg="<h1>/about url invoked</h1>";    
 else if(urlobj.pathname=="/contact")
  msg="<h1>/contact url invoked</h1>";
 else if(urlobj.pathname=="/service")
  msg="<h1>/service url invoked</h1>";
 else if(urlobj.pathname=="/register")
  msg="<h1>/register url invoked</h1>";
 else if(urlobj.pathname=="/login")
 {
  const users=urlobj.query;  
  console.log("Username : "+users.username);
  console.log("Password : "+users.password);  
  msg="<h1>/login url invoked</h1>";
 } 
 else
  msg="<h1>Invalid url invoked</h1>";
 res.write(msg+urlRoute);
 res.end();     
}).listen(8081);
console.log("server invoked at link http://localhost:8081");