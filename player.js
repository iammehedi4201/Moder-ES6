// // let players = document.getElementsByClassName("player");

// // for (const player of players) {
   
// //     //     // player.addEventListener("click",function () {

// //     //     // player.style.color = "red"
        
// //     // })
// // }

// let selectBtn = document.getElementById("addBtn");

// selectBtn.addEventListener("click", function () {

//   let selectContainer = document.getElementById("player-details");

//   let newDiv = document.createElement("div");

//   newDiv.setAttribute("class", "player");

//   newDiv.innerHTML = `

//         <h1 class="player-heading">New Player</h1>
//         <p>Sequi modi necessitatibus similique tempore minima unde, dolorem numquam autem commodi, expedita ad quae
//             culpa nostrum voluptas itaque exercitationem alias beatae illum vitae? Aliquid non nesciunt nobis aut,
//             illum quas?
//         </p> `;

//        selectContainer.appendChild(newDiv);

// //        newDiv.addEventListener("click",function () {

// //        newDiv.style.color = "red"
    
// })

  


// // let selectContainer = document.getElementById("player-details");

// // selectContainer.addEventListener("click",function (event) {


// //     if(event.target.tagName.toLowerCase() == "div")
// //     {
// //         event.target.style.backgroundColor = "gold"
// //     }
// //     else
// //     {
     
        
// //             event.target.parentNode.style.backgroundColor = "gold";
        
// //     }
    
    
// // })


// // function clickItem(event) {
   
// //     console.log("The child Element  count",event.target.childElementCount);

// //     let selectMainHead = document.getElementById("showTheClickTagName");

// //     let catchTheClickElement = event.target.nodeName;

// //     selectMainHead.innerText = "The click Tag Name is -" + catchTheClickElement;
    
// // }

// // document.getElementById("inputValue").addEventListener("input",function (event) {

   
   

  
// // })





//     let players = document.getElementsByClassName("player");

//     for (const player of players) {

          
//         player.addEventListener("click",function () {
            
//             player.style.color  = "red"

//         })
    
// }



// function add(num1,num2 = 0) {


//     // if (num2 == undefined) {

//     //     num2 = 0;
        
//     // }
    
//    const result = num1 + num2;

//    return result;
    
// }

// const result = add(10,20);

// console.log("The result is:",result);


// function concat(firstName,lastName = "kazi") {


//     const output = firstName + " " +lastName;

//     return output;
    
// }

// const output = concat("Mehedi","Hasan");

// console.log("The output is:",output);



let selectContainer = document.getElementById("player-details");

selectContainer.addEventListener("click",function (event) {

    console.log(this,event.target);
    
})

// const selectFirstPlayer = document.getElementById("first-Player");


// selectFirstPlayer.addEventListener("click", (event) =>
// {
//     console.log(this);
// })




