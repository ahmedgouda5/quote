
const btn = document.querySelector(".btn");
const writer = document.querySelector(".name");
const quote = document.querySelector(".quote");
const work = document.querySelector(".work");
const img = document.querySelector(".img");

// let quoteArr = [
//     `In the End We Only Regret the Chances We Didn’t Take`,
//     `Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts`,
//     `Don’t Count the Days, Make the Days Count`,
//     `Don’t Wait for Opportunity, Create it`
// ];

// let writerArr = ["Mark", "Adham", "Jones", "John"];
// let workArr = ["Web Developer", "GraphicDesigner", "Photographer", "Speaker"];
// let imgArr = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg"];
// $(".btn").on("click",  function(){
//     const randomWr =   writerArr[Math.floor(Math.random() * writerArr.length)];
//     const random =   quoteArr[Math.floor(Math.random() * quoteArr.length)];
//     const randomWo =   workArr[Math.floor(Math.random() * workArr.length)];
//     const randomIm = imgArr[Math.floor(Math.random() * imgArr.length)];

//     quote.innerHTML = random;
//     writer.innerHTML = randomWr;
//     work.innerHTML = randomWo;
//     img.src=randomIm
// })

let quoteArr=[
    {
        "name":"mark",
        "work":"web developer",
        "img":"./images/1.jpg",
        "quote":"Don’t Wait for Opportunity, Create it"
   },
    {
        "name":"Adham",
        "img":"./images/2.jpg",
        "work":" Graphic Designer",
        "quote":" `Don’t Count the Days, Make the Days Count`,"
   },
    {
        "name":"Jones",
        "img":"./images/3.jpg",
        "work":"photographer",
        "quote":"Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts"
   },
    {

        "name":"John",
        "img":"./images/4.jpg",
        "work":"speaker",
        "quote":"In the End We Only Regret the Chances We Didn’t Take"
   },


];



$(".btn").on("click",  function(){
   
for(let i=0;i<quoteArr.length;i++){
     const random= Math.floor(Math.random() * quoteArr.length)
     const randomIndex=quoteArr[random]
   writer.innerHTML =randomIndex.name;
   work.innerHTML =randomIndex.work;
   quote.innerHTML =randomIndex.quote;
   img.src =randomIndex.img;
}
})
