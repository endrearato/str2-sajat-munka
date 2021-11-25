
const headsSection = document.getElementById('facebook');
let heads = []
async function request(url = {}){
    try{const response = await fetch(url)
    heads = await response.json()
        //console.log(heads)
        function compare( a, b ) {
            if ( a.name < b.name ){
              return -1;
            }
            if ( a.name > b.name ){
              return 1;
            }
            return 0;
          }
          
          heads.sort( compare );
        heads.forEach(head => {
                
                    if(!head.dead && head.name !== "Roose Bolton"){
                        headsSection.innerHTML += `
                        <div class="portrai">
                        <img class="show" src="${head.portrait}">
                        <h3> ${head.name} </h3>
                        </div>`
                    } else{}                                       
                    })
                    }
    catch(error) {}
                }   
                request('./json/got.json')

setTimeout(function(){writeToTheAside()}, 500)
function writeToTheAside() {                   
const asideSection = document.querySelector('aside')
//console.log(asideSection)                    
const proba = document.querySelectorAll('.portrai')
    for(let i = 0; i<proba.length;i+=1){
        proba[i].addEventListener('click', function(){heads.forEach(head => {
        asideSection.innerHTML += `
        <div class="container">
        <img class="show" src="${head.picture}">
        <h4> ${head.name} </h4>
        <img class="bage" src="./assets/houses/${head.house}.png">
        <p>${head.bio}</p>
        </div>`                         
        })
        })
        }}



const details = document.querySelectorAll('.aside')
