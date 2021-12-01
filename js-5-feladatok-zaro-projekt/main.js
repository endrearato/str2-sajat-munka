async function request(url = {}){
    try{const response = await fetch(url)
    users = await response.json()
    .then(data => {users = data.users
   


    let tableBody = document.querySelector("#userTable tbody");
    let createTD = (html, parent) => {
        let td = document.createElement("td");
        td.innerHTML = html;
        parent.appendChild(td);
    };
    
    let createButtonGroup = parent => {
        let group = document.createElement("div");
        group.className = "btn-group";
        let btnInfo = document.createElement("button");
        btnInfo.className = "btn-info btn";
        btnInfo.innerHTML = '<i class="bi bi-pencil-fill"></i>';
    
        let btnDanger = document.createElement("button");
        btnDanger.className = "btn-danger btn";
        btnDanger.innerHTML = '<i class="bi bi-trash-fill"></i>';
    
        group.appendChild(btnInfo);
        group.appendChild(btnDanger);
    
        let td = document.createElement("td");
        td.appendChild(group);
        parent.appendChild(td);
    }
    
    
    for (let k in users) {
        let tr = document.createElement("tr");
        for(let value of Object.values(users[k])) {
            createTD(value, tr);
        }
        createButtonGroup(tr);
        tableBody.appendChild(tr);
        
    }
    const deleteUser = document.querySelectorAll('.btn-danger')
    const proba = document.getElementById("demo")
    console.log(proba)

    console.log(deleteUser)
    deleteUser.addEventListener('click', function(){this.style.backgroundColor = "blue"})
})
    }   
    catch(error) {}}
                
request('./json/MOCK_DATA.json')


