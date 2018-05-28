var data = [{
    'time': '2015第一季度,环比增长率-29.1%',
    'pepole': 42.7,
    'cars': 29
}, {
    'time': '2015第二季度,环比增长率-89.7%',
    'pepole': 81.0,
    'cars': 17558
}, {
    'time': '2015第三季度,环比增长率-76.9%',
    'pepole': 143.3,
    'cars': 17642
}, {
    'time': '2015第四季度,环比增长率-33.1%',
    'pepole': 190.8,
    'cars': 17789
}, {
    'time': '2016第一季度,环比增长率-33.1%',
    'pepole': 182.4,
    'cars': 17862
}, {
    'time': '2016第二季度,环比增长率-38.6%',
    'pepole': 252.8,
    'cars': 17260
}, {
    'time': '2016第三季度,环比增长率-25.2%',
    'pepole': 325.4,
    'cars': 18485
}, {
    'time': '2016第四季度,环比增长率-14.5%',
    'pepole': 372.6,
    'cars': 17592
}, {
    'time': '2017第一季度,环比增长率-7%',
    'pepole': 358.8,
    'cars': 18553
}, {
    'time': '2017第一季度,环比增长率-28.1%',
    'pepole': 459.5,
    'cars': 17426
}, {
    'time': '2015第一季度,环比增长率-29.1%',
    'pepole': 42.7,
    'cars': 29
}, {
    'time': '2015第二季度,环比增长率-89.7%',
    'pepole': 81.0,
    'cars': 17558
}, {
    'time': '2015第三季度,环比增长率-76.9%',
    'pepole': 143.3,
    'cars': 17642
}, {
    'time': '2015第四季度,环比增长率-33.1%',
    'pepole': 190.8,
    'cars': 17789
}, {
    'time': '2016第一季度,环比增长率-33.1%',
    'pepole': 182.4,
    'cars': 17862
}, {
    'time': '2016第二季度,环比增长率-38.6%',
    'pepole': 252.8,
    'cars': 17260
}, {
    'time': '2016第三季度,环比增长率-25.2%',
    'pepole': 325.4,
    'cars': 18485
}, {
    'time': '2016第四季度,环比增长率-14.5%',
    'pepole': 372.6,
    'cars': 17592
}, {
    'time': '2017第一季度,环比增长率-7%',
    'pepole': 358.8,
    'cars': 18553
}, {
    'time': '2017第一季度,环比增长率-28.1%',
    'pepole': 459.5,
    'cars': 17426
}, {
    'time': '2015第一季度,环比增长率-29.1%',
    'pepole': 42.7,
    'cars': 29
}, {
    'time': '2015第二季度,环比增长率-89.7%',
    'pepole': 81.0,
    'cars': 17558
}];


$(document).ready(function() {
    var automove,
        imgWth = 30,
        pepoleMax = 2479000; //小人图片的宽度、最大申请人数
    var n = data[0].pepole / pepoleMax * $(".col1")[0].clientWidth / imgWth;

    $(".pepole").css("width", parseInt(n) * imgWth);

    var list = document.getElementById('timebar').getElementsByTagName('a'),
        listLen = list.length;


    var mousewheelHander = function(e) {
        var index = getIndex();

        if (e.deltaY < 0) index++;
        else index--;
        if (index > listLen - 1) index = 0;
        else if (index < 0)
            index = listLen - 1;
        else {;
        }
        doscroll(data[index], $(list[index]));
    }

    function f(d, $this) {
        $(".timetext").remove();
        clearInterval(automove);
        var html = '<div class="timetext"><p>' + d['time'].split(',')[0] + '<br/>' + d['time'].split(',')[1] + '</p>';
        $("#pepolenum").html(d.pepole);
        d.pepole = d.pepole * 5000;
        $(".pointer").css("transform", "rotate(" + parseInt(d.cars / d.pepole * 100 * 360) + "deg)")
            .css("webkit-transform", "rotate(" + parseInt(d.cars / d.pepole * 100 * 360) + "deg)")
            .css("transition", "1s");
        // debugger;

        var n = d.pepole / pepoleMax * $(".col1")[0].clientWidth / imgWth;
        $(".pepole").css("width", parseInt(n) * imgWth).css("transition", "1s");;
        $("#carsnum").html(d.cars);
        $this.parent().append($(html));
        $this.addClass("actived");
        doautomove();
        d.pepole = d.pepole / 5000;
    }

    function doautomove() {
        automove = setInterval(function() {
            var index = getIndex();
            index++;
            if (index > listLen - 1) index = 0;
            doscroll(data[index], $(list[index]));
        }, 1600);
    }

    function getIndex() {
        var active = $(".actived").removeClass("actived"),
            index = $(list).index(active);
        return index;
    }

    function doscroll(d, $this) {
        $(".container").unmousewheel(mousewheelHander);
        f(d, $this);
        setTimeout(function() {
            $(".container").mousewheel(mousewheelHander);
        }, 500);
    }
    for (var i = 0; i < listLen; i++) {
        (function(index) {
            $(list[index]).on('click', function() {
                $(".actived").removeClass("actived");
                f(data[index], $(this));
            });
        })(i);
    };

    $(".container").mousewheel(mousewheelHander);
    doautomove();

}); //ready--end