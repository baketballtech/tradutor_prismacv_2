function apanha(id){
    return document.getElementById(id)
}

async function atualiza(texto){
    let data=await fetch("https://api.jsonbin.io/v3/b/687826e16063391d31af1d8e",{
        method:"get",
        headers:{
            "X-Master-Key":"$2a$10$FHRkxcbaYpizUHCLChg46ODGDOxfAQ.v2OY5Qj9GOyP/kgJSvzfaq"
        }
    })

    let res=await data.json()
    console.log(res.record)
    let opt=res.record
    

    let tr_en=String(apanha("tr_en").value).trim()
    let tr_pt=String(apanha("tr_pt").value).trim()
    let tr_ro=String(apanha("tr_ro").value).trim()
    let tr_fr=String(apanha("tr_fr").value).trim()
    let tr_nl=String(apanha("tr_nl").value).trim()
    let tr_es=String(apanha("tr_es").value).trim()
    let tr_it=String(apanha("tr_it").value).trim()

    let valores=[tr_en,tr_pt,tr_ro,tr_fr,tr_nl,tr_es,tr_it]
    let len=valores.length-1
    let lingua=["en","pt","ro","fr","nl","es","it"]

    console.log(opt[len][lingua[len]][texto])

    while(len>=0){
        opt[len][lingua[len]][texto]=valores[len]
        len-=1
    }

    console.log(opt)


    await fetch("https://api.jsonbin.io/v3/b/687826e16063391d31af1d8e",{
        method:"put",
        headers:{
            "X-Master-Key":"$2a$10$FHRkxcbaYpizUHCLChg46ODGDOxfAQ.v2OY5Qj9GOyP/kgJSvzfaq",
            "Content-type":"application/json"
        },
        body:JSON.stringify(opt)
    })
    alert("Ja foi...\ntemos um novo traduzido")
    

    
}

document.getElementById("envia").addEventListener("click",()=>{
    let este=String(apanha("texto").value).trim()
    alert("calme algum segundos...")


    atualiza(este)
})


