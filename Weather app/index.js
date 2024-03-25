const apikey="7bb30476708a530b469a816fdb9924f1";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";
console.log("apikey")
async function checkweather(){
    const response= await fecth(apiurl + `&appid${apikey}`)
    const data= await response.json()
  console.log(data)
}
checkweather();