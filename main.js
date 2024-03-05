//show menu

const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
console.log('AA');
    //validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle','nav-menu');
