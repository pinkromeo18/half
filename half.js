
import "https://cdnjs.cloudflare.com/ajax/libs/split.js/1.6.5/split.min.js"

//
var fn={}
fn.i3=(d)=>{
  if(typeof d !=='string') return d
  var el=document.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
}
fn.q=(s,doc=document)=>{return doc.querySelector(s)};
fn.ce=(d=>document.createElement(d))
fn.a2=function(me,p){p.appendChild(me);return me}
fn.p2=function(me,p){p.insertBefore(me,p.firstElementChild/*p.firstChild*/); return me}
fn.as2=function(me,p){p.parentNode.insertBefore(me,p.nextElementSibling/*nextSibling*/);return me}
fn.ps2=function(me,p){p.parentNode.insertBefore(me,p);return me}
//

export function half(){
  var temp=`
<div id="half" class="split">
    <div id="left-scroll"><div id="left"></div></div>
    <div id="right-scroll"><div id="right"></div></div>
</div>
`
  var $half=fn.i3(temp);
  var $left=fn.q('#left',$half)
  var $right=fn.q('#right',$half)

  fn.a2($half,document.body);
  Split(['#left-scroll','#right-scroll'])

  return {$half,$left,$right}
}
