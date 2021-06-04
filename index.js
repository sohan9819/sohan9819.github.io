// const obj = JSON.parse(data);
// console.log(obj);
// // console.log(obj[0].name);
// // console.log("Hello world");

// const about = document.querySelector(".about-content").textContent = "Hello World ! My name Is Sohan. I am emerging full stack developer , a designer and a photographer"

// console.log(about);

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

let section1 = "";

//usage:
console.log(readTextFile("/data.json", function(text){
    let data = JSON.parse(text);
    section1 = data.section1;
    section2 = data.section2;
    section3 = data.section3;
    section4 = data.section4;
    console.log(section1);
    console.log(section2);
    console.log(section3);
    console.log(section4);
    document.querySelector('#name').textContent = section1.name;
    document.querySelector('#fullname').textContent = section2.full_name;
    document.querySelector("#about").textContent = section2.about;
    document.querySelector("#profile_image").src = section2.profile_image;
    document.querySelector("#skill-1").textContent = section3.skill_1;
    document.querySelector("#skill-2").textContent = section3.skill_2;
    document.querySelector("#skill-3").textContent = section3.skill_3;
    document.querySelector("#skill-4").textContent = section3.skill_4;
    document.querySelector("#skill-5").textContent = section3.skill_5;
    document.querySelector("#instagram").href = section4.instagram;
    document.querySelector("#twitter").href = section4.twitter;
    document.querySelector("#github").href = section4.github;
    document.querySelector("#linkedin").href = section4.linkedin;
}));

