var indexCard = d3.select('body').append('svg')
    .attr('width', 700)
    .attr('height', 700);

var clicked = true;

//hello border

indexCard.append('line')
    .attr('x1', 50)
    .attr('y1', 30)
    .attr('x2', 50)
    .attr('y2', 110)
    .attr('stroke', '#E2844A');

indexCard.append('line')
    .attr('x1', 50)
    .attr('y1', 110)
    .attr('x2', 150)
    .attr('y2', 110)
    .attr('stroke', '#E2844A');

indexCard.append('line')
    .attr('x1', 150)
    .attr('y1', 110)
    .attr('x2', 180)
    .attr('y2', 130)
    .attr('stroke', '#E2844A');

indexCard.append('line')
    .attr('x1', 180)
    .attr('y1', 130)
    .attr('x2', 170)
    .attr('y2', 110)
    .attr('stroke', '#E2844A');

indexCard.append('line')
    .attr('x1', 170)
    .attr('y1', 110)
    .attr('x2', 200)
    .attr('y2', 110)
    .attr('stroke', '#E2844A');

indexCard.append('line')
    .attr('x1', 200)
    .attr('y1', 110)
    .attr('x2', 200)
    .attr('y2', 30)
    .attr('stroke', '#E2844A');

indexCard.append('line')
    .attr('x1', 200)
    .attr('y1', 30)
    .attr('x2', 50)
    .attr('y2', 30)
    .attr('stroke', '#E2844A');

//hello

indexCard.append('line')
    .attr('x1', 65)
    .attr('y1', 45)
    .attr('x2', 65)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 65)
    .attr('y1', 70)
    .attr('x2', 85)
    .attr('y2', 70)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 85)
    .attr('y1', 45)
    .attr('x2', 85)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 89)
    .attr('y1', 45)
    .attr('x2', 89)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 89)
    .attr('y1', 45)
    .attr('x2', 109)
    .attr('y2', 45)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 89)
    .attr('y1', 70)
    .attr('x2', 104)
    .attr('y2', 70)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 89)
    .attr('y1', 95)
    .attr('x2', 109)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 113)
    .attr('y1', 45)
    .attr('x2', 113)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 113)
    .attr('y1', 95)
    .attr('x2', 133)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 137)
    .attr('y1', 45)
    .attr('x2', 137)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 137)
    .attr('y1', 95)
    .attr('x2', 157)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 161)
    .attr('y1', 45)
    .attr('x2', 161)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 161)
    .attr('y1', 45)
    .attr('x2', 181)
    .attr('y2', 45)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 181)
    .attr('y1', 45)
    .attr('x2', 181)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 161)
    .attr('y1', 95)
    .attr('x2', 181)
    .attr('y2', 95)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 185)
    .attr('y1', 45)
    .attr('x2', 185)
    .attr('y2', 85)
    .attr('stroke', '#223774');

indexCard.append('line')
    .attr('x1', 185)
    .attr('y1', 90)
    .attr('x2', 185)
    .attr('y2', 95)
    .attr('stroke', '#223774');


//ball line

indexCard.append('rect')
    .attr('x', 345)
    .attr('y', 65)
    .attr('width', 10)
    .attr('height', 40)
    .attr('fill', '#F1C279');

//ball on head

indexCard.append('circle')
    .attr('cx', 350)
    .attr('cy', 50)
    .attr('r',20)
    .attr('fill', '#E2844A')
    .attr('stroke', '#F1C279')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#F1C279').attr('stroke', '#E2844A');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#E2844A').attr('stroke', '#F1C279');
    });

//head

indexCard.append('rect')
    .attr('x', 260)
    .attr('y', 100)
    .attr('width', 180)
    .attr('height', 120)
    .attr('fill', '#82AA72');

indexCard.append('rect')
    .attr('x', 290)
    .attr('y', 120)
    .attr('width', 120)
    .attr('height', 40)
    .attr('fill', '#648C78');

//left ear

