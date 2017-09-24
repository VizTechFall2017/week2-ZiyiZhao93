console.log('here');
console.log(indexCard);

var indexCard = d3.select('body').append('svg')
    .attr('width', 500)
    .attr('height', 500);

var clicked = true;

indexCard.append('rect')
    .attr('x', 345)
    .attr('y', 60)
    .attr('width', 10)
    .attr('height', 102)
    .attr('fill', '#FABE00');

indexCard.append('circle')
    .attr('cx', 350)
    .attr('cy', 50)
    .attr('r',20)
    .attr('fill', '#F18D00');

indexCard.append('rect')
    .attr('x', 260)
    .attr('y', 100)
    .attr('width', 180)
    .attr('height', 120)
    .attr('fill', '#55BB9F');

indexCard.append('rect')
    .attr('x', 230)
    .attr('y', 230)
    .attr('width', 240)
    .attr('height', 150)
    .attr('fill', '#55BB9F');

indexCard.append('circle')
    .attr('cx', 305)
    .attr('cy', 140)
    .attr('r',20)
    .attr('fill', '#EB6100')
    .attr('stroke', '#FABE00')
    .on('mouseover', function (d) {
        d3.select(this).attr('r', 15);
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('r', 20);
});

indexCard.append('circle')
    .attr('cx', 395)
    .attr('cy', 140)
    .attr('r',15)
    .attr('fill', '#EB6100')
    .attr('stroke', '#FABE00')
    .on('mouseover', function (d) {
        d3.select(this).attr('r', 20);
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('r', 15);
});

indexCard.append('rect')
    .attr('x',325)
    .attr('y', 180)
    .attr('width', 50)
    .attr('height', 20)
    .attr('fill', '#FABE00')
    .on('click', function (d) {
        if (clicked == true) {
            d3.select(this).attr('fill', '#EB6100').transition(0.3)
                .attr('x',320).attr('y', 175).attr('width', 60).attr('height', 30);
            clicked = false;
        }
        else {
            d3.select(this).attr('fill', '#FABE00').transaction(0.3)
                .attr('x', 325).attr('y', 180).attr('width', 50).attr('height', 20);
            clicked = true;
        }
        console.log(clicked);
    });



