module.exports = function s(a,b,c,x,y,z,f,i){
  x=typeof a=='object'?a:document.body
  y=typeof a=='object'?b:a
  z=x.querySelectorAll(y)
  f=typeof b=='function'?b:c
  if(f)for(i=0;i<z.length;)f(z[i++],x)
  return z[0]
}
