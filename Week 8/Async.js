

//group async project

async function getRandomNumber() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.random());
      }, 500);
    });
   }
   
   async function main() {
    const num = await getRandomNumber();
    console.log(num);
   }
   
   main();
   
   async function fetchCityData(city) {
    const response = await fetch(
      `https://geocode.xyz/${city}?json=1`
    );
    const data = await response.json();
    console.log(data.latt, data.longt);
   }
   
   fetchCityData("Shreveport");
   fetchCityData("Houston");