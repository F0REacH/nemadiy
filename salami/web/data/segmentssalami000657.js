var data = [
[{o: 0.058, f: 1.834, l: "Z", a: 0},
{o: 1.834, f: 17.204, l: "A", a: 1},
{o: 17.204, f: 32.69, l: "A", a: 0},
{o: 32.69, f: 48.202, l: "A", a: 1},
{o: 48.202, f: 78.819, l: "B", a: 0},
{o: 78.819, f: 109.312, l: "A", a: 1},
{o: 109.312, f: 139.4, l: "B", a: 0},
{o: 139.4, f: 172.097, l: "A", a: 1},
{o: 172.097, f: 192.311, l: "C", a: 0},
{o: 192.311, f: 252.179, l: "A", a: 1},
{o: 252.179, f: 267.065, l: "D", a: 0},
{o: 267.065, f: 302.531, l: "A", a: 1},
{o: 302.531, f: 420.925, l: "E", a: 0},
{o: 420.925, f: 450.948, l: "A", a: 1},
{o: 450.948, f: 480.623, l: "B", a: 0},
{o: 480.623, f: 495.461, l: "A", a: 1},
{o: 495.461, f: 510.322, l: "B", a: 0},
{o: 510.322, f: 569.045, l: "A", a: 1},
{o: 569.045, f: 628.936, l: "E'", a: 0},
{o: 628.936, f: 678.792, l: "Z", a: 1}],
[{o: 0.004, f: 11.892, l: "H", a: 0},
{o: 11.892, f: 30.112, l: "C", a: 1},
{o: 30.112, f: 49.504, l: "C", a: 0},
{o: 49.504, f: 77.272, l: "C", a: 1},
{o: 77.272, f: 112.052, l: "C", a: 0},
{o: 112.052, f: 144.044, l: "C", a: 1},
{o: 144.044, f: 165.8, l: "C", a: 0},
{o: 165.8, f: 194.56, l: "H", a: 1},
{o: 194.56, f: 224.032, l: "C", a: 0},
{o: 224.032, f: 255.828, l: "C", a: 1},
{o: 255.828, f: 286.824, l: "H", a: 0},
{o: 286.824, f: 300.044, l: "A", a: 1},
{o: 300.044, f: 309.856, l: "C", a: 0},
{o: 309.856, f: 338.456, l: "C", a: 1},
{o: 338.456, f: 372.828, l: "C", a: 0},
{o: 372.828, f: 387.644, l: "C", a: 1},
{o: 387.644, f: 402.48, l: "C", a: 0},
{o: 402.48, f: 419.02, l: "C", a: 1},
{o: 419.02, f: 431.412, l: "C", a: 0},
{o: 431.412, f: 451.288, l: "C", a: 1},
{o: 451.288, f: 480.028, l: "D", a: 0},
{o: 480.028, f: 498.152, l: "C", a: 1},
{o: 498.152, f: 519.04, l: "D", a: 0},
{o: 519.04, f: 540.572, l: "G", a: 1},
{o: 540.572, f: 552.444, l: "G", a: 0},
{o: 552.444, f: 568.96, l: "G", a: 1},
{o: 568.96, f: 582.424, l: "D", a: 0},
{o: 582.424, f: 605.36, l: "D", a: 1},
{o: 605.36, f: 631.744, l: "D", a: 0},
{o: 631.744, f: 652.588, l: "A", a: 1},
{o: 652.588, f: 665.844, l: "J", a: 0},
{o: 665.844, f: 677.716, l: "J", a: 1}],
[{o: 0, f: 678.713, l: "A", a: 0}],
[{o: 0.413, f: 2.093, l: "6", a: 0},
{o: 2.093, f: 8.36, l: "5", a: 1},
{o: 8.36, f: 15.48, l: "7", a: 0},
{o: 15.48, f: 44.973, l: "1", a: 1},
{o: 44.973, f: 78.96, l: "3", a: 0},
{o: 78.96, f: 94.787, l: "1", a: 1},
{o: 94.787, f: 109.96, l: "3", a: 0},
{o: 109.96, f: 187.213, l: "1", a: 1},
{o: 187.213, f: 192.48, l: "4", a: 0},
{o: 192.48, f: 232.667, l: "2", a: 1},
{o: 232.667, f: 281.44, l: "1", a: 0},
{o: 281.44, f: 297.893, l: "2", a: 1},
{o: 297.893, f: 302.64, l: "4", a: 0},
{o: 302.64, f: 367.04, l: "2", a: 1},
{o: 367.04, f: 371.667, l: "1", a: 0},
{o: 371.667, f: 420.2, l: "2", a: 1},
{o: 420.2, f: 434.933, l: "4", a: 0},
{o: 434.933, f: 446.933, l: "1", a: 1},
{o: 446.933, f: 477.493, l: "3", a: 0},
{o: 477.493, f: 496.053, l: "1", a: 1},
{o: 496.053, f: 508.133, l: "3", a: 0},
{o: 508.133, f: 628.48, l: "1", a: 1},
{o: 628.48, f: 634.027, l: "8", a: 0},
{o: 634.027, f: 639.707, l: "6", a: 1},
{o: 639.707, f: 668.68, l: "5", a: 0},
{o: 668.68, f: 677.24, l: "6", a: 1}],
[{o: 0, f: 108.77, l: "a", a: 0},
{o: 108.77, f: 141.55, l: "b", a: 1},
{o: 141.55, f: 172.84, l: "b", a: 0},
{o: 172.84, f: 432.845, l: "c", a: 1},
{o: 432.845, f: 541.615, l: "a", a: 0},
{o: 541.615, f: 572.16, l: "b", a: 1},
{o: 572.16, f: 679.44, l: "d", a: 0}],
[{o: 0, f: 678.417, l: "A", a: 0},
{o: 0.012, f: 678.441, l: "A", a: 1}],
[{o: 0, f: 0.004, l: "G", a: 0},
{o: 0.004, f: 67.688, l: "F", a: 1},
{o: 67.688, f: 77.724, l: "D", a: 0},
{o: 77.724, f: 678.488, l: "F", a: 1},
{o: 678.488, f: 678.714, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000657.ogg";

var artist = "Particle";

var track = "Loose Caboose";