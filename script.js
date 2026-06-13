const data={
1995:{title:'The Early Web',text:'Netscape dominates and websites are mostly static HTML.'},
1998:{title:'Google Begins',text:'Google starts changing how people find information.'},
2001:{title:'Wikipedia Launches',text:'Collaborative knowledge becomes mainstream.'},
2004:{title:'Social Media Era',text:'Facebook launches and changes online interaction.'},
2005:{title:'YouTube Appears',text:'Video becomes a core internet medium.'},
2007:{title:'iPhone Launch',text:'Mobile internet explodes.'},
2010:{title:'App Economy',text:'Apps become a major software platform.'},
2020:{title:'Pandemic Internet',text:'Remote work and online life accelerate.'},
2023:{title:'Generative AI',text:'AI tools transform content creation.'},
2026:{title:'Future Web',text:'AI-native experiences dominate digital products.'}
};

const slider=document.getElementById('yearSlider');
const yearTitle=document.getElementById('yearTitle');
const eventTitle=document.getElementById('eventTitle');
const eventText=document.getElementById('eventText');

function update(){
 const year=slider.value;
 yearTitle.textContent=year;
 let chosen=data[1995];
 Object.keys(data).forEach(y=>{
   if(year>=y) chosen=data[y];
 });
 eventTitle.textContent=chosen.title;
 eventText.textContent=chosen.text;
}
slider.addEventListener('input',update);
update();
