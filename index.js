const fabBioData = [
    {
        id: 1,
        item: "Joe Root",
        birth: "December 30, 1990 age 31 years",
        picture: "root.jpg",
        root: "Criket Career",
        bio: "National side	England (2012–present) Test debut (cap 655)	13 December 2012 v India Last Test	24 March 2022 v West Indie ODI debut (cap 227)	11 January 2013 v IndiaLast ODI	4 July 2021 v Sri LankaODI shirt no.	66T20I debut (cap 63)	22 December 2012 v IndiaLast T20I	5 May 2019 v PakistanT20I shirt no.	66"
    },
    {
        id: 2,
        item: "Virat Kholi",
        birth: "5 November 1988 (age 33)",
        picture: "virat.jpg",
        root: "Criket Career",
        bio: "National side India (2008–present)Test debut (cap 269)	20 June 2011 v West Indies Last Test	12 March 2022 v Sri LankaODI debut (cap 175)	18 August 2008 v Sri LankaLast ODI	11 February 2022 v West IndiesODI shirt no.	18 T20I debut (cap 31)	12 June 2010 v ZimbabweLast T20I	18 February 2022 v West IndiesT20I shirt no.18", 
    },
    {
        id: 3,
        item: "Steve Smith",
        birth: "2 June 1989 (age 32)Kogarah, New South Wales, Australia",
        picture: "smith.jfif",
        root: "Criket Career",
        bio: "National side	Australia (2010–present) Test debut (cap 415)	13 July 2010 v Pakistan Last Test	21 March 2022 v PakistanODI debut (cap 182)	19 February 2010 v West IndiesLast ODI	2 December 2020 v IndiaODI shirt no.	49T20I debut (cap 43)	5 February 2010 v PakistanLast T20I	13 February 2022 v Sri Lanka T20I shirt no.	49"
    },
    {
        id: 4,
        item: "Kane Williamson",
        birth: "8 August 1990 (age 31) Tauranga, New Zealand",
        picture: "kane.jpg",
        root: "Criket Career",
        bio: "National side	New Zealand (2010–present) Test debut (cap 248)	4 November 2010 v India Last Test	25 November 2021 v India ODI debut (cap 161)	10 August 2010 v India Last ODI	13 March 2020 v Australia ODI shirt no.	22 T20I debut (cap 49)	16 October 2011 v ZimbabweLast T20I	14 November 2021 v Australia T20I shirt no.	22"
    },
    {
        id: 5,
        item: "Babar Azam",
        birth: "Mohammad Babar Azam	15 October 1994 (age 27) Lahore, Punjab, Pakistan",
        picture: "babar.jpg",
        root: "Criket Career",
        bio: "National side	Pakistan (2015–present) Test debut (cap 222)	13 October 2016 v West Indies Last Test	21 March 2022 v Australia ODI debut (cap 203)	31 May 2015 v Zimbabwe last ODI	2 April 2022 v Australia ODI shirt no.	56T20I debut (cap 70)	7 September 2016 v England Last T20I	5 April 2022 v Australia T20I shirt no.	56"
    }  
]

const item = document.getElementById("item");
const birth = document.getElementById("birth");
const picture = document.getElementById("picture");
const root = document.getElementById("root");
const bio = document.getElementById("bio");
const prev = document.getElementById("prev");
const random = document.getElementById("random");
const next = document.getElementById("next");

let curentImg = 0;
window.addEventListener("DOMContentLoaded", function(){
    //let slides = fabBioData[curentImg];
    //item.textContent = slides.item;
    //birth.textContent = slides.birth;
    //picture.src = slides.picture;
    //root.textContent = slides.root;
    //bio.textContent = slides.bio;
    allSlides(curentImg);

});

const allSlides = ()=>{
    let slides = fabBioData[curentImg];
    item.textContent = slides.item;
    birth.textContent = slides.birth;
    picture.src = slides.picture;
    root.textContent = slides.root;
    bio.textContent = slides.bio;
}

//random image:
random.addEventListener("click", function(){
    curentImg = Math.floor(Math.random() * fabBioData.length);
    //console.log(curentImg);
    allSlides(curentImg);
})

//PrevBtn 
prev.addEventListener("click", ()=>{
    curentImg--;
    if(curentImg < 0){
        curentImg = fabBioData.length -1;
    }
    allSlides(curentImg);
});

//Nextbtn:
next.addEventListener("click", function(){
    curentImg++;
    if(curentImg > fabBioData.length -1){
        curentImg = 0;
    }
    allSlides(curentImg);
})
