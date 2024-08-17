// // let number;

// // const generate_number = () => {
// //     let n1 = Math.random()
// //     let n2 = n1 * 10
// //     n2 = Math.trunc(n2)
// //     n2 = (n2 % 6) + 1
// //     number = n2
// //     console.log(number);

// // }

// // let generateNumberClick = () => {
// //     document.querySelector('.first-button').style.display = 'none';

// //     setTimeout(() => {
// //         generate_number()
// //         document.querySelector('#number').value = '';
// //         document.querySelector('.box').style.visibility = 'visible';
// //     }, 1000)
// // }

// // const check_number = () => {
// //     let value = document.querySelector('#number').value
// //     console.log(value)

// //     if (value == number) {
// //         alert('congrats, you won the game')
// // //         const imgDiv=document.getElementById('imgDiv')
// // //         const h3=document.createElement('h3')
// // // h3.textContent=value
// // //         imgDiv.style.background='green'
// // //         imgDiv.appendChild(h3)
// //     } else {
// //         // alert('oops!! your guess is wrong')
// //         alert('Oops!! Your guess is wrong.');
// //         // imgDiv.style.background = 'red';
// //         // imgDiv.innerHTML = `<img src="question_mark.jpg" alt="Try again" style="width: 100px;">`;
// //     }
// //     generateNumberClick()
// // }

let number;
let score = 0;

const generateNumber = () => {
  number = Math.floor(Math.random() * 6) + 1;
  console.log("Generated Number:", number);
};

const generateNumberClick = () => {
  document.querySelector(".first-button").style.display = "none";

  setTimeout(() => {
    document.querySelector(".box").style.visibility = "visible";

    const imgDiv = document.getElementById("imgDiv");
    imgDiv.innerHTML =
      '<img src="questionmark.png" alt="Question Mark" style="width: 100px; border-radius: 50px;">';

    generateNumber();
  }, 1000);
};

const updateScore = (points) => {
  score += points;
  document.getElementById("score").textContent = score;
};

const check_number = () => {
  let value = document.querySelector("#number").value;
  const imgDiv = document.getElementById("imgDiv");

  if (value == number) {
    alert("Congrats, you won the game!");
    imgDiv.innerHTML = `<div style="width: 100px; height: 100px; border-radius: 50px; display: flex; align-items: center; justify-content: center; background: green; color: white; font-size: 24px;">${value}</div>`;
    updateScore(1); // Add 1 point for a correct guess
  } else {
    alert("Oops!! Your guess is wrong.");
    imgDiv.innerHTML =
      '<img src="questionmark.png" alt="Try again" style="width: 100px; border-radius: 50px;">';
    updateScore(-1); // Deduct 1 point for a wrong guess
  }

  // Reset the input field

  document.querySelector("#number").value = "";

  // Generate a new number for the next round
  generateNumber();
};
