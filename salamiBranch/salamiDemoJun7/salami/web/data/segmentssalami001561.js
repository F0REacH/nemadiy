var data = [
[{o: 0.05, f: 19.302, l: "Z", a: 0},
{o: 19.302, f: 43.664, l: "A", a: 1},
{o: 43.664, f: 92.898, l: "B", a: 0},
{o: 92.898, f: 117.063, l: "C", a: 1},
{o: 117.063, f: 141.176, l: "D", a: 0},
{o: 141.176, f: 190.051, l: "B", a: 1},
{o: 190.051, f: 232.37, l: "C", a: 0},
{o: 232.37, f: 266.527, l: "Z", a: 1}],
[{o: 0.12, f: 19.036, l: "D", a: 0},
{o: 19.036, f: 43.676, l: "D", a: 1},
{o: 43.676, f: 76.556, l: "D", a: 0},
{o: 76.556, f: 99.584, l: "D", a: 1},
{o: 99.584, f: 114.28, l: "D", a: 0},
{o: 114.28, f: 130.064, l: "D", a: 1},
{o: 130.064, f: 144.52, l: "D", a: 0},
{o: 144.52, f: 160.796, l: "D", a: 1},
{o: 160.796, f: 184.796, l: "D", a: 0},
{o: 184.796, f: 199.964, l: "D", a: 1},
{o: 199.964, f: 215.184, l: "D", a: 0},
{o: 215.184, f: 228.412, l: "D", a: 1},
{o: 228.412, f: 243.86, l: "D", a: 0},
{o: 243.86, f: 254.88, l: "A", a: 1},
{o: 254.88, f: 266.388, l: "D", a: 0}],
[{o: 0.12, f: 19.036, l: "D", a: 0},
{o: 19.036, f: 43.676, l: "C", a: 1},
{o: 43.676, f: 76.556, l: "C", a: 0},
{o: 76.556, f: 99.584, l: "B", a: 1},
{o: 99.584, f: 114.28, l: "B", a: 0},
{o: 114.28, f: 130.064, l: "B", a: 1},
{o: 130.064, f: 144.52, l: "B", a: 0},
{o: 144.52, f: 160.796, l: "B", a: 1},
{o: 160.796, f: 184.796, l: "B", a: 0},
{o: 184.796, f: 199.964, l: "A", a: 1},
{o: 199.964, f: 215.184, l: "A", a: 0},
{o: 215.184, f: 228.412, l: "E", a: 1},
{o: 228.412, f: 243.86, l: "F", a: 0},
{o: 243.86, f: 254.88, l: "G", a: 1},
{o: 254.88, f: 266.388, l: "D", a: 0}],
[{o: 0.413, f: 9, l: "4", a: 0},
{o: 9, f: 43.493, l: "3", a: 1},
{o: 43.493, f: 68.467, l: "2", a: 0},
{o: 68.467, f: 83.667, l: "1", a: 1},
{o: 83.667, f: 89.507, l: "2", a: 0},
{o: 89.507, f: 115.267, l: "1", a: 1},
{o: 115.267, f: 133.667, l: "6", a: 0},
{o: 133.667, f: 137.453, l: "5", a: 1},
{o: 137.453, f: 142.067, l: "2", a: 0},
{o: 142.067, f: 222.547, l: "1", a: 1},
{o: 222.547, f: 230.867, l: "5", a: 0},
{o: 230.867, f: 238.52, l: "8", a: 1},
{o: 238.52, f: 257.747, l: "7", a: 0},
{o: 257.747, f: 266.307, l: "4", a: 1}],
[{o: 0, f: 79.715, l: "a", a: 0},
{o: 79.715, f: 118.455, l: "b", a: 1},
{o: 118.455, f: 140.805, l: "c", a: 0},
{o: 140.805, f: 165.39, l: "c", a: 1},
{o: 165.39, f: 177.31, l: "d", a: 0},
{o: 177.31, f: 216.05, l: "b", a: 1},
{o: 216.05, f: 237.655, l: "c", a: 0},
{o: 237.655, f: 265.965, l: "e", a: 1}],
[{o: 0, f: 76.986, l: "n1", a: 0},
{o: 76.986, f: 90.848, l: "B", a: 1},
{o: 90.848, f: 103.039, l: "A", a: 0},
{o: 103.039, f: 115.113, l: "A", a: 1},
{o: 115.113, f: 125.608, l: "A", a: 0},
{o: 125.608, f: 139.192, l: "B", a: 1},
{o: 139.192, f: 149.908, l: "A", a: 0},
{o: 149.908, f: 163.538, l: "C", a: 1},
{o: 163.538, f: 174.126, l: "A", a: 0},
{o: 174.126, f: 187.931, l: "C", a: 1},
{o: 187.931, f: 200.005, l: "A", a: 0},
{o: 200.005, f: 211.963, l: "A", a: 1},
{o: 211.963, f: 222.378, l: "A", a: 0},
{o: 222.378, f: 266.426, l: "n6", a: 1}],
[{o: 0, f: 0.12, l: "G", a: 0},
{o: 0.12, f: 22.46, l: "F", a: 1},
{o: 22.46, f: 65.94, l: "A", a: 0},
{o: 65.94, f: 88.856, l: "B", a: 1},
{o: 88.856, f: 238.292, l: "E", a: 0},
{o: 238.292, f: 266.388, l: "F", a: 1},
{o: 266.388, f: 266.427, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001561.ogg";
