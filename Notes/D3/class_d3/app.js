var margin = {top: 20, right: 20, bottom: 30, left: 40};
var width = 1400 - margin.left - margin.right;
var height = 700 - margin.top - margin.bottom;

var svg = d3.select('.container').append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');  //evaluares to translate(40,20)

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
  .ticks(15, '%');

d3.tsv('shooting.txt', function(err, data){
  if (err) throw err;

  scaleX.domain(data.map(function(d) { return d.team }));
  scaleY.domain([0, 1]);

  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, ' + height + ')')
    .call(xAxis);

  svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d) { return scaleX(d.team); })
      .attr('width', scaleX.rangeBand())
      .attr('y', function(d) { return scaleY(d.fgp); })
      .attr('height', function(d) { return height - scaleY(d.fgp); })
      .attr('fill', 'green')
      .on('mouseover', function(d){
        d3.select('.tooltip')
          .html(d.team + '<br />' + Math.round(d.fgp * 100) + '%')
          .style('opactity', 1);
      })
      .on('mouseout', function(d){
        d3.select('.tooltip')
          .style('opactity', 0);
      })
      .on('mousemove', function(d){
        d3.select('.tooltip')
          .attr('left', )
          .attr('top', );
      });

});
