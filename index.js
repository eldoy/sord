module.exports=function s(a,b,c,x,y,z,f,i){if(typeof a=='object'){x=a;y=b}else{x=document.body;y=a}z=x.querySelectorAll(y);if(f=typeof b=='function'?b:c)for(i=0;i<z.length;)f(z[i++],x);return z[0]}
