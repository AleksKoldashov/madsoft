import React from 'react';

export default function MyProgers(){
var result = "";
for (let i in localStorage) {
    if (!localStorage.hasOwnProperty(i)) {
                  continue;
    }
const str = localStorage.getItem(`${i}`)as string
  result +=  str;
}
const regex = /false|true/gi
const arr = result.match(regex)
const num = arr?.length as number
const prog = ((num?num:0)/10)*100



localStorage.setItem('count', `${num}`)
localStorage.setItem('progres', `${prog}`)
return <>{prog}</>
}