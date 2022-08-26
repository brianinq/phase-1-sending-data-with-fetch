// Add your code here
function submitData(name, email) {
    const formData = {
    name: name,
    email: email,
    };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData)
  })
  .then((res)=>res.json())
  .then((json)=>{
    document.body.innerHTML = json
    return
    })
  .catch((err)=>{
    const div = document.createElement("div")
    const body = document.querySelector("body")
    div.textContent = err.message
    body.appendChild(div)
  })
}
