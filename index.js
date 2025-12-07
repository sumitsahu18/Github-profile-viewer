
  const input =  document.getElementById('input')

   document.getElementById('btn1').addEventListener('click',(e)=>{
    e.preventDefault();        
     let username  = input.value;
     fetchfun(username);
   }) 
   async function fetchfun(username){
      let response = await fetch(`https://api.github.com/users/${username}`)
      let result = await response.json()
      console.log(result)
       displayuser(result);
   }
   function displayuser({
      avatar_url,
      name,
      bio,
      followers,
      following,
      public_repos,
      html_url
   }){
    if(!avatar_url){
         document.getElementById('body').innerHTML = `<h1>user not defined</h1>`
         return
    }
    if(!bio){
        bio = '';
    }
        document.getElementById('body').innerHTML = 
          `   <div class="left">
            <div>
                <img src=${avatar_url} alt="" class="img1">
            </div>
            <div class="name">${name}</div>
            <div class="bio">${bio}</div>
        </div>
        <div class="right">
         <div class="rightup">
            <div class="info">
                <p>Followers</p>
                <p>${followers}</p>
            </div>
            <div class="info">
                <p>Following</p>
                <p>${following}</p>
            </div>
            <div class="info">
                <p>Repo</p>
                <p>${public_repos}</p>
            </div>
         </div>
         <a href = ${html_url} target ='_blank' class="rightdown">
         <div class="rightdown">
            <button class="btn2">visit profile</button>
         </div>
         </a>
        </div>`
   }
