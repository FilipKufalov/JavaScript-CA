// console.log("test");

/*

        <div class="card" style="width: 18rem; height: fit-content">
            <img src="https://dummyimage.com/200x200/ced4da/0000FF" class="card-img-top" alt="Image">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">My LinkedIn</a>
            </div>
          </div>

          */

let myCard = [
    {
        imgName: "slika1.jpg",
        title: "Filip Kufalov",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        link: "https://linkedin.com/in/filip-kufalov-71bab51b3",
    },
    {
        imgName: "slika2.jpg",
        title: "Random Name",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        link: "https://linkedin.com/",
    },
    {
        imgName: "slika3.jpg",
        title: "Random Name",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        link: "https://linkedin.com/",
    },
    {
        imgName: "slika4.jpg",
        title: "Random Name",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        link: "https://linkedin.com/",
    }
];

let main = document.getElementById("main");

myCard.forEach(element => {
    // console.log(element);
    main.innerHTML += `
    <div class="card" style="width: 18rem; height: fit-content">
    <img src="./Img/${element.imgName}" class="card-img-top" alt="Image">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <a href="${element.link}" class="btn btn-primary">My LinkedIn</a>
    </div>
  </div>
    `
});