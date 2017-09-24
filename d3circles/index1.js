var indexCard = d3.select('body').append('svg')
    .attr('width', 600)
    .attr('height', 400);

var clicked = true;

var circle1 = indexCard.append('circle')
    .attr('cx', 250)
    .attr('cy', 200)
    .attr('r',20)
    .attr('fill', 'blue')
    .on('click', function (d) {
        if (clicked == true) {
        d3.select(this).attr('fill', 'orange').transition().attr('r', 40);
        clicked = false;
        }
        else {
            d3.select(this).attr('fill', 'pink').attr('r', 60);
            clicked = true;
        }
        console.log(clicked);
    })
    .on('mouseover', function (d) {
        d3.select(this).attr('stroke', 'red');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('stroke', 'green');
});

indexCard.append('rect')
    .attr('x', 100)
    .attr('y', 150)
    .attr('width', 20)
    .attr('height', 20)
    .attr('fill', 'yellow')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', 'red')
    })
    .on('mouseout', function (d){
        d3.select(this).attr('fill', 'yellow')
});

indexCard.append('line')
    .attr('x1', 10)
    .attr('x2', 20)
    .attr('y1', 150)
    .attr('y2', 250)
    .attr('stroke', 'purple');




circle1.attr('stroke', 'purple');

indexCard.append('circle')
    .attr('cx', 200)
    .attr('cy', 100)
    .attr('r',40)
    .attr('fill', 'pink');

indexCard.append('circle')
    .attr('cx', 100)
    .attr('cy', 200)
    .attr('r',10)
    .attr('fill', 'black')
    .attr('opacity', .37);

