var data = [
[{o: 0.026, f: 40.007, l: "A", a: 0},
{o: 40.007, f: 75.06, l: "B", a: 1},
{o: 75.06, f: 92.901, l: "C", a: 0},
{o: 92.901, f: 127.994, l: "B", a: 1},
{o: 127.994, f: 145.676, l: "C", a: 0},
{o: 145.676, f: 180.659, l: "C", a: 1},
{o: 180.659, f: 215.973, l: "C", a: 0},
{o: 215.973, f: 335.114, l: "C", a: 1},
{o: 335.114, f: 343.641, l: "Z", a: 0}],
[{o: 0.048, f: 9.348, l: "C", a: 0},
{o: 9.348, f: 20.464, l: "A", a: 1},
{o: 20.464, f: 44.416, l: "C", a: 0},
{o: 44.416, f: 68.468, l: "C", a: 1},
{o: 68.468, f: 90.4, l: "C", a: 0},
{o: 90.4, f: 104.432, l: "C", a: 1},
{o: 104.432, f: 120.944, l: "C", a: 0},
{o: 120.944, f: 143.696, l: "C", a: 1},
{o: 143.696, f: 160.088, l: "C", a: 0},
{o: 160.088, f: 182.036, l: "C", a: 1},
{o: 182.036, f: 197.036, l: "C", a: 0},
{o: 197.036, f: 213.968, l: "C", a: 1},
{o: 213.968, f: 222.636, l: "C", a: 0},
{o: 222.636, f: 232.676, l: "C", a: 1},
{o: 232.676, f: 245.732, l: "C", a: 0},
{o: 245.732, f: 261.316, l: "C", a: 1},
{o: 261.316, f: 276.224, l: "C", a: 0},
{o: 276.224, f: 285.324, l: "C", a: 1},
{o: 285.324, f: 294.116, l: "C", a: 0},
{o: 294.116, f: 308.66, l: "C", a: 1},
{o: 308.66, f: 320.88, l: "C", a: 0},
{o: 320.88, f: 331.82, l: "C", a: 1},
{o: 331.82, f: 343.496, l: "C", a: 0}],
[{o: 0.048, f: 9.348, l: "D", a: 0},
{o: 9.348, f: 20.464, l: "E", a: 1},
{o: 20.464, f: 44.416, l: "A", a: 0},
{o: 44.416, f: 68.468, l: "A", a: 1},
{o: 68.468, f: 90.4, l: "A", a: 0},
{o: 90.4, f: 104.432, l: "A", a: 1},
{o: 104.432, f: 120.944, l: "A", a: 0},
{o: 120.944, f: 143.696, l: "A", a: 1},
{o: 143.696, f: 160.088, l: "A", a: 0},
{o: 160.088, f: 182.036, l: "A", a: 1},
{o: 182.036, f: 197.036, l: "A", a: 0},
{o: 197.036, f: 213.968, l: "C", a: 1},
{o: 213.968, f: 222.636, l: "C", a: 0},
{o: 222.636, f: 232.676, l: "C", a: 1},
{o: 232.676, f: 245.732, l: "C", a: 0},
{o: 245.732, f: 261.316, l: "F", a: 1},
{o: 261.316, f: 276.224, l: "B", a: 0},
{o: 276.224, f: 285.324, l: "G", a: 1},
{o: 285.324, f: 294.116, l: "H", a: 0},
{o: 294.116, f: 308.66, l: "B", a: 1},
{o: 308.66, f: 320.88, l: "I", a: 0},
{o: 320.88, f: 331.82, l: "J", a: 1},
{o: 331.82, f: 343.496, l: "K", a: 0}],
[{o: 0.467, f: 2.907, l: "8", a: 0},
{o: 2.907, f: 21.04, l: "4", a: 1},
{o: 21.04, f: 74.227, l: "1", a: 0},
{o: 74.227, f: 83.267, l: "3", a: 1},
{o: 83.267, f: 126.653, l: "1", a: 0},
{o: 126.653, f: 136.64, l: "3", a: 1},
{o: 136.64, f: 179.8, l: "1", a: 0},
{o: 179.8, f: 189.32, l: "7", a: 1},
{o: 189.32, f: 272.947, l: "1", a: 0},
{o: 272.947, f: 320.32, l: "2", a: 1},
{o: 320.32, f: 333.64, l: "5", a: 0},
{o: 333.64, f: 343.427, l: "6", a: 1}],
[{o: 0, f: 20.115, l: "a", a: 0},
{o: 20.115, f: 50.66, l: "b", a: 1},
{o: 50.66, f: 82.695, l: "b", a: 0},
{o: 82.695, f: 127.395, l: "c", a: 1},
{o: 127.395, f: 157.94, l: "b", a: 0},
{o: 157.94, f: 189.975, l: "b", a: 1},
{o: 189.975, f: 229.46, l: "c", a: 0},
{o: 229.46, f: 260.005, l: "b", a: 1},
{o: 260.005, f: 292.04, l: "b", a: 0},
{o: 292.04, f: 343.445, l: "c", a: 1}],
[{o: 0, f: 18.762, l: "n1", a: 0},
{o: 18.762, f: 30.894, l: "B", a: 1},
{o: 30.894, f: 38.719, l: "A", a: 0},
{o: 38.719, f: 48.611, l: "n3", a: 1},
{o: 48.611, f: 56.366, l: "A", a: 0},
{o: 56.366, f: 63.286, l: "n4", a: 1},
{o: 63.286, f: 73.979, l: "B", a: 0},
{o: 73.979, f: 84.114, l: "C", a: 1},
{o: 84.114, f: 88.491, l: "n6", a: 0},
{o: 88.491, f: 96.189, l: "A", a: 1},
{o: 96.189, f: 101.68, l: "n7", a: 0},
{o: 101.68, f: 110.562, l: "A", a: 1},
{o: 110.562, f: 119.327, l: "A", a: 0},
{o: 119.327, f: 126.967, l: "A", a: 1},
{o: 126.967, f: 136.94, l: "C", a: 0},
{o: 136.94, f: 144.556, l: "A", a: 1},
{o: 144.556, f: 150.547, l: "n10", a: 0},
{o: 150.547, f: 159.022, l: "A", a: 1},
{o: 159.022, f: 166.719, l: "A", a: 0},
{o: 166.719, f: 189.336, l: "n12", a: 1},
{o: 189.336, f: 197.068, l: "A", a: 0},
{o: 197.068, f: 207.18, l: "n13", a: 1},
{o: 207.18, f: 214.796, l: "A", a: 0},
{o: 214.796, f: 230.214, l: "n14", a: 1},
{o: 230.214, f: 238.272, l: "A", a: 0},
{o: 238.272, f: 246.05, l: "A", a: 1},
{o: 246.05, f: 256.418, l: "n16", a: 0},
{o: 256.418, f: 264.092, l: "A", a: 1},
{o: 264.092, f: 269.317, l: "n17", a: 0},
{o: 269.317, f: 277.653, l: "A", a: 1},
{o: 277.653, f: 285.907, l: "A", a: 0},
{o: 285.907, f: 293.581, l: "A", a: 1},
{o: 293.581, f: 306.759, l: "n20", a: 0},
{o: 306.759, f: 314.433, l: "A", a: 1},
{o: 314.433, f: 325.254, l: "n21", a: 0},
{o: 325.254, f: 333.218, l: "A", a: 1},
{o: 333.218, f: 343.33, l: "n22", a: 0}],
[{o: 0, f: 0.024, l: "G", a: 0},
{o: 0.024, f: 3.204, l: "F", a: 1},
{o: 3.204, f: 74.776, l: "A", a: 0},
{o: 74.776, f: 83.8, l: "D", a: 1},
{o: 83.8, f: 123.936, l: "A", a: 0},
{o: 123.936, f: 142.636, l: "D", a: 1},
{o: 142.636, f: 160.636, l: "A", a: 0},
{o: 160.636, f: 210.392, l: "E", a: 1},
{o: 210.392, f: 299.52, l: "A", a: 0},
{o: 299.52, f: 321.164, l: "E", a: 1},
{o: 321.164, f: 334.996, l: "A", a: 0},
{o: 334.996, f: 343.496, l: "F", a: 1},
{o: 343.496, f: 343.547, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001605.ogg";