var data = [
[{o: 0.395, f: 44.033, l: "A", a: 0},
{o: 44.033, f: 87.03, l: "B", a: 1},
{o: 87.03, f: 140.739, l: "C", a: 0},
{o: 140.739, f: 201.67, l: "D", a: 1},
{o: 201.67, f: 228.474, l: "E", a: 0},
{o: 228.474, f: 278.694, l: "E", a: 1},
{o: 278.694, f: 301.919, l: "F", a: 0},
{o: 301.919, f: 326.955, l: "C", a: 1},
{o: 326.955, f: 373.211, l: "D", a: 0}],
[{o: 0, f: 373.212, l: "A", a: 0}],
[{o: 0, f: 373.212, l: "A", a: 0}],
[{o: 0.493, f: 1.613, l: "1", a: 0},
{o: 1.613, f: 7.2, l: "2", a: 1},
{o: 7.2, f: 14.32, l: "4", a: 0},
{o: 14.32, f: 41.347, l: "1", a: 1},
{o: 41.347, f: 51.8, l: "6", a: 0},
{o: 51.8, f: 61.813, l: "4", a: 1},
{o: 61.813, f: 68.16, l: "6", a: 0},
{o: 68.16, f: 95.36, l: "4", a: 1},
{o: 95.36, f: 102.667, l: "1", a: 0},
{o: 102.667, f: 107.04, l: "7", a: 1},
{o: 107.04, f: 123.387, l: "1", a: 0},
{o: 123.387, f: 140.533, l: "2", a: 1},
{o: 140.533, f: 147.013, l: "5", a: 0},
{o: 147.013, f: 165.6, l: "2", a: 1},
{o: 165.6, f: 285.147, l: "3", a: 0},
{o: 285.147, f: 297.227, l: "2", a: 1},
{o: 297.227, f: 302.52, l: "7", a: 0},
{o: 302.52, f: 327.907, l: "1", a: 1},
{o: 327.907, f: 338.573, l: "2", a: 0},
{o: 338.573, f: 350.627, l: "5", a: 1},
{o: 350.627, f: 367.68, l: "3", a: 0},
{o: 367.68, f: 370.147, l: "8", a: 1}],
[{o: 0, f: 102.065, l: "a", a: 0},
{o: 102.065, f: 145.275, l: "b", a: 1},
{o: 145.275, f: 171.35, l: "c", a: 0},
{o: 171.35, f: 220.52, l: "d", a: 1},
{o: 220.52, f: 282.355, l: "d", a: 0},
{o: 282.355, f: 298.745, l: "e", a: 1},
{o: 298.745, f: 341.955, l: "b", a: 0},
{o: 341.955, f: 371.01, l: "f", a: 1},
{o: 371.01, f: 373.245, l: "g", a: 0}],
[{o: 0, f: 372.994, l: "A", a: 0},
{o: 0.302, f: 373.052, l: "A", a: 1}],
[{o: 0, f: 0.244, l: "J", a: 0},
{o: 0.244, f: 2.348, l: "E", a: 1},
{o: 2.348, f: 44.492, l: "D", a: 0},
{o: 44.492, f: 53.588, l: "G", a: 1},
{o: 53.588, f: 115.068, l: "F", a: 0},
{o: 115.068, f: 147.444, l: "D", a: 1},
{o: 147.444, f: 193.832, l: "C", a: 0},
{o: 193.832, f: 311.956, l: "I", a: 1},
{o: 311.956, f: 365.956, l: "D", a: 0},
{o: 365.956, f: 369.204, l: "I", a: 1},
{o: 369.204, f: 373.212, l: "J", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000099.ogg";

var artist = "Compilations";

var track = "Koku Reibo A Bell Ringing in the Em";