indexCard.append('rect')
    .attr('x', 250)
    .attr('y', 140)
    .attr('width', 10)
    .attr('height', 40)
    .attr('fill', '#E2844A');

indexCard.append('rect')
    .attr('x', 245)
    .attr('y', 150)
    .attr('width', 5)
    .attr('height', 20)
    .attr('fill', '#F1C279');

//right ear

indexCard.append('rect')
    .attr('x', 440)
    .attr('y', 140)
    .attr('width', 10)
    .attr('height', 40)
    .attr('fill', '#E2844A');

indexCard.append('rect')
    .attr('x', 450)
    .attr('y', 150)
    .attr('width', 5)
    .attr('height', 20)
    .attr('fill', '#F1C279');

//left eye

indexCard.append('circle')
    .attr('cx', 305)
    .attr('cy', 140)
    .attr('r',25)
    .attr('fill', '#E2844A')
    .attr('stroke', '#F1C279')
    .on('mouseover', function (d) {
        d3.select(this).attr('r', 8);
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('r', 25);
});

//right eye

indexCard.append('circle')
    .attr('cx', 395)
    .attr('cy', 140)
    .attr('r',12)
    .attr('fill', '#E2844A')
    .attr('stroke', '#F1C279')
    .on('mouseover', function (d) {
        d3.select(this).attr('r', 20);
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('r', 12);
});

//mouth

indexCard.append('rect')
    .attr('x',325)
    .attr('y', 180)
    .attr('width', 50)
    .attr('height', 20)
    .attr('fill', '#F9F0D8')
    .on('click', function (d) {
        if (clicked == true) {
            d3.select(this).attr('fill', '#F1C279');
            clicked = false;
        }
        else {
            d3.select(this).attr('fill', '#F9F0D8');
            clicked = true;
        }
        console.log(clicked);
});

//box for body

indexCard.append('rect')
    .attr('x', 230)
    .attr('y', 230)
    .attr('width', 240)
    .attr('height', 150)
    .attr('fill', '#82AA72');

//in box line1

indexCard.append('rect')
    .attr('x', 242)
    .attr('y', 247)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#9FAF8D')
    .on('mouseover', function (d) {
    d3.select(this).attr('fill', '#993F32');
})
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#9FAF8D');
    });

indexCard.append('rect')
    .attr('x', 267)
    .attr('y', 247)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#9FAF8D')
    .on('mouseover', function (d) {
    d3.select(this).attr('fill', '#993F32');
})
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#9FAF8D');
    });

indexCard.append('rect')
    .attr('x', 292)
    .attr('y', 247)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#9FAF8D')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#993F32');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#9FAF8D');
    });

indexCard.append('rect')
    .attr('x', 317)
    .attr('y', 247)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#9FAF8D')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#993F32');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#9FAF8D');
    });

indexCard.append('rect')
    .attr('x', 342)
    .attr('y', 247)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#9FAF8D')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#993F32');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#9FAF8D');
    });

indexCard.append('rect')
    .attr('x', 367)
    .attr('y', 247)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#9FAF8D')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#993F32');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#9FAF8D');
    });

indexCard.append('rect')
    .attr('x', 392)
    .attr('y', 247)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#9FAF8D')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#993F32');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#9FAF8D');
    });

indexCard.append('rect')
    .attr('x', 417)
    .attr('y', 247)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#9FAF8D')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#993F32');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#9FAF8D');
    });

indexCard.append('rect')
    .attr('x', 442)
    .attr('y', 247)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#9FAF8D')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#993F32');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#9FAF8D');
    });

//in box line2

indexCard.append('rect')
    .attr('x', 242)
    .attr('y', 272)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#CEE5C0')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD5B25');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#CEE5C0');
    });

indexCard.append('rect')
    .attr('x', 267)
    .attr('y', 272)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#CEE5C0')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD5B25');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#CEE5C0');
    });

indexCard.append('rect')
    .attr('x', 292)
    .attr('y', 272)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#CEE5C0')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD5B25');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#CEE5C0');
    });

