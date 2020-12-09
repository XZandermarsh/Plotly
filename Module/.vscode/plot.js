var sortedCities = cityGrowths.sort((a,b)=>a.Increase_from_2016 - b.Increase_from_2016).reverse();
var topFiveCities = sortedCities.slice(0,5);
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
var sortedCitiesPop = cityGrowths.sort((a,b)=>a.population - b.population).reverse();
var topSevenPopCities = sortedCitiesPop.slice(0,7);
var topSevenCityNames = topSevenPopCities.map(city => city.City);
var topSevenCityPops = topSevenPopCities.map(city => parseInt(city.population));

d3.json("samples.json").then(function(data){
    console.log(data);
});

var trace = {
    x: topSevenCityNames,
    y: topSevenCityPops,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Highest Population Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population"}
};
Plotly.newPlot("bar-plot", data, layout);

