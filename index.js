// Add your code here

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-type"= "application/json",
      "Accept" = "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
}
