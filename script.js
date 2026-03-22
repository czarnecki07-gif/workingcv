function generate(){
window.print();
}

document.querySelectorAll("input,textarea").forEach(el=>{
el.addEventListener("input",update)
})

document.getElementById("photo").onchange=e=>{
let r=new FileReader()
r.onload=()=>{document.getElementById("img").src=r.result}
r.readAsDataURL(e.target.files[0])
}

function update(){
pname.textContent=name.value
ptitle.textContent=title.value
pprofile.textContent=profile.value
pexp.textContent=exp.value
pskills.textContent=skills.value
pedu.textContent=edu.value
}
