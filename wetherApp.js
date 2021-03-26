async function loadApi() {
  const apiKey = "7faded16e58249b40750313781a6f906";
  const cityName = document.getElementById("CN").value;
  console.log(cityName);
  let x = await fetch(
    "http://tejaking123.github.io/webapp2/api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&appid=7faded16e58249b40750313781a6f906&units=metric"
  );
  let y = await x.json();
  console.log(y);
  // document.getElementById("disp").innerHTML = "Temperature   :  "+y.main.temp+"<br>"+"Humidity : "+y.main.humidity;
  // y.main.forEach(element => {
  //     console.log(element);
  // });
  // for(entry in y){
  //     console.log(y.list[entry.cnt].main.temp);
  // }

  temperature = [];
  dates = [];
  for (x = 2; x < y.list.length; x += 8) {
    // const {
    //   list: [
    //     {
    //       dt_txt,
    //       main: { temp },
    //     },
    //   ],
    // } = y;
    // console.log(dt_txt, temp);
    temperature.push(y.list[x].main.temp);
    dates.push(y.list[x].dt_txt.slice(0, 10));
    console.log(y.list[x].main.temp + " " + y.list[x].dt_txt);
  }
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Temperature of " + cityName,
          data: temperature,
        },
      ],
    },
  });
}
