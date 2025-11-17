const form = document.getElementById("form");
const list = document.querySelector(".list");
const li = document.getElementsByTagName("li")

let instance;
let info;

console.log(li[0])

list.addEventListener("click", (e) => {
    

    for (let i = 0; i < li.length; i++){
        li[i].style.backgroundColor = "hsl(217, 12%, 63%)";
    }
    
    if (e.target.nodeName === "LI") {
    info = e.target.textContent.trim();
    instance = basicLightbox.create(`
    <div class="modal">
        <img src="./images/illustration-thank-you.svg" />
        <p class="description">You selected ${info} out of 5 </p>
        <p class="size">Thank you!</p>
        <p class="support"> We appreciate you taking the time to give a rating. If
        you ever need more support, don’t hesitate to get in touch!</p>
    </div>
    
`);
      e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (info === undefined) {
    iziToast.error({
      title: "Error",
      message: "Please select one",
      position: "topRight",
    });
    return;
  }
  instance.show();
});
