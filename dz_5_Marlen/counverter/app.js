const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#rub")


const convert = (elem, elem2, elem3) => { 
    
    
    elem.addEventListener("input", () => {
      const request = new XMLHttpRequest()
      request.open("GET", "data.json")
      request.setRequestHeader("Content-type", "application/json")
      request.send()
      request.addEventListener("load",()=>{
        const resp = JSON.parse(request.response)
       
        switch (elem){
            case som:
                elem2.value = (elem.value/resp.usd).toFixed(2)
                elem3.value = (elem.value/resp.rub).toFixed(2)
                break;
            case usd:
                elem2.value = (elem.value*resp.usd).toFixed(2)
                elem3.value = ((elem.value*resp.usd)/resp.rub).toFixed(2)
                break;
            case rub:
                elem2.value = (elem.value*resp.rub).toFixed(2)
                elem3.value = ((elem.value * resp.rub)/resp.usd).toFixed(2)
                break;
            }
            if(elem.value ===""){
                elem2.value = ""
                elem3.value = ""
            }

        
      })
})
}

convert(som,usd,rub)
convert(usd,som,rub)
convert(rub,som,usd)
