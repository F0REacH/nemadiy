var data = [
[{o: 0.186, f: 9.171, l: "A", a: 0},
{o: 9.171, f: 64.794, l: "B", a: 1},
{o: 64.794, f: 105.915, l: "C", a: 0},
{o: 105.915, f: 119.202, l: "D", a: 1},
{o: 119.202, f: 146.162, l: "E", a: 0},
{o: 146.162, f: 180.483, l: "B'", a: 1}],
[{o: 0.068, f: 9.096, l: "A", a: 0},
{o: 9.096, f: 20.984, l: "A", a: 1},
{o: 20.984, f: 34.996, l: "A", a: 0},
{o: 34.996, f: 50.724, l: "A", a: 1},
{o: 50.724, f: 65.552, l: "A", a: 0},
{o: 65.552, f: 85.648, l: "A", a: 1},
{o: 85.648, f: 101.896, l: "A", a: 0},
{o: 101.896, f: 120.632, l: "A", a: 1},
{o: 120.632, f: 132.48, l: "A", a: 0},
{o: 132.48, f: 145.708, l: "A", a: 1},
{o: 145.708, f: 158.372, l: "A", a: 0},
{o: 158.372, f: 174.532, l: "A", a: 1},
{o: 174.532, f: 180.324, l: "B", a: 0}],
[{o: 0.068, f: 9.096, l: "A", a: 0},
{o: 9.096, f: 20.984, l: "A", a: 1},
{o: 20.984, f: 34.996, l: "B", a: 0},
{o: 34.996, f: 50.724, l: "B", a: 1},
{o: 50.724, f: 65.552, l: "B", a: 0},
{o: 65.552, f: 85.648, l: "B", a: 1},
{o: 85.648, f: 101.896, l: "B", a: 0},
{o: 101.896, f: 120.632, l: "B", a: 1},
{o: 120.632, f: 132.48, l: "B", a: 0},
{o: 132.48, f: 145.708, l: "C", a: 1},
{o: 145.708, f: 158.372, l: "D", a: 0},
{o: 158.372, f: 174.532, l: "E", a: 1},
{o: 174.532, f: 180.324, l: "F", a: 0}],
[{o: 0.387, f: 2.733, l: "8", a: 0},
{o: 2.733, f: 8.307, l: "7", a: 1},
{o: 8.307, f: 21.48, l: "5", a: 0},
{o: 21.48, f: 36.853, l: "3", a: 1},
{o: 36.853, f: 64.013, l: "2", a: 0},
{o: 64.013, f: 105.96, l: "1", a: 1},
{o: 105.96, f: 119.987, l: "4", a: 0},
{o: 119.987, f: 145.773, l: "1", a: 1},
{o: 145.773, f: 158.707, l: "2", a: 0},
{o: 158.707, f: 173.693, l: "1", a: 1},
{o: 173.693, f: 180.36, l: "6", a: 0}],
[{o: 0, f: 14.155, l: "a", a: 0},
{o: 14.155, f: 35.76, l: "a", a: 1},
{o: 35.76, f: 48.425, l: "b", a: 0},
{o: 48.425, f: 64.815, l: "b", a: 1},
{o: 64.815, f: 85.675, l: "c", a: 0},
{o: 85.675, f: 105.79, l: "c", a: 1},
{o: 105.79, f: 134.1, l: "d", a: 0},
{o: 134.1, f: 146.765, l: "b", a: 1},
{o: 146.765, f: 166.88, l: "b", a: 0},
{o: 166.88, f: 179.545, l: "e", a: 1}],
[{o: 0, f: 19.296, l: "n1", a: 0},
{o: 19.296, f: 31.498, l: "A", a: 1},
{o: 31.498, f: 69.161, l: "n2", a: 0},
{o: 69.161, f: 84.555, l: "B", a: 1},
{o: 84.555, f: 89.641, l: "n3", a: 0},
{o: 89.641, f: 104.885, l: "B", a: 1},
{o: 104.885, f: 119.954, l: "n4", a: 0},
{o: 119.954, f: 136.022, l: "A", a: 1},
{o: 136.022, f: 147.876, l: "A", a: 0},
{o: 147.876, f: 156.085, l: "n6", a: 1},
{o: 156.085, f: 167.938, l: "A", a: 0},
{o: 167.938, f: 180.233, l: "n7", a: 1}],
[{o: 0, f: 0.096, l: "G", a: 0},
{o: 0.096, f: 37.764, l: "D", a: 1},
{o: 37.764, f: 61.104, l: "F", a: 0},
{o: 61.104, f: 104.86, l: "A", a: 1},
{o: 104.86, f: 123.604, l: "E", a: 0},
{o: 123.604, f: 130.244, l: "F", a: 1},
{o: 130.244, f: 145.132, l: "E", a: 0},
{o: 145.132, f: 169.02, l: "D", a: 1},
{o: 169.02, f: 180.36, l: "E", a: 0},
{o: 180.36, f: 180.481, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001229.ogg";

var artist = "Ashley MacIsaac";

var track = "Rusty D con STRUCK tion";
