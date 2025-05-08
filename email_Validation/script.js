 let result = {
    "tag": "email",
    "valid": false,
    "message": "Invalid email address format."}
submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()

    console.log("submit button clicked")
    document.getElementById("result").innerHTML = `<img width="50",height="50" src="img/loading.svg" alt="LOADING...">`

    let key = "ema_live_ApkSlsjacZPK4AWnKjBQlmTAtbvM7OtXV4vpAhyF"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if (key == "valid") {
            if (result[key] == true) {
                str = str + `<div style="color:green"> ${key}:${result[key]}</div>`
            } else {
                str = str + `<div style="color:red"> ${key}:${result[key]}</div>`
            }
        } else if (key == "message") {
            str = str + `<div style="color:blue"> ${key}:${result[key]}</div>`
        } else
        
    str = str + `<div> ${key}:${result[key]}</div>`

    }
    console.log(str)
    document.getElementById("result").innerHTML = str
}
)
 



