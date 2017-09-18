// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml



$(document).ready(() => {


    var getName = function(name) {
        console.log("Im here", name);
        var scalarMap = {
            "animated-cloud": [10, 10],
            "bird-lg": [20, 30],
            "spike": [15, 25],
            "bird-sm": [10, 10]
        };

        return scalarMap[name];
    };

    $('.scene').each((i, el) => {
        console.log(i, el);
        var isShadow = $(el).hasClass("shadow");
        var name = $(el).data("myname");
        console.log(name);

        let myScalars = getName(name);


        var parallax = new Parallax(el);

        if (isShadow) {
            for (var ind = 0; ind < myScalars.length; ind++)
                myScalars[ind] = myScalars[ind] / 2;
        } else {
            parallax.invert(false, false);
        }

        parallax.scalar(myScalars[0], myScalars[1]);
        console.log(myScalars);

    });
});