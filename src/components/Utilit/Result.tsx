import React from 'react';

export default function Result(){
var result = "";
for (var i in localStorage) {
    if (!localStorage.hasOwnProperty(i)) {
                  continue;
    }
const str = localStorage.getItem(`${i}`)as string
  result +=  str;
}
const regex = /true/gi
const arr = result.match(regex)
const num = arr?.length as number
const proc = (num/10)*100
return<>
    {proc ? <>{proc}%</>:<p>Все плохо</p>}
    </>
}