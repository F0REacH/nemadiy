var data = [
[{o: 0, f: 8.903, l: "Z", a: 0},
{o: 8.903, f: 34.941, l: "A", a: 1},
{o: 34.941, f: 48.946, l: "B", a: 0},
{o: 48.946, f: 92.107, l: "B", a: 1},
{o: 92.107, f: 120.149, l: "C", a: 0},
{o: 120.149, f: 168.256, l: "C", a: 1},
{o: 168.256, f: 232.231, l: "D", a: 0},
{o: 232.231, f: 266.364, l: "C", a: 1},
{o: 266.364, f: 314.177, l: "C", a: 0},
{o: 314.177, f: 319.324, l: "E", a: 1},
{o: 319.324, f: 387.823, l: "D", a: 0},
{o: 387.823, f: 430.642, l: "C", a: 1},
{o: 430.642, f: 538.175, l: "Z", a: 0}],
[{o: 0, f: 538.107, l: "A", a: 0}],
[{o: 0.18, f: 14.96, l: "H", a: 0},
{o: 14.96, f: 34.012, l: "D", a: 1},
{o: 34.012, f: 51.072, l: "D", a: 0},
{o: 51.072, f: 71.808, l: "A", a: 1},
{o: 71.808, f: 91.62, l: "A", a: 0},
{o: 91.62, f: 110.36, l: "B", a: 1},
{o: 110.36, f: 123.32, l: "B", a: 0},
{o: 123.32, f: 139.964, l: "I", a: 1},
{o: 139.964, f: 156.832, l: "A", a: 0},
{o: 156.832, f: 181.904, l: "E", a: 1},
{o: 181.904, f: 202.772, l: "E", a: 0},
{o: 202.772, f: 234.3, l: "A", a: 1},
{o: 234.3, f: 258.088, l: "B", a: 0},
{o: 258.088, f: 272.564, l: "A", a: 1},
{o: 272.564, f: 297.52, l: "A", a: 0},
{o: 297.52, f: 314.584, l: "J", a: 1},
{o: 314.584, f: 337.256, l: "E", a: 0},
{o: 337.256, f: 359.004, l: "F", a: 1},
{o: 359.004, f: 373.352, l: "F", a: 0},
{o: 373.352, f: 387.836, l: "K", a: 1},
{o: 387.836, f: 405.392, l: "C", a: 0},
{o: 405.392, f: 433.58, l: "C", a: 1},
{o: 433.58, f: 444.972, l: "L", a: 0},
{o: 444.972, f: 468.18, l: "G", a: 1},
{o: 468.18, f: 485.104, l: "G", a: 0},
{o: 485.104, f: 499.348, l: "M", a: 1},
{o: 499.348, f: 511.828, l: "N", a: 0},
{o: 511.828, f: 535.16, l: "O", a: 1}],
[{o: 0.707, f: 9.2, l: "4", a: 0},
{o: 9.2, f: 169.133, l: "1", a: 1},
{o: 169.133, f: 188.373, l: "3", a: 0},
{o: 188.373, f: 201.4, l: "2", a: 1},
{o: 201.4, f: 261.293, l: "1", a: 0},
{o: 261.293, f: 266.867, l: "2", a: 1},
{o: 266.867, f: 314.387, l: "1", a: 0},
{o: 314.387, f: 325.907, l: "3", a: 1},
{o: 325.907, f: 377.16, l: "2", a: 0},
{o: 377.16, f: 387.187, l: "3", a: 1},
{o: 387.187, f: 429.827, l: "1", a: 0},
{o: 429.827, f: 444.76, l: "7", a: 1},
{o: 444.76, f: 457.893, l: "4", a: 0},
{o: 457.893, f: 485.347, l: "5", a: 1},
{o: 485.347, f: 501.88, l: "4", a: 0},
{o: 501.88, f: 526.133, l: "6", a: 1},
{o: 526.133, f: 537.933, l: "8", a: 0}],
[{o: 0, f: 91.635, l: "a", a: 0},
{o: 91.635, f: 261.495, l: "b", a: 1},
{o: 261.495, f: 436.57, l: "b", a: 0},
{o: 436.57, f: 461.9, l: "c", a: 1},
{o: 461.9, f: 493.19, l: "d", a: 0},
{o: 493.19, f: 538.635, l: "d", a: 1}],
[{o: 0, f: 36.676, l: "n1", a: 0},
{o: 36.676, f: 48.924, l: "A", a: 1},
{o: 48.924, f: 54.161, l: "n2", a: 0},
{o: 54.161, f: 67.976, l: "C", a: 1},
{o: 67.976, f: 81.792, l: "C", a: 0},
{o: 81.792, f: 98.139, l: "n3", a: 1},
{o: 98.139, f: 112.141, l: "E", a: 0},
{o: 112.141, f: 274.112, l: "n4", a: 1},
{o: 274.112, f: 287.742, l: "E", a: 0},
{o: 287.742, f: 322.27, l: "n5", a: 1},
{o: 322.27, f: 337.281, l: "F", a: 0},
{o: 337.281, f: 351.121, l: "A", a: 1},
{o: 351.121, f: 364.1, l: "A", a: 0},
{o: 364.1, f: 376.895, l: "F", a: 1},
{o: 376.895, f: 394.217, l: "n9", a: 0},
{o: 394.217, f: 408.021, l: "B", a: 1},
{o: 408.021, f: 422.011, l: "B", a: 0},
{o: 422.011, f: 466.802, l: "n10", a: 1},
{o: 466.802, f: 476.613, l: "D", a: 0},
{o: 476.613, f: 480.456, l: "n11", a: 1},
{o: 480.456, f: 491.381, l: "D", a: 0},
{o: 491.381, f: 538.006, l: "n12", a: 1}],
[{o: 0, f: 0.032, l: "G", a: 0},
{o: 0.032, f: 34.66, l: "F", a: 1},
{o: 34.66, f: 80.68, l: "D", a: 0},
{o: 80.68, f: 135.436, l: "F", a: 1},
{o: 135.436, f: 216.392, l: "A", a: 0},
{o: 216.392, f: 245.556, l: "F", a: 1},
{o: 245.556, f: 383.92, l: "A", a: 0},
{o: 383.92, f: 392.172, l: "F", a: 1},
{o: 392.172, f: 412.464, l: "D", a: 0},
{o: 412.464, f: 463.12, l: "F", a: 1},
{o: 463.12, f: 490.06, l: "D", a: 0},
{o: 490.06, f: 498.884, l: "F", a: 1},
{o: 498.884, f: 537.98, l: "D", a: 0},
{o: 537.98, f: 538.107, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000225.ogg";
