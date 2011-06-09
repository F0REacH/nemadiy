var data = [
[{o: 0.208, f: 10.605, l: "A", a: 0},
{o: 10.605, f: 39.542, l: "B", a: 1},
{o: 39.542, f: 49.294, l: "B", a: 0},
{o: 49.294, f: 156.874, l: "C", a: 1},
{o: 156.874, f: 179.92, l: "B", a: 0}],
[{o: 0.156, f: 9.78, l: "I", a: 0},
{o: 9.78, f: 20.26, l: "I", a: 1},
{o: 20.26, f: 30.48, l: "I", a: 0},
{o: 30.48, f: 39.384, l: "I", a: 1},
{o: 39.384, f: 45.5, l: "I", a: 0},
{o: 45.5, f: 55.632, l: "I", a: 1},
{o: 55.632, f: 62.868, l: "I", a: 0},
{o: 62.868, f: 73.652, l: "I", a: 1},
{o: 73.652, f: 80.688, l: "I", a: 0},
{o: 80.688, f: 88.868, l: "I", a: 1},
{o: 88.868, f: 97.26, l: "I", a: 0},
{o: 97.26, f: 103.404, l: "I", a: 1},
{o: 103.404, f: 111.604, l: "I", a: 0},
{o: 111.604, f: 117.08, l: "I", a: 1},
{o: 117.08, f: 122.892, l: "I", a: 0},
{o: 122.892, f: 128.216, l: "I", a: 1},
{o: 128.216, f: 137.828, l: "I", a: 0},
{o: 137.828, f: 146.136, l: "I", a: 1},
{o: 146.136, f: 156.54, l: "A", a: 0},
{o: 156.54, f: 168.976, l: "I", a: 1},
{o: 168.976, f: 176.816, l: "I", a: 0}],
[{o: 0.156, f: 9.78, l: "I", a: 0},
{o: 9.78, f: 20.26, l: "F", a: 1},
{o: 20.26, f: 30.48, l: "A", a: 0},
{o: 30.48, f: 39.384, l: "F", a: 1},
{o: 39.384, f: 45.5, l: "H", a: 0},
{o: 45.5, f: 55.632, l: "A", a: 1},
{o: 55.632, f: 62.868, l: "E", a: 0},
{o: 62.868, f: 73.652, l: "A", a: 1},
{o: 73.652, f: 80.688, l: "E", a: 0},
{o: 80.688, f: 88.868, l: "G", a: 1},
{o: 88.868, f: 97.26, l: "C", a: 0},
{o: 97.26, f: 103.404, l: "D", a: 1},
{o: 103.404, f: 111.604, l: "D", a: 0},
{o: 111.604, f: 117.08, l: "G", a: 1},
{o: 117.08, f: 122.892, l: "B", a: 0},
{o: 122.892, f: 128.216, l: "C", a: 1},
{o: 128.216, f: 137.828, l: "I", a: 0},
{o: 137.828, f: 146.136, l: "H", a: 1},
{o: 146.136, f: 156.54, l: "J", a: 0},
{o: 156.54, f: 168.976, l: "A", a: 1},
{o: 168.976, f: 176.816, l: "B", a: 0}],
[{o: 0.52, f: 5.907, l: "8", a: 0},
{o: 5.907, f: 28.933, l: "1", a: 1},
{o: 28.933, f: 38.587, l: "2", a: 0},
{o: 38.587, f: 51.107, l: "1", a: 1},
{o: 51.107, f: 87.387, l: "2", a: 0},
{o: 87.387, f: 126.987, l: "3", a: 1},
{o: 126.987, f: 145.573, l: "4", a: 0},
{o: 145.573, f: 156.48, l: "5", a: 1},
{o: 156.48, f: 166.24, l: "1", a: 0},
{o: 166.24, f: 174.32, l: "6", a: 1},
{o: 174.32, f: 179.56, l: "7", a: 0}],
[{o: 0, f: 9.685, l: "a", a: 0},
{o: 9.685, f: 19.37, l: "b", a: 1},
{o: 19.37, f: 29.055, l: "b", a: 0},
{o: 29.055, f: 156.45, l: "c", a: 1},
{o: 156.45, f: 164.645, l: "b", a: 0},
{o: 164.645, f: 178.055, l: "d", a: 1},
{o: 178.055, f: 179.545, l: "e", a: 0}],
[{o: 0, f: 179.641, l: "A", a: 0},
{o: 0.012, f: 179.862, l: "A", a: 1}],
[{o: 0, f: 0.004, l: "I", a: 0},
{o: 0.004, f: 18.172, l: "C", a: 1},
{o: 18.172, f: 47.1, l: "A", a: 0},
{o: 47.1, f: 123.82, l: "F", a: 1},
{o: 123.82, f: 135.648, l: "H", a: 0},
{o: 135.648, f: 146.752, l: "F", a: 1},
{o: 146.752, f: 164.06, l: "A", a: 0},
{o: 164.06, f: 176.816, l: "D", a: 1},
{o: 176.816, f: 179.906, l: "I", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000387.ogg";