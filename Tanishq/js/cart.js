let pro=JSON.parse(localStorage.getItem("wish")) || []

function display(data){

    document.getElementById("product").innerHTML=""

    data.map((el,i)=>{

        let img=document.createElement("img")

        img.setAttribute("src",el.img)

        img.setAttribute("class","w-100")

        let icon=document.createElement("i")

        icon.setAttribute("id","icon")

        icon.setAttribute("class","ri-delete-bin-line")

        icon.addEventListener("click",function(){
            data.splice(i,1)
            localStorage.setItem("wish",JSON.stringify(pro))
            display()
        })

        let h6=document.createElement("h6")

        h6.innerText=el.title

        h6.style.fontSize="15px"

        let p=document.createElement("p")

        let  dis=document.createElement("p")
        
        if(el.discount>0){
            p.innerHTML=`₹${Math.floor(el.prise-(el.prise*el.discount/100))} <del>₹${el.prise}</del> `
            
            p.style.float="left"

            dis.innerText=`Flat ${el.discount}% off`

            dis.style.color="red"
            dis.style.fontWeight="500"
            dis.style.float="right"
            dis.style.fontSize="13px"

        }else{
            p.innerText="₹ "+el.prise
            dis.innerText=" "
        }

        let btn=document.createElement("button")

        btn.innerHTML="Check Delivery Date"

        btn.setAttribute("id","btn")

        let div=document.createElement("div")

        div.setAttribute("class","col-xl-3","col-lg-12")

        div.setAttribute("id","m-1")

        div.append(img,h6,p,dis,btn,icon)

        document.querySelector(".product").append(div)

    })
}

display(pro)
