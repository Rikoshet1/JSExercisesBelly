
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

//1.
companies.forEach(c=>console.log(c.name))

//2.
companies.forEach(c=> {
   if(c.start>1987)
    console.log(c.name)
  }
)

//3.
let filterCompaiesArr=companies.filter(c=>c.category=="Retail")
filterCompaiesArr.forEach(c=>c.start++)  
let div=document.createElement("div")
filterCompaiesArr.forEach(c=>{
 let p=document.createElement("p")
 p.innerHTML=`name:${c.name} category: ${c.category} start: ${c.start} end: ${c.end}` 
 div.appendChild(p)
})
document.body.appendChild(div)

//4.
companies.sort((company1,company2)=>{
  return company1.end-company2.end
})
console.log(companies)

//5.
ages.sort((age1,age2)=>age2-age1)
console.log(ages)

//6.
let sumOfAges=ages.reduce((total,num)=>total+num,0)
console.log(sumOfAges)

//7.
//ככה היה כתוב לעשות את זה בחומר שקבלנו ללמוד על es-6אבל בפועל זה לא רץ 
let {name,category}=companies[0]
let obj= {name,category}
  console.log(obj)



//8.
function sumOfNumbersArry(...numbers){
  let sum=0;
  numbers.forEach(n=>sum+=n)
  return sum
 }
 let sum=sumOfNumbersArry(4,5,6,7,8,9,0)
 console.log(sum) 

//9.
function CreateNewArr(...argumentes){
   let arr=[]
    argumentes.forEach(a=>{
    if(a instanceof Array){
    arr.push(...a)
    }
    else{
      arr.push(a)
    }   
   return a
  }) 
  return arr
}
let arr=CreateNewArr(9,"kgjk",[6,7])
console.log(...arr)

//10.
let {address:{street}}=person
console.log(street)

//11.
var increaseBy1 = (function(n) {
  return function() {
    n += 1;
    return n;
  }
}(0)); 
console.log(increaseBy1());
console.log(increaseBy1());
console.log(increaseBy1());

//12.
function urlToObject(url){
  url=url.substr(url.lastIndexOf('?')+1);
  let urlObject={}
  while(url!=""){
      key= url.substring(0,url.indexOf("="))
      if(url.indexOf('&')!=-1)
         value=url.substring(url.indexOf("=")+1,url.indexOf("&"))         
      else
         value=url.substring(url.indexOf("=")+1)     
      urlObject[key]=value    
      if(url.indexOf('&')!=-1)
       url=url.substr(url.indexOf("&")+1)
      else
       url=""
  }
  console.log(urlObject)  
}

urlToObject("a/b/c?name=1111&code=11")



