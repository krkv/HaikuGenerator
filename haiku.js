var winter1 = ["winter", "frosty", "freezing"];
var spring1 = ["april", "lively", "cheerful"];
var summer1 = ["summer", "august", "sunny"];
var autumn1 = ["autumn", "rainy", "gloomy"];

var common1 = ["on the street", "afternoon", "holiday"];

var common2 = ["this day that was very", "this week when it was so"];

var winter2 = ["cold", "dark", "white"];
var spring2 = ["warm", "fresh", "green"];
var summer2 = ["hot", "bright", "good"];
var autumn2 = ["wet", "sad", "bad"];

var common3 = ["do you remember", "is gone forever", "was it just a dream"];

function pick(dictionary) {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

function paint(body) {
    document.getElementById("body").style.backgroundColor = body;
}

function generate(topic) {

    switch (topic) {
        case 1:
            var dictionary1 = winter1;
            var dictionary2 = winter2;
            paint("#0099CC");
            break;
        case 2:
            var dictionary1 = spring1;
            var dictionary2 = spring2;
            paint("#339966");
            break;
        case 3:
            var dictionary1 = summer1;
            var dictionary2 = summer2;
            paint("#CC9966");
            break;
        case 4:
            var dictionary1 = autumn1;
            var dictionary2 = autumn2;
            paint("#993333");
            break;
        default:
            var dictionary1 = winter1;
            var dictionary2 = winter2;
    }

    var line1 = pick(dictionary1) + " " + pick(common1);
    var line2 = pick(common2) + " " + pick(dictionary2);
    var line3 = pick(common3);
    var haiku = line1 + "<br>" + line2 + "<br>" + line3;
    result.innerHTML = "<p>" + haiku + "</p>";

}
