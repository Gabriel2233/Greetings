const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')

const greetingMessage = document.querySelector('#greeting')
const greetingPage = document.querySelector('#greeting-page')

let name,
     password,
     userData,
     hello;

const handleChange = () => {
     name = usernameInput.value
     password = passwordInput.value
}

const handleSubmit = () => { 

    userData = {
        name, 
        password
    }
   
    fetch(`https://fourtonfish.com/hellosalut/?ip=${userData.password}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        hello = data.hello
        
        const message = `${hello}, ${userData.name}`

        greetingMessage.innerHTML = message
    })

    greetingPage.classList.toggle('active')
}

const handleLogout = () => {
    greetingPage.classList.remove('active')
   }


