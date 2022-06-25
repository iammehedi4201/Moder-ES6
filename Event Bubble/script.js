// let grandfather = document.getElementById("grandfather")

// // .addEventListener("click",function (event) {
     
// //     console.log(this,event.target);

// //     event.target.parentNode.removeChild(event.target)
// // })

let parent = document.getElementById("father");

parent.addEventListener("click",function (event) {
     
    console.log(this,event.target);
    
    event.target.parentNode.removeChild(event.target)
})

let button = document.getElementById("btn");

let child = document.querySelectorAll(".item");



// for (let i = 0; i < child.length; i++) {
//     const element = child[i];

//     element.addEventListener('click',function (event) {
        
         
//           console.log(event.target);
//           console.log(this);
//         // console.log(event.target.innerText);
//         // console.log(event.target.parentNode);

//         event.target.parentNode.removeChild(event.target)

//     })
    
    
// }

button.addEventListener("click",function (event) {

    let newItem = document.createElement("li");

    newItem.innerText ="Mobile cover";

    parent.appendChild(newItem);
    
})




