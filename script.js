const projects=[
{title:"Luxury Living Room",img:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"},
{title:"Modern Bedroom",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"},
{title:"Office Interior",img:"https://images.unsplash.com/photo-1615874959474-d609969a20ed"}
];

const container=document.getElementById("projectsData");

projects.forEach(p=>{
const card=document.createElement("div");
card.className="card";
card.innerHTML=`<img src="${p.img}"><h3>${p.title}</h3>`;
container.appendChild(card);
});

function go(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function animate(id,target){
let i=0;
const el=document.getElementById(id);

const interval=setInterval(()=>{
i+=Math.ceil(target/50);
if(i>=target){
i=target;
clearInterval(interval);
}
el.innerText=i;
},30);
}

window.onload=()=>{
animate('s1',150);
animate('s2',100);
animate('s3',12);
};