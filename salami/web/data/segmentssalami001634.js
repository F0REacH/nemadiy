var data = [
[{o: 0.046, f: 35.205, l: "A", a: 0},
{o: 35.205, f: 63.144, l: "B", a: 1},
{o: 63.144, f: 84.789, l: "B", a: 0},
{o: 84.789, f: 122.882, l: "C", a: 1},
{o: 122.882, f: 152.507, l: "B", a: 0},
{o: 152.507, f: 174.842, l: "B", a: 1},
{o: 174.842, f: 429.085, l: "C", a: 0},
{o: 429.085, f: 456.798, l: "Z", a: 1}],
[{o: 0.032, f: 14.28, l: "B", a: 0},
{o: 14.28, f: 26.888, l: "A", a: 1},
{o: 26.888, f: 52.496, l: "A", a: 0},
{o: 52.496, f: 65.996, l: "A", a: 1},
{o: 65.996, f: 83.26, l: "A", a: 0},
{o: 83.26, f: 95.604, l: "A", a: 1},
{o: 95.604, f: 117, l: "A", a: 0},
{o: 117, f: 128.56, l: "A", a: 1},
{o: 128.56, f: 140.728, l: "A", a: 0},
{o: 140.728, f: 158.812, l: "A", a: 1},
{o: 158.812, f: 171.128, l: "A", a: 0},
{o: 171.128, f: 200.552, l: "A", a: 1},
{o: 200.552, f: 223.716, l: "A", a: 0},
{o: 223.716, f: 242.928, l: "A", a: 1},
{o: 242.928, f: 249.828, l: "A", a: 0},
{o: 249.828, f: 262.148, l: "A", a: 1},
{o: 262.148, f: 282.916, l: "A", a: 0},
{o: 282.916, f: 302.976, l: "A", a: 1},
{o: 302.976, f: 323.336, l: "A", a: 0},
{o: 323.336, f: 342.324, l: "A", a: 1},
{o: 342.324, f: 352.832, l: "A", a: 0},
{o: 352.832, f: 375.472, l: "A", a: 1},
{o: 375.472, f: 388.44, l: "A", a: 0},
{o: 388.44, f: 398.516, l: "A", a: 1},
{o: 398.516, f: 409.148, l: "A", a: 0},
{o: 409.148, f: 419.872, l: "G", a: 1},
{o: 419.872, f: 431.304, l: "G", a: 0},
{o: 431.304, f: 445.944, l: "G", a: 1},
{o: 445.944, f: 456.652, l: "G", a: 0}],
[{o: 0.032, f: 14.28, l: "D", a: 0},
{o: 14.28, f: 26.888, l: "A", a: 1},
{o: 26.888, f: 52.496, l: "A", a: 0},
{o: 52.496, f: 65.996, l: "A", a: 1},
{o: 65.996, f: 83.26, l: "A", a: 0},
{o: 83.26, f: 95.604, l: "A", a: 1},
{o: 95.604, f: 117, l: "A", a: 0},
{o: 117, f: 128.56, l: "A", a: 1},
{o: 128.56, f: 140.728, l: "A", a: 0},
{o: 140.728, f: 158.812, l: "A", a: 1},
{o: 158.812, f: 171.128, l: "A", a: 0},
{o: 171.128, f: 200.552, l: "A", a: 1},
{o: 200.552, f: 223.716, l: "A", a: 0},
{o: 223.716, f: 242.928, l: "A", a: 1},
{o: 242.928, f: 249.828, l: "A", a: 0},
{o: 249.828, f: 262.148, l: "E", a: 1},
{o: 262.148, f: 282.916, l: "F", a: 0},
{o: 282.916, f: 302.976, l: "B", a: 1},
{o: 302.976, f: 323.336, l: "B", a: 0},
{o: 323.336, f: 342.324, l: "G", a: 1},
{o: 342.324, f: 352.832, l: "H", a: 0},
{o: 352.832, f: 375.472, l: "C", a: 1},
{o: 375.472, f: 388.44, l: "C", a: 0},
{o: 388.44, f: 398.516, l: "I", a: 1},
{o: 398.516, f: 409.148, l: "J", a: 0},
{o: 409.148, f: 419.872, l: "K", a: 1},
{o: 419.872, f: 431.304, l: "L", a: 0},
{o: 431.304, f: 445.944, l: "M", a: 1},
{o: 445.944, f: 456.652, l: "N", a: 0}],
[{o: 0.653, f: 15.84, l: "6", a: 0},
{o: 15.84, f: 49.493, l: "1", a: 1},
{o: 49.493, f: 57.28, l: "2", a: 0},
{o: 57.28, f: 83.507, l: "3", a: 1},
{o: 83.507, f: 136.747, l: "1", a: 0},
{o: 136.747, f: 169.32, l: "3", a: 1},
{o: 169.32, f: 234.933, l: "1", a: 0},
{o: 234.933, f: 254.72, l: "2", a: 1},
{o: 254.72, f: 262.187, l: "8", a: 0},
{o: 262.187, f: 276.8, l: "3", a: 1},
{o: 276.8, f: 289.933, l: "2", a: 0},
{o: 289.933, f: 312.52, l: "1", a: 1},
{o: 312.52, f: 332.08, l: "2", a: 0},
{o: 332.08, f: 372.64, l: "1", a: 1},
{o: 372.64, f: 411.653, l: "4", a: 0},
{o: 411.653, f: 426.773, l: "7", a: 1},
{o: 426.773, f: 456.387, l: "5", a: 0}],
[{o: 0, f: 106.535, l: "a", a: 0},
{o: 106.535, f: 213.815, l: "a", a: 1},
{o: 213.815, f: 256.28, l: "b", a: 0},
{o: 256.28, f: 330.78, l: "c", a: 1},
{o: 330.78, f: 409.005, l: "c", a: 0},
{o: 409.005, f: 456.685, l: "d", a: 1}],
[{o: 0, f: 14.861, l: "n1", a: 0},
{o: 14.861, f: 23.766, l: "B", a: 1},
{o: 23.766, f: 32.961, l: "B", a: 0},
{o: 32.961, f: 42.075, l: "B", a: 1},
{o: 42.075, f: 50.213, l: "B", a: 0},
{o: 50.213, f: 54.834, l: "n5", a: 1},
{o: 54.834, f: 67.802, l: "A", a: 0},
{o: 67.802, f: 72.562, l: "n6", a: 1},
{o: 72.562, f: 82.071, l: "E", a: 0},
{o: 82.071, f: 90.535, l: "B", a: 1},
{o: 90.535, f: 101.355, l: "n8", a: 0},
{o: 101.355, f: 111.015, l: "B", a: 1},
{o: 111.015, f: 120.639, l: "B", a: 0},
{o: 120.639, f: 129.196, l: "B", a: 1},
{o: 129.196, f: 143.836, l: "n11", a: 0},
{o: 143.836, f: 158.546, l: "A", a: 1},
{o: 158.546, f: 172.118, l: "A", a: 0},
{o: 172.118, f: 175.926, l: "n13", a: 1},
{o: 175.926, f: 190.148, l: "A", a: 0},
{o: 190.148, f: 198.728, l: "D", a: 1},
{o: 198.728, f: 205.322, l: "n15", a: 0},
{o: 205.322, f: 213.949, l: "D", a: 1},
{o: 213.949, f: 225.384, l: "n16", a: 0},
{o: 225.384, f: 240.21, l: "A", a: 1},
{o: 240.21, f: 253.771, l: "A", a: 0},
{o: 253.771, f: 270.083, l: "n18", a: 1},
{o: 270.083, f: 283.98, l: "A", a: 0},
{o: 283.98, f: 302.08, l: "n19", a: 1},
{o: 302.08, f: 317.196, l: "C", a: 0},
{o: 317.196, f: 330.49, l: "C", a: 1},
{o: 330.49, f: 344.561, l: "A", a: 0},
{o: 344.561, f: 356.101, l: "n22", a: 1},
{o: 356.101, f: 370.567, l: "A", a: 0},
{o: 370.567, f: 379.716, l: "E", a: 1},
{o: 379.716, f: 403.911, l: "n23", a: 0},
{o: 403.911, f: 419.213, l: "A", a: 1},
{o: 419.213, f: 456.644, l: "n24", a: 0}],
[{o: 0, f: 0.032, l: "F", a: 0},
{o: 0.032, f: 173.368, l: "B", a: 1},
{o: 173.368, f: 216.372, l: "E", a: 0},
{o: 216.372, f: 246.796, l: "B", a: 1},
{o: 246.796, f: 278.572, l: "E", a: 0},
{o: 278.572, f: 287.988, l: "B", a: 1},
{o: 287.988, f: 308.288, l: "E", a: 0},
{o: 308.288, f: 328.796, l: "A", a: 1},
{o: 328.796, f: 356.72, l: "E", a: 0},
{o: 356.72, f: 427.588, l: "A", a: 1},
{o: 427.588, f: 456.652, l: "B", a: 0},
{o: 456.652, f: 456.69, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001634.ogg";

var artist = "Thought Process";

var track = "Times";