indexCard.append('rect')
    .attr('x', 317)
    .attr('y', 272)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#CEE5C0')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD5B25');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#CEE5C0');
    });

indexCard.append('rect')
    .attr('x', 342)
    .attr('y', 272)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#CEE5C0')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD5B25');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#CEE5C0');
    });

indexCard.append('rect')
    .attr('x', 367)
    .attr('y', 272)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#CEE5C0')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD5B25');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#CEE5C0');
    });

indexCard.append('rect')
    .attr('x', 392)
    .attr('y', 272)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#CEE5C0')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD5B25');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#CEE5C0');
    });

indexCard.append('rect')
    .attr('x', 417)
    .attr('y', 272)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#CEE5C0')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD5B25');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#CEE5C0');
    });

indexCard.append('rect')
    .attr('x', 442)
    .attr('y', 272)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#CEE5C0')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD5B25');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#CEE5C0');
    });

//in box line3

indexCard.append('rect')
    .attr('x', 242)
    .attr('y', 297)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#B1C7CF')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#DDAF59');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#B1C7CF');
    });

indexCard.append('rect')
    .attr('x', 267)
    .attr('y', 297)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#B1C7CF')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#DDAF59');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#B1C7CF');
    });

indexCard.append('rect')
    .attr('x', 292)
    .attr('y', 297)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#B1C7CF')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#DDAF59');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#B1C7CF');
    });

indexCard.append('rect')
    .attr('x', 317)
    .attr('y', 297)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#B1C7CF')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#DDAF59');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#B1C7CF');
    });

indexCard.append('rect')
    .attr('x', 342)
    .attr('y', 297)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#B1C7CF')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#DDAF59');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#B1C7CF');
    });

indexCard.append('rect')
    .attr('x', 367)
    .attr('y', 297)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#B1C7CF')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#DDAF59');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#B1C7CF');
    });

indexCard.append('rect')
    .attr('x', 392)
    .attr('y', 297)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#B1C7CF')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#DDAF59');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#B1C7CF');
    });

indexCard.append('rect')
    .attr('x', 417)
    .attr('y', 297)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#B1C7CF')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#DDAF59');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#B1C7CF');
    });

indexCard.append('rect')
    .attr('x', 442)
    .attr('y', 297)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#B1C7CF')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#DDAF59');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#B1C7CF');
    });

//in box line4

indexCard.append('rect')
    .attr('x', 242)
    .attr('y', 322)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#5F7DA2')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD924D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#5F7DA2');
    });

indexCard.append('rect')
    .attr('x', 267)
    .attr('y', 322)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#5F7DA2')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD924D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#5F7DA2');
    });

indexCard.append('rect')
    .attr('x', 292)
    .attr('y', 322)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#5F7DA2')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD924D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#5F7DA2');
    });

indexCard.append('rect')
    .attr('x', 317)
    .attr('y', 322)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#5F7DA2')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD924D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#5F7DA2');
    });

indexCard.append('rect')
    .attr('x', 342)
    .attr('y', 322)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#5F7DA2')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD924D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#5F7DA2');
    });

indexCard.append('rect')
    .attr('x', 367)
    .attr('y', 322)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#5F7DA2')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD924D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#5F7DA2');
    });

indexCard.append('rect')
    .attr('x', 392)
    .attr('y', 322)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#5F7DA2')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD924D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#5F7DA2');
    });

indexCard.append('rect')
    .attr('x', 417)
    .attr('y', 322)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#5F7DA2')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD924D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#5F7DA2');
    });

indexCard.append('rect')
    .attr('x', 442)
    .attr('y', 322)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#5F7DA2')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#BD924D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#5F7DA2');
    });

//in box line5

indexCard.append('rect')
    .attr('x', 242)
    .attr('y', 347)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#223774')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#8F681D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#223774');
    });

indexCard.append('rect')
    .attr('x', 267)
    .attr('y', 347)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#223774')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#8F681D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#223774');
    });

indexCard.append('rect')
    .attr('x', 292)
    .attr('y', 347)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#223774')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#8F681D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#223774');
    });

