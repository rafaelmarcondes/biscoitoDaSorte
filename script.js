const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleClick)

function handleClick(event){
  event.preventDefault()

  if(Object.values(btnTry.value).length === 0){

    document.querySelector(".modal-wrapper").classList.add("open")

  }
  
}

btnReset.addEventListener('click',function(){
  document.querySelector(".modal-wrapper").classList.remove("open")
})

