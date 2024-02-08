//let cln = document.getElementsByClassName('three')
//cln.style.color = "red"

/*let hjj=document.querySelector("#mmm")
hjj.style.backgroundColor='green'

let qwe=document.querySelector("#uuu")
qwe.style.backgroundColor='blue'

let rrr=document.querySelector('#aaa')
rrr.style.backgroundColor='red'

let nnn=document.querySelector(".three")
nnn.style.backgroundColor='aqua'

let ppp=document.querySelector(".thre")
ppp.style.backgroundColor='orange'*/

//let hjj=document.getElementById('uuu')
//hjj.style.color='red'

//let qwe=document.getElementById('aaa')
//qwe.style.color='blue'

//let baton=document.getElementById('ujj')
//baton.style.color='green'

//let hook=document.getElementsByClassName('three')[0]
//hook.style.color='purple'

//let pok=document.getElementsByTagName('h4')[0]
//pok.style.color='grey'

/*const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
*/

/*let hhk=document.getElementById('one')
hhk.style.color='violet'

let llo=document.getElementById('two')
llo.style.color='pink'

let bbb=document.getElementById('three')
bbb.style.color='indigo'*/


//getelementbyclassname(nodelist--array like structure,indexes)

/*let headings=document.getElementsByClassName('one')
headings[3].style.color='white'
headings[3].style.backgroundColor='green'

let jjv=document.getElementById('button')
jjv.style.backgroundColor='aqua'
jjv.style.color='white'

let too=document.getElementsByClassName('special')
console.log(too)

let lists=document.querySelectorAll('.special')
lists.forEach(function (item) {
  console.log(item)
  item.style.color='red'
})*/


//console.log(yyu)

//childnode returns all child nodes including white spaces which is treated as a text node
//first child
//last child
//child node

//console.log(kjk)

//console.log(jvc.firstChild)
//console.log(jvc.lastChild)

//previoussiblings and nextsiblings return white spaces

//console.log(yyf)

//let second=yyf.nextSibling
//console.log(second)

//previouselementsibling it does not return white spaces


//console.log(ggh)


//console.log(yyy)


/*
1. click event- it fires after full action occurs
2. mouse down- fires when a button is pressed
3. mouse enter- fires when a button is moved over an element
4. mouse leave- fires when a button is moved out of an element 

*/
let yyy=document.querySelector('.third')

//console.log(heding)




let btn=document.querySelector('.button')
let heding=document.querySelector('.heads')


function cb(){
  heding.classList.contain('heads')
}

btn.addEventListener('click',cb)
//console.log(btn)

/*btn.addEventListener("click",function() {
  heding.classList.add('first')
})*/

let rrr=document.querySelector('h1')
ssss=rrr.classList.contains('heads')


if (ssss) {
  console.log('true')
} else {
  console.log('false')
}

let btns=document.querySelectorAll('.btn')
btns.forEach(function(bet){
  bet.addEventListener('click',function(e){
   // console.log('you have clicked me')
   e.currentTarget.style.color='green'
  })
  
})


//console.log(aaaa)

//currenttarget-they always refer to the element which the event handler has been attached to
//target-it identifies the element in which the event occured














