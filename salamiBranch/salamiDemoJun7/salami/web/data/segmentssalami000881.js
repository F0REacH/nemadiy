var data = [
[{o: 1.045, f: 48.635, l: "A", a: 0},
{o: 48.635, f: 109.506, l: "B", a: 1},
{o: 109.506, f: 131.058, l: "C", a: 0},
{o: 131.058, f: 202.564, l: "A", a: 1},
{o: 202.564, f: 243.284, l: "E", a: 0},
{o: 243.284, f: 289.449, l: "A'", a: 1},
{o: 289.449, f: 342.039, l: "A''", a: 0}],
[{o: 0.016, f: 12.464, l: "C", a: 0},
{o: 12.464, f: 29.184, l: "C", a: 1},
{o: 29.184, f: 53.684, l: "C", a: 0},
{o: 53.684, f: 70.212, l: "C", a: 1},
{o: 70.212, f: 88.244, l: "G", a: 0},
{o: 88.244, f: 98.08, l: "C", a: 1},
{o: 98.08, f: 129.2, l: "C", a: 0},
{o: 129.2, f: 138.496, l: "C", a: 1},
{o: 138.496, f: 156.672, l: "G", a: 0},
{o: 156.672, f: 171.004, l: "G", a: 1},
{o: 171.004, f: 191.576, l: "C", a: 0},
{o: 191.576, f: 201.988, l: "G", a: 1},
{o: 201.988, f: 235.556, l: "C", a: 0},
{o: 235.556, f: 251.832, l: "C", a: 1},
{o: 251.832, f: 263.32, l: "G", a: 0},
{o: 263.32, f: 279.124, l: "G", a: 1},
{o: 279.124, f: 293.588, l: "C", a: 0},
{o: 293.588, f: 315.64, l: "C", a: 1},
{o: 315.64, f: 338.012, l: "G", a: 0}],
[{o: 0.016, f: 12.464, l: "C", a: 0},
{o: 12.464, f: 29.184, l: "A", a: 1},
{o: 29.184, f: 53.684, l: "A", a: 0},
{o: 53.684, f: 70.212, l: "C", a: 1},
{o: 70.212, f: 88.244, l: "G", a: 0},
{o: 88.244, f: 98.08, l: "D", a: 1},
{o: 98.08, f: 129.2, l: "E", a: 0},
{o: 129.2, f: 138.496, l: "H", a: 1},
{o: 138.496, f: 156.672, l: "B", a: 0},
{o: 156.672, f: 171.004, l: "B", a: 1},
{o: 171.004, f: 191.576, l: "C", a: 0},
{o: 191.576, f: 201.988, l: "G", a: 1},
{o: 201.988, f: 235.556, l: "F", a: 0},
{o: 235.556, f: 251.832, l: "C", a: 1},
{o: 251.832, f: 263.32, l: "G", a: 0},
{o: 263.32, f: 279.124, l: "B", a: 1},
{o: 279.124, f: 293.588, l: "F", a: 0},
{o: 293.588, f: 315.64, l: "I", a: 1},
{o: 315.64, f: 338.012, l: "G", a: 0}],
[{o: 0.573, f: 2.813, l: "8", a: 0},
{o: 2.813, f: 11.773, l: "1", a: 1},
{o: 11.773, f: 23.08, l: "6", a: 0},
{o: 23.08, f: 35.48, l: "4", a: 1},
{o: 35.48, f: 47.32, l: "6", a: 0},
{o: 47.32, f: 57, l: "2", a: 1},
{o: 57, f: 69.493, l: "1", a: 0},
{o: 69.493, f: 76.733, l: "4", a: 1},
{o: 76.733, f: 81.533, l: "3", a: 0},
{o: 81.533, f: 88.213, l: "5", a: 1},
{o: 88.213, f: 106.707, l: "3", a: 0},
{o: 106.707, f: 117.76, l: "4", a: 1},
{o: 117.76, f: 124.68, l: "1", a: 0},
{o: 124.68, f: 129.827, l: "5", a: 1},
{o: 129.827, f: 141.133, l: "2", a: 0},
{o: 141.133, f: 165.693, l: "1", a: 1},
{o: 165.693, f: 201.787, l: "3", a: 0},
{o: 201.787, f: 209.213, l: "4", a: 1},
{o: 209.213, f: 218.813, l: "5", a: 0},
{o: 218.813, f: 235.693, l: "1", a: 1},
{o: 235.693, f: 242.64, l: "5", a: 0},
{o: 242.64, f: 254.52, l: "2", a: 1},
{o: 254.52, f: 294.893, l: "1", a: 0},
{o: 294.893, f: 337.213, l: "2", a: 1},
{o: 337.213, f: 341.907, l: "7", a: 0}],
[{o: 0, f: 32.78, l: "a", a: 0},
{o: 32.78, f: 58.855, l: "b", a: 1},
{o: 58.855, f: 118.455, l: "c", a: 0},
{o: 118.455, f: 140.06, l: "d", a: 1},
{o: 140.06, f: 164.645, l: "b", a: 0},
{o: 164.645, f: 231.695, l: "e", a: 1},
{o: 231.695, f: 253.3, l: "d", a: 0},
{o: 253.3, f: 277.885, l: "b", a: 1},
{o: 277.885, f: 341.955, l: "f", a: 0}],
[{o: 0, f: 133.492, l: "n1", a: 0},
{o: 133.492, f: 152.509, l: "A", a: 1},
{o: 152.509, f: 165.674, l: "B", a: 0},
{o: 165.674, f: 245.853, l: "n3", a: 1},
{o: 245.853, f: 265.207, l: "A", a: 0},
{o: 265.207, f: 278.686, l: "B", a: 1},
{o: 278.686, f: 341.844, l: "n5", a: 0}],
[{o: 0, f: 0.1, l: "I", a: 0},
{o: 0.1, f: 57.06, l: "E", a: 1},
{o: 57.06, f: 72.904, l: "H", a: 0},
{o: 72.904, f: 117.836, l: "C", a: 1},
{o: 117.836, f: 166.98, l: "H", a: 0},
{o: 166.98, f: 209.152, l: "C", a: 1},
{o: 209.152, f: 226.764, l: "A", a: 0},
{o: 226.764, f: 317.708, l: "H", a: 1},
{o: 317.708, f: 337.94, l: "E", a: 0},
{o: 337.94, f: 341.996, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000881.ogg";