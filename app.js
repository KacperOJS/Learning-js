const root = document.getElementById('root');
const button=document.querySelector('.button')
const tablica = [1,2,3,4,5,6,7,8,9];
const tablica2 = [10,20,30,40,39,050,060,070,080,090];

console.log(tablica);
console.log(tablica2);
const tablica3 = [...tablica,...tablica2];
console.log(tablica3);
const tablica4 = tablica.concat(tablica2)
console.log(tablica4);

const words = ['miska','rysiek','dawid','231231312','3213123131'];

const rezultat = words.filter((e)=>{
    return e.length !== 5
})

const znajdowanie = ()=>{
    const znajdz = tablica2.find(element => element >30)
    console.log(znajdz);
}
znajdowanie()

const dlakazdego  =() =>{
    const kazdy = words.forEach(element => 
        {
            console.log(JSON.parse(JSON.stringify(element)))
        })
}
dlakazdego();
const beasts = ['ant','','', 'bison', 'camel', 'duck', 'bison','giraff'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

console.log(rezultat);
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

const obiekt  =
[
    {   
        name:'kacper',
        age:19,
    },
    {
        name:'rysiek',
        age:45,
    },
    {
        name:'Malgorzata',
        age:9,
    },
    {
        name:'miska',
        age:13,
    },
    {
        name:'dawid',
        age:29,
    },

]

console.log(obiekt);


console.log(JSON.stringify(obiekt));
root.innerText = JSON.stringify(obiekt,null,2)
let kazdy;
const obiektDlaKazdego = (e) =>{
    return kazdy += e.name
}

obiekt. forEach(obiektDlaKazdego);
console.log(kazdy);

const nowaKopia = obiekt.map((copy)=>{
    return `Nazywam sie ${copy.name} i mam tyle ${copy.age} lat`
})
root.innerText =  (JSON.stringify(nowaKopia,null,2))

const mySet = new Set();
mySet.add(20)
console.log(mySet);
class Person {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    hello(){
        console.log(`witaj ${this.name}`);
    }
    set fullName(name){
        console.log(name);
        if(name.includes(' ')) this.name = name;
        
        else console.log(`${name} nie jest full name`);
    }
}
// const nowamapa = obiekt.map()
const nazwa = new Person('bapi ','lize klej');
console.log(nazwa);
// nazwa.fullname();
let root2 = document.getElementById('root2');
let ludzie;
async function fetchRandomUser() {
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      console.log(data);
      const user = data.results[0];
      const imgUrl = user.picture.large;
      const name = `${user.name.first} ${user.name.last}`;
      return { imgUrl, name };
    } catch (error) {
      console.error(error);
    }
  }
  fetchRandomUser().then(({imgUrl, name}) => {
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    document.body.appendChild(imgElement);
  
    const nameElement = document.createElement('p');
    nameElement.textContent = name;
    document.body.appendChild(nameElement);
  });
 

const fetchRandomDataUser = (e)=>{
    
}
button.addEventListener('click',function(){
  fetchRandomUser().then(({imgUrl, name}) => {
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    document.body.appendChild(imgElement);
  
    const nameElement = document.createElement('p');
    nameElement.textContent = name;
    document.body.appendChild(nameElement);
  });
})


for(let i=0; i<=15; i++){
    console.log(i);
}

const users = [
        {
            id:1,
            name:'Haaland',
            isActive:true,
            age:20,
        },
        {
            id:2,
            name:'Ronaldo',
            isActive:false
        },
        {
            id:3,
            name:'Messi',
            isActive:true,
            age:20,
        },
]
const newMap =users.map((user)=>user.name)

const names =[]
const na =[]
for(let i=0; i < users.length; i++){
    if(users[i].isActive){
        na.push(users[i].name)
    }
}

users.forEach((user)=>{
    names.push(user.name)
})
// for(let i=0; i < users.length; i++){
//     names.push(users[i].name)
    
// }
console.log(newMap);
console.log(names);

const nowamapaq = users.sort((user1,user2)=>user1.age<user2.age ? 1 :-1 ).filter((user)=>user.isActive).map((user)=>{
return user.name
})
console.log(nowamapaq);
console.log(na);