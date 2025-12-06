
 const input = document.getElementById('int')
    async function fecthuser(username) {
        let response = await fetch(`https://api.github.com/users/${username}`)
        let result =   await response.json()
        dispalyuser(result);
    }
 document.getElementById('btn').addEventListener('click',(e)=>{
          e.preventDefault();
        let username = input.value;
        fecthuser(username)
 });
   function dispalyuser({avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url}){  
        if(!avatar_url){
              document.getElementById('userhai').innerHTML =  `<h1>user not defined</h1>`
              return
        }
        if(!bio){
            bio = '';
        }
            document.getElementById('userhai').innerHTML =  
       
         `<div class="firstdiv">
                <div>
                    <img src=${avatar_url} class="photo">
                </div>
                <div>${name}</div>
                <div>${bio}</div>
            </div>
            <div class="seconddiv">
                <div class="content">
                    <div class="number">
                        <p>follower</p>
                        <p>${followers}</p>
                    </div>
                    <div class="number">
                        <p>following</p>
                        <p>${following}</p>
                    </div>
                    <div class="number">
                        <p>repo</p>
                        <p>${public_repos}</p>
                    </div>
                </div>
                
                <a href = ${html_url} target ='_blank' class="visit"> 
                <div class="visit">
                    visit profile
                </div>
                </a>
            </div>
        </div>
    </div>`
     }
     

 
   