
const drum1music=new Audio("8.mpeg")
const drum2music=new Audio("2.mpeg")
const drum3music=new Audio("3.mpeg")
const drum4music=new Audio("4.mpeg")
const drum5music=new Audio("5.mpeg")
const drum6music=new Audio("6.mpeg")
const drum7music=new Audio("7.mpeg")

const playsound =audio=>{
    const clone =audio.cloneNode()
    clone.play()
    setTimeout(() => {
        (clone.volume==100)
    }, 200);
}
const drumone=document.querySelector(".drum1")
const drumtwo=document.querySelector(".drum2")
const drumthree=document.querySelector(".drum3")
const drumfour=document.querySelector(".drum4")
const drumfive=document.querySelector(".drum5")
const drumginger=document.querySelector(".ginger")
const drum1ginger=document.querySelector(".ginger1")

const playdrumone=()=>{
    playsound(drum1music)
    drumone.classList.add("active") 
    setTimeout(()=>drumone.classList.remove("active"),200)
}
const playdrumtwo=()=>{
    playsound(drum2music)
    drumtwo.classList.add("active") 
    setTimeout(()=>drumtwo.classList.remove("active"),200)
}
const playdrumthree=()=>{
    playsound(drum3music)
    drumthree.classList.add("active") 
    setTimeout(()=>drumthree.classList.remove("active"),200)
}

const playdrumfour=()=>{
    playsound(drum4music)
    drumfour.classList.add("active") 
    setTimeout(()=>drumfour.classList.remove("active"),200)
}

const playdrumfive=()=>{
    playsound(drum5music)
    drumfive.classList.add("active") 
    setTimeout(()=>drumfive.classList.remove("active"),200)
}
const playginger=()=>{
    playsound(drum6music)
    drumginger.classList.add("active") 
    setTimeout(()=>drumginger.classList.remove("active"),200)
}
const play1ginger=()=>{
    playsound(drum7music)
    drum1ginger.classList.add("active") 
    setTimeout(()=>drum1ginger.classList.remove("active"),200)
}
drumone.addEventListener("click",playdrumone)
drumtwo.addEventListener("click",playdrumtwo)
drumthree.addEventListener("click",playdrumthree)
drumfour.addEventListener("click",playdrumfour)
drumfive.addEventListener("click",playdrumfive)
drumginger.addEventListener("click",playginger)
drum1ginger.addEventListener("click",play1ginger)





