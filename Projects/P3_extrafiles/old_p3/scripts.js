var margin = {top: 20, right: 20, bottom: 30, left: 40};
var width = 1000 - margin.left - margin.right;
var height = 700 - margin.top - margin.bottom;

var svg = d3.select('.container').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var scaleX = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.2);

var scaleY = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(scaleX)
    .orient('bottom');

var yAxis = d3.svg.axis()
    .scale(scaleY)
    .orient('left')
    .ticks(1);

d3.csv('tuition_increase.csv', function(err, data) {

    if (err) throw error;

    data.forEach(function(d) {
      for(var i in d) {
        d[i] = Number(d[i].replace(/[^0-9\.]+/g, ""));
      }
    });

    console.log(data);

    scaleX.domain(data.map(function(d) {
       console.log(d);
    }));

    


});
