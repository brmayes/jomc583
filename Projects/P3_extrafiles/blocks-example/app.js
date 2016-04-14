var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

//var formatDate = d3.time.format("%y");

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.ncsu); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("tuition_rise.json", function(error, data) {
  if (error) throw error;
    console.log("hello");

    data.forEach(function(d) {
        for(var i in d) {
            d[i] = Number(d[i].replace(/[^0-9\.]+/g,""));
        }
    });

    console.log(data);
  x.domain(d3.extent(data, function(d) { return d.year; }));
  y.domain(d3.extent(data, function(d) { return d.ncsu; }));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
      .attr("transform", "rotate(0)")
      .attr("x", 900)
      .attr("dx", ".71em")
      .style("text-anchor", "end")
      .text("Year");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
});
