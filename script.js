
const data={
1995:{title:'The Early Web',text:'Static HTML pages and dial-up connections define the internet.',fact:'Most users connected at 28.8–56k speeds.',users:'16 Million',era:'Web 1.0'},
1998:{title:'Google Begins',text:'Search becomes dramatically more useful.',fact:'Google changes how information is discovered.',users:'147 Million',era:'Search Era'},
2001:{title:'Wikipedia Launches',text:'Knowledge becomes collaborative.',fact:'Anyone can contribute information.',users:'513 Million',era:'Knowledge Web'},
2004:{title:'Social Media',text:'Online identity and sharing take off.',fact:'Facebook launches.',users:'817 Million',era:'Social Web'},
2005:{title:'YouTube',text:'Video becomes mainstream.',fact:'User-generated video explodes.',users:'1 Billion',era:'Video Revolution'},
2007:{title:'iPhone Launch',text:'The mobile internet era begins.',fact:'Apps transform computing.',users:'1.2 Billion',era:'Mobile Era'},
2010:{title:'App Economy',text:'Smartphones dominate digital life.',fact:'App stores become ecosystems.',users:'2 Billion',era:'Apps Everywhere'},
2020:{title:'Pandemic Internet',text:'Remote work and digital communication surge.',fact:'Video conferencing becomes essential.',users:'4.5 Billion',era:'Remote World'},
2023:{title:'Generative AI',text:'AI assistants become mainstream.',fact:'Content creation changes rapidly.',users:'5.3 Billion',era:'AI Boom'},
2026:{title:'Future Internet',text:'AI-native experiences are the norm.',fact:'Personal agents help navigate the web.',users:'6+ Billion',era:'AI Native'}
};

const s=document.getElementById('yearSlider');

function update(){
const y=+s.value;
let chosen=data[1995];
Object.keys(data).forEach(k=>{ if(y>=k) chosen=data[k]; });

yearTitle.textContent=y;
selectedYear.textContent=y;
eventTitle.textContent=chosen.title;
eventText.textContent=chosen.text;
factText.textContent='💡 '+chosen.fact;
users.textContent=chosen.users;
era.textContent=chosen.era;
}

s.addEventListener('input',update);
randomBtn.onclick=()=>{
s.value=Math.floor(Math.random()*32)+1995;
update();
};
update();
