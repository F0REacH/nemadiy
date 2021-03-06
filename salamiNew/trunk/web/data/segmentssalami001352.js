var data = [
[{o: 0.139, f: 22.105, l: "N", a: 0},
{o: 22.105, f: 52.64, l: "A", a: 1},
{o: 52.64, f: 95.155, l: "A", a: 0},
{o: 95.155, f: 138.739, l: "A", a: 1},
{o: 138.739, f: 180.071, l: "A", a: 0},
{o: 180.071, f: 220.264, l: "A", a: 1},
{o: 220.264, f: 260.249, l: "A", a: 0},
{o: 260.249, f: 300.28, l: "A", a: 1},
{o: 300.28, f: 330.865, l: "A", a: 0},
{o: 330.865, f: 356.849, l: "A'", a: 1},
{o: 356.849, f: 375.792, l: "B''", a: 0},
{o: 375.792, f: 394.832, l: "A", a: 1},
{o: 394.832, f: 429.221, l: "B", a: 0},
{o: 429.221, f: 448.076, l: "A", a: 1},
{o: 448.076, f: 482.186, l: "B", a: 0},
{o: 482.186, f: 534.616, l: "A", a: 1},
{o: 534.616, f: 552.96, l: "A", a: 0},
{o: 552.96, f: 589.805, l: "B'", a: 1}],
[{o: 0, f: 589.794, l: "A", a: 0}],
[{o: 0.176, f: 29.16, l: "H", a: 0},
{o: 29.16, f: 62.072, l: "F", a: 1},
{o: 62.072, f: 82.436, l: "F", a: 0},
{o: 82.436, f: 99.408, l: "E", a: 1},
{o: 99.408, f: 118.104, l: "F", a: 0},
{o: 118.104, f: 137.688, l: "I", a: 1},
{o: 137.688, f: 152.076, l: "G", a: 0},
{o: 152.076, f: 166.36, l: "G", a: 1},
{o: 166.36, f: 188.34, l: "E", a: 0},
{o: 188.34, f: 203.672, l: "F", a: 1},
{o: 203.672, f: 228.444, l: "E", a: 0},
{o: 228.444, f: 244.804, l: "D", a: 1},
{o: 244.804, f: 269.512, l: "J", a: 0},
{o: 269.512, f: 284.736, l: "D", a: 1},
{o: 284.736, f: 309.2, l: "E", a: 0},
{o: 309.2, f: 331.268, l: "K", a: 1},
{o: 331.268, f: 356.46, l: "L", a: 0},
{o: 356.46, f: 375.208, l: "M", a: 1},
{o: 375.208, f: 394.844, l: "B", a: 0},
{o: 394.844, f: 428.12, l: "C", a: 1},
{o: 428.12, f: 447.616, l: "B", a: 0},
{o: 447.616, f: 480.6, l: "A", a: 1},
{o: 480.6, f: 500.78, l: "N", a: 0},
{o: 500.78, f: 534.072, l: "A", a: 1},
{o: 534.072, f: 553.032, l: "B", a: 0},
{o: 553.032, f: 589.544, l: "C", a: 1}],
[{o: 0.6, f: 10, l: "6", a: 0},
{o: 10, f: 21.907, l: "2", a: 1},
{o: 21.907, f: 45.72, l: "1", a: 0},
{o: 45.72, f: 52.72, l: "8", a: 1},
{o: 52.72, f: 76.867, l: "1", a: 0},
{o: 76.867, f: 95.453, l: "2", a: 1},
{o: 95.453, f: 118.4, l: "1", a: 0},
{o: 118.4, f: 138.493, l: "2", a: 1},
{o: 138.493, f: 150.787, l: "1", a: 0},
{o: 150.787, f: 164.067, l: "5", a: 1},
{o: 164.067, f: 179.827, l: "2", a: 0},
{o: 179.827, f: 198.44, l: "5", a: 1},
{o: 198.44, f: 204.973, l: "1", a: 0},
{o: 204.973, f: 220.2, l: "2", a: 1},
{o: 220.2, f: 244, l: "1", a: 0},
{o: 244, f: 260.733, l: "2", a: 1},
{o: 260.733, f: 283.947, l: "1", a: 0},
{o: 283.947, f: 299.707, l: "2", a: 1},
{o: 299.707, f: 323.627, l: "5", a: 0},
{o: 323.627, f: 330.613, l: "7", a: 1},
{o: 330.613, f: 357.387, l: "4", a: 0},
{o: 357.387, f: 374.493, l: "3", a: 1},
{o: 374.493, f: 394.067, l: "4", a: 0},
{o: 394.067, f: 428.44, l: "3", a: 1},
{o: 428.44, f: 448.44, l: "4", a: 0},
{o: 448.44, f: 480.373, l: "3", a: 1},
{o: 480.373, f: 500.013, l: "4", a: 0},
{o: 500.013, f: 533.813, l: "3", a: 1},
{o: 533.813, f: 552.24, l: "4", a: 0},
{o: 552.24, f: 589.507, l: "3", a: 1}],
[{o: 0, f: 75.99, l: "a", a: 0},
{o: 75.99, f: 193.7, l: "b", a: 1},
{o: 193.7, f: 312.155, l: "b", a: 0},
{o: 312.155, f: 353.875, l: "c", a: 1},
{o: 353.875, f: 461.9, l: "d", a: 0},
{o: 461.9, f: 590.04, l: "d", a: 1}],
[{o: 0, f: 11.575, l: "n1", a: 0},
{o: 11.575, f: 36.513, l: "A", a: 1},
{o: 36.513, f: 55.902, l: "A", a: 0},
{o: 55.902, f: 76.301, l: "n3", a: 1},
{o: 76.301, f: 95.411, l: "A", a: 0},
{o: 95.411, f: 123.159, l: "n4", a: 1},
{o: 123.159, f: 142.187, l: "A", a: 0},
{o: 142.187, f: 162.47, l: "n5", a: 1},
{o: 162.47, f: 181.917, l: "A", a: 0},
{o: 181.917, f: 198.728, l: "B", a: 1},
{o: 198.728, f: 205.044, l: "n7", a: 0},
{o: 205.044, f: 223.98, l: "A", a: 1},
{o: 223.98, f: 232.455, l: "n8", a: 0},
{o: 232.455, f: 251.356, l: "A", a: 1},
{o: 251.356, f: 277.838, l: "n9", a: 0},
{o: 277.838, f: 297.088, l: "A", a: 1},
{o: 297.088, f: 313.945, l: "B", a: 0},
{o: 313.945, f: 589.648, l: "n11", a: 1}],
[{o: 0, f: 0.064, l: "G", a: 0},
{o: 0.064, f: 328.988, l: "B", a: 1},
{o: 328.988, f: 589.696, l: "F", a: 0},
{o: 589.696, f: 589.794, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001352.ogg";

var artist = "Compilations";

var track = "Kaman Song Gula Sta de Kilie";