indexCard.append('rect')
    .attr('x', 317)
    .attr('y', 347)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#223774')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#8F681D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#223774');
    });

indexCard.append('rect')
    .attr('x', 342)
    .attr('y', 347)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#223774')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#8F681D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#223774');
    });

indexCard.append('rect')
    .attr('x', 367)
    .attr('y', 347)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#223774')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#8F681D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#223774');
    });

indexCard.append('rect')
    .attr('x', 392)
    .attr('y', 347)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#223774')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#8F681D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#223774');
    });

indexCard.append('rect')
    .attr('x', 417)
    .attr('y', 347)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#223774')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#8F681D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#223774');
    });

indexCard.append('rect')
    .attr('x', 442)
    .attr('y', 347)
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', '#223774')
    .on('mouseover', function (d) {
        d3.select(this).attr('fill', '#8F681D');
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('fill', '#223774');
    });

//left hand

indexCard.append('rect')
    .attr('x', 218)
    .attr('y', 235)
    .attr('width', 10)
    .attr('height', 35)
    .attr('fill', '#648C78');

indexCard.append('rect')
    .attr('x', 196)
    .attr('y', 235)
    .attr('width', 20)
    .attr('height', 60)
    .attr('fill', '#E2844A');

indexCard.append('circle')
    .attr('cx', 206)
    .attr('cy', 309)
    .attr('r',12)
    .attr('fill', '#F1C279');

indexCard.append('rect')
    .attr('x', 196)
    .attr('y', 323)
    .attr('width', 20)
    .attr('height', 60)
    .attr('fill', '#E2844A');

indexCard.append('circle')
    .attr('cx', 206)
    .attr('cy', 405)
    .attr('r',20)
    .attr('fill', '#F1C279');

//right hand

indexCard.append('rect')
    .attr('x', 472)
    .attr('y', 235)
    .attr('width', 10)
    .attr('height', 35)
    .attr('fill', '#648C78');

indexCard.append('rect')
    .attr('x', 484)
    .attr('y', 210)
    .attr('width', 20)
    .attr('height', 60)
    .attr('fill', '#E2844A');

indexCard.append('circle')
    .attr('cx', 494)
    .attr('cy', 196)
    .attr('r',12)
    .attr('fill', '#F1C279');

indexCard.append('rect')
    .attr('x', 484)
    .attr('y', 122)
    .attr('width', 20)
    .attr('height', 60)
    .attr('fill', '#E2844A');

indexCard.append('circle')
    .attr('cx', 494)
    .attr('cy', 100)
    .attr('r',20)
    .attr('fill', '#F1C279');

//left leg

indexCard.append('rect')
    .attr('x', 280)
    .attr('y', 390)
    .attr('width', 40)
    .attr('height', 50)
    .attr('fill', '#648C78');

indexCard.append('circle')
    .attr('cx', 300)
    .attr('cy', 465)
    .attr('r', 22)
    .attr('fill', '#F1C279');

indexCard.append('rect')
    .attr('x', 280)
    .attr('y', 490)
    .attr('width', 40)
    .attr('height', 70)
    .attr('fill', '#648C78');

//left foot

indexCard.append('rect')
    .attr('x', 270)
    .attr('y', 563)
    .attr('width', 60)
    .attr('height', 40)
    .attr('fill', '#E2844A');

//right leg

indexCard.append('rect')
    .attr('x', 378)
    .attr('y', 390)
    .attr('width', 40)
    .attr('height', 50)
    .attr('fill', '#648C78');

indexCard.append('circle')
    .attr('cx', 398)
    .attr('cy', 465)
    .attr('r',22)
    .attr('fill', '#F1C279');

indexCard.append('rect')
    .attr('x', 378)
    .attr('y', 490)
    .attr('width', 40)
    .attr('height', 70)
    .attr('fill', '#648C78');

//right foot

indexCard.append('rect')
    .attr('x', 368)
    .attr('y', 563)
    .attr('width', 60)
    .attr('height', 40)
    .attr('fill', '#E2844A');








