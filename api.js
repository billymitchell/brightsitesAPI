
const runButton = document.getElementById("run")
let outPut = document.getElementById("output")


// Get method 
let method = document.getElementsByName('method');
for (var i = 0, length = method.length; i < length; i++) {
  if (method[i].checked) {
    methodValue = method[i].value;
  }
}

// get request type
let requestType = document.getElementsByName('requestType');
for (var i = 0, length = requestType.length; i < length; i++) {
  if (requestType[i].checked) {
    requestTypeValue = requestType[i].value;
  }
}


const runAPI = () => {

    let API_KEY = document.getElementById("API_KEY").value
    let BASE_URL = document.getElementById("Base_URL").value

    fetch(`${BASE_URL}api/v2.0.0/${requestTypeValue}?token=${API_KEY}`, {
        method: methodValue,
        mode: 'no-cors',
        redirect: 'follow',
        // headers : { 
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //    }
        // body: JSON.stringify(data)
    })
    .then(response => {
        console.log(response)
    })
    .then(response =>{
        outPut = data
    })
    // .then(data => console.log(data))
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}

runButton.addEventListener("click", runAPI)

  

