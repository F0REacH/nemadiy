var data = [
[{o: 0.441, f: 5.829, l: "A", a: 0},
{o: 5.829, f: 121.565, l: "B", a: 1},
{o: 121.565, f: 140.283, l: "B", a: 0},
{o: 140.283, f: 152.885, l: "B", a: 1},
{o: 152.885, f: 171.435, l: "C", a: 0},
{o: 171.435, f: 221.755, l: "B", a: 1},
{o: 221.755, f: 240.203, l: "C", a: 0},
{o: 240.203, f: 252.987, l: "B", a: 1},
{o: 252.987, f: 361.071, l: "C", a: 0}],
[{o: 0.236, f: 5.836, l: "A", a: 0},
{o: 5.836, f: 18.028, l: "F", a: 1},
{o: 18.028, f: 34.28, l: "F", a: 0},
{o: 34.28, f: 43.216, l: "F", a: 1},
{o: 43.216, f: 52.128, l: "F", a: 0},
{o: 52.128, f: 67.432, l: "F", a: 1},
{o: 67.432, f: 81.896, l: "F", a: 0},
{o: 81.896, f: 95.08, l: "F", a: 1},
{o: 95.08, f: 106.536, l: "F", a: 0},
{o: 106.536, f: 120.128, l: "F", a: 1},
{o: 120.128, f: 136.948, l: "F", a: 0},
{o: 136.948, f: 154.752, l: "F", a: 1},
{o: 154.752, f: 171.784, l: "F", a: 0},
{o: 171.784, f: 186.336, l: "F", a: 1},
{o: 186.336, f: 194.936, l: "F", a: 0},
{o: 194.936, f: 209.06, l: "F", a: 1},
{o: 209.06, f: 224.412, l: "F", a: 0},
{o: 224.412, f: 235.968, l: "F", a: 1},
{o: 235.968, f: 248.98, l: "F", a: 0},
{o: 248.98, f: 255.66, l: "F", a: 1},
{o: 255.66, f: 267.96, l: "F", a: 0},
{o: 267.96, f: 280.224, l: "F", a: 1},
{o: 280.224, f: 289.828, l: "F", a: 0},
{o: 289.828, f: 301.772, l: "F", a: 1},
{o: 301.772, f: 312.984, l: "F", a: 0},
{o: 312.984, f: 329.576, l: "F", a: 1},
{o: 329.576, f: 344.256, l: "F", a: 0}],
[{o: 0.236, f: 5.836, l: "J", a: 0},
{o: 5.836, f: 18.028, l: "F", a: 1},
{o: 18.028, f: 34.28, l: "F", a: 0},
{o: 34.28, f: 43.216, l: "E", a: 1},
{o: 43.216, f: 52.128, l: "B", a: 0},
{o: 52.128, f: 67.432, l: "E", a: 1},
{o: 67.432, f: 81.896, l: "B", a: 0},
{o: 81.896, f: 95.08, l: "B", a: 1},
{o: 95.08, f: 106.536, l: "I", a: 0},
{o: 106.536, f: 120.128, l: "I", a: 1},
{o: 120.128, f: 136.948, l: "C", a: 0},
{o: 136.948, f: 154.752, l: "C", a: 1},
{o: 154.752, f: 171.784, l: "A", a: 0},
{o: 171.784, f: 186.336, l: "G", a: 1},
{o: 186.336, f: 194.936, l: "K", a: 0},
{o: 194.936, f: 209.06, l: "G", a: 1},
{o: 209.06, f: 224.412, l: "H", a: 0},
{o: 224.412, f: 235.968, l: "A", a: 1},
{o: 235.968, f: 248.98, l: "D", a: 0},
{o: 248.98, f: 255.66, l: "D", a: 1},
{o: 255.66, f: 267.96, l: "A", a: 0},
{o: 267.96, f: 280.224, l: "H", a: 1},
{o: 280.224, f: 289.828, l: "H", a: 0},
{o: 289.828, f: 301.772, l: "L", a: 1},
{o: 301.772, f: 312.984, l: "H", a: 0},
{o: 312.984, f: 329.576, l: "A", a: 1},
{o: 329.576, f: 344.256, l: "A", a: 0}],
[{o: 0.44, f: 6.48, l: "8", a: 0},
{o: 6.48, f: 33.76, l: "5", a: 1},
{o: 33.76, f: 42.253, l: "1", a: 0},
{o: 42.253, f: 49.547, l: "3", a: 1},
{o: 49.547, f: 53.987, l: "1", a: 0},
{o: 53.987, f: 59.627, l: "3", a: 1},
{o: 59.627, f: 68.427, l: "1", a: 0},
{o: 68.427, f: 78.907, l: "3", a: 1},
{o: 78.907, f: 88.12, l: "1", a: 0},
{o: 88.12, f: 94.907, l: "3", a: 1},
{o: 94.907, f: 105.253, l: "4", a: 0},
{o: 105.253, f: 139.653, l: "1", a: 1},
{o: 139.653, f: 149.453, l: "4", a: 0},
{o: 149.453, f: 170.413, l: "2", a: 1},
{o: 170.413, f: 184.16, l: "3", a: 0},
{o: 184.16, f: 195.893, l: "4", a: 1},
{o: 195.893, f: 208.853, l: "3", a: 0},
{o: 208.853, f: 221.88, l: "1", a: 1},
{o: 221.88, f: 239.6, l: "2", a: 0},
{o: 239.6, f: 250.773, l: "1", a: 1},
{o: 250.773, f: 289.24, l: "2", a: 0},
{o: 289.24, f: 301.187, l: "6", a: 1},
{o: 301.187, f: 346.24, l: "2", a: 0},
{o: 346.24, f: 351.427, l: "4", a: 1},
{o: 351.427, f: 359.133, l: "7", a: 0}],
[{o: 0, f: 121.435, l: "a", a: 0},
{o: 121.435, f: 143.04, l: "b", a: 1},
{o: 143.04, f: 167.625, l: "c", a: 0},
{o: 167.625, f: 212.325, l: "d", a: 1},
{o: 212.325, f: 236.91, l: "c", a: 0},
{o: 236.91, f: 304.705, l: "e", a: 1},
{o: 304.705, f: 319.605, l: "b", a: 0},
{o: 319.605, f: 360.58, l: "f", a: 1}],
[{o: 0, f: 43.688, l: "n1", a: 0},
{o: 43.688, f: 55.02, l: "A", a: 1},
{o: 55.02, f: 93.518, l: "n2", a: 0},
{o: 93.518, f: 104.676, l: "C", a: 1},
{o: 104.676, f: 137.961, l: "n3", a: 0},
{o: 137.961, f: 148.875, l: "C", a: 1},
{o: 148.875, f: 182.799, l: "n4", a: 0},
{o: 182.799, f: 193.771, l: "A", a: 1},
{o: 193.771, f: 227.556, l: "n5", a: 0},
{o: 227.556, f: 238.306, l: "A", a: 1},
{o: 238.306, f: 254.932, l: "n6", a: 0},
{o: 254.932, f: 268.783, l: "B", a: 1},
{o: 268.783, f: 316.476, l: "n7", a: 0},
{o: 316.476, f: 330.188, l: "B", a: 1},
{o: 330.188, f: 340.01, l: "n8", a: 0},
{o: 340.01, f: 349.785, l: "A", a: 1},
{o: 349.785, f: 360.792, l: "n9", a: 0}],
[{o: 0, f: 0.244, l: "E", a: 0},
{o: 0.244, f: 24.324, l: "C", a: 1},
{o: 24.324, f: 73.448, l: "A", a: 0},
{o: 73.448, f: 95.084, l: "C", a: 1},
{o: 95.084, f: 119.5, l: "D", a: 0},
{o: 119.5, f: 187.9, l: "A", a: 1},
{o: 187.9, f: 210.64, l: "D", a: 0},
{o: 210.64, f: 344.252, l: "A", a: 1},
{o: 344.252, f: 361.066, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000847.ogg";
