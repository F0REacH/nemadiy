var data = [
[{o: 23.38, f: 52.114, l: "D", a: 0},
{o: 52.114, f: 80.054, l: "A", a: 1},
{o: 80.054, f: 98.739, l: "B", a: 0},
{o: 98.739, f: 135.719, l: "A", a: 1},
{o: 135.719, f: 172.581, l: "A'", a: 0},
{o: 172.581, f: 193.356, l: "B", a: 1},
{o: 193.356, f: 221.421, l: "A", a: 0},
{o: 221.421, f: 248.996, l: "A", a: 1},
{o: 248.996, f: 267.579, l: "B", a: 0},
{o: 267.579, f: 285.915, l: "C", a: 1},
{o: 285.915, f: 313.366, l: "A", a: 0},
{o: 313.366, f: 349.821, l: "A'", a: 1},
{o: 349.821, f: 444.697, l: "B'", a: 0}],
[{o: 0.004, f: 14.996, l: "I", a: 0},
{o: 14.996, f: 21.092, l: "I", a: 1},
{o: 21.092, f: 33.308, l: "A", a: 0},
{o: 33.308, f: 43.948, l: "I", a: 1},
{o: 43.948, f: 67.696, l: "I", a: 0},
{o: 67.696, f: 82.824, l: "I", a: 1},
{o: 82.824, f: 99.744, l: "I", a: 0},
{o: 99.744, f: 108.292, l: "I", a: 1},
{o: 108.292, f: 121.352, l: "I", a: 0},
{o: 121.352, f: 147.664, l: "I", a: 1},
{o: 147.664, f: 156.744, l: "I", a: 0},
{o: 156.744, f: 172.12, l: "I", a: 1},
{o: 172.12, f: 186.272, l: "I", a: 0},
{o: 186.272, f: 204.596, l: "I", a: 1},
{o: 204.596, f: 216.304, l: "I", a: 0},
{o: 216.304, f: 224.1, l: "I", a: 1},
{o: 224.1, f: 240.684, l: "I", a: 0},
{o: 240.684, f: 250.564, l: "I", a: 1},
{o: 250.564, f: 260.6, l: "I", a: 0},
{o: 260.6, f: 268.66, l: "I", a: 1},
{o: 268.66, f: 279.272, l: "I", a: 0},
{o: 279.272, f: 292.708, l: "I", a: 1},
{o: 292.708, f: 312.768, l: "I", a: 0},
{o: 312.768, f: 332.816, l: "I", a: 1},
{o: 332.816, f: 347.576, l: "I", a: 0},
{o: 347.576, f: 361.324, l: "I", a: 1},
{o: 361.324, f: 370.528, l: "I", a: 0},
{o: 370.528, f: 379.588, l: "I", a: 1},
{o: 379.588, f: 394.312, l: "I", a: 0},
{o: 394.312, f: 402.96, l: "I", a: 1},
{o: 402.96, f: 411.856, l: "I", a: 0},
{o: 411.856, f: 422.164, l: "I", a: 1},
{o: 422.164, f: 429.96, l: "I", a: 0},
{o: 429.96, f: 444.468, l: "I", a: 1}],
[{o: 0.004, f: 14.996, l: "D", a: 0},
{o: 14.996, f: 21.092, l: "E", a: 1},
{o: 21.092, f: 33.308, l: "F", a: 0},
{o: 33.308, f: 43.948, l: "G", a: 1},
{o: 43.948, f: 67.696, l: "E", a: 0},
{o: 67.696, f: 82.824, l: "B", a: 1},
{o: 82.824, f: 99.744, l: "B", a: 0},
{o: 99.744, f: 108.292, l: "B", a: 1},
{o: 108.292, f: 121.352, l: "B", a: 0},
{o: 121.352, f: 147.664, l: "B", a: 1},
{o: 147.664, f: 156.744, l: "B", a: 0},
{o: 156.744, f: 172.12, l: "B", a: 1},
{o: 172.12, f: 186.272, l: "B", a: 0},
{o: 186.272, f: 204.596, l: "B", a: 1},
{o: 204.596, f: 216.304, l: "H", a: 0},
{o: 216.304, f: 224.1, l: "B", a: 1},
{o: 224.1, f: 240.684, l: "H", a: 0},
{o: 240.684, f: 250.564, l: "B", a: 1},
{o: 250.564, f: 260.6, l: "B", a: 0},
{o: 260.6, f: 268.66, l: "B", a: 1},
{o: 268.66, f: 279.272, l: "B", a: 0},
{o: 279.272, f: 292.708, l: "B", a: 1},
{o: 292.708, f: 312.768, l: "I", a: 0},
{o: 312.768, f: 332.816, l: "B", a: 1},
{o: 332.816, f: 347.576, l: "J", a: 0},
{o: 347.576, f: 361.324, l: "A", a: 1},
{o: 361.324, f: 370.528, l: "K", a: 0},
{o: 370.528, f: 379.588, l: "A", a: 1},
{o: 379.588, f: 394.312, l: "L", a: 0},
{o: 394.312, f: 402.96, l: "M", a: 1},
{o: 402.96, f: 411.856, l: "C", a: 0},
{o: 411.856, f: 422.164, l: "N", a: 1},
{o: 422.164, f: 429.96, l: "C", a: 0},
{o: 429.96, f: 444.468, l: "O", a: 1}],
[{o: 0.653, f: 9.587, l: "8", a: 0},
{o: 9.587, f: 26.307, l: "4", a: 1},
{o: 26.307, f: 87.6, l: "6", a: 0},
{o: 87.6, f: 118.347, l: "3", a: 1},
{o: 118.347, f: 151.853, l: "1", a: 0},
{o: 151.853, f: 177.08, l: "2", a: 1},
{o: 177.08, f: 192.227, l: "1", a: 0},
{o: 192.227, f: 229.92, l: "2", a: 1},
{o: 229.92, f: 257.707, l: "1", a: 0},
{o: 257.707, f: 287.027, l: "3", a: 1},
{o: 287.027, f: 312.027, l: "1", a: 0},
{o: 312.027, f: 320.547, l: "2", a: 1},
{o: 320.547, f: 341.147, l: "1", a: 0},
{o: 341.147, f: 352.613, l: "2", a: 1},
{o: 352.613, f: 360.16, l: "1", a: 0},
{o: 360.16, f: 367.067, l: "2", a: 1},
{o: 367.067, f: 388.413, l: "1", a: 0},
{o: 388.413, f: 395.08, l: "5", a: 1},
{o: 395.08, f: 404.32, l: "4", a: 0},
{o: 404.32, f: 413.693, l: "5", a: 1},
{o: 413.693, f: 421.76, l: "4", a: 0},
{o: 421.76, f: 435.12, l: "5", a: 1},
{o: 435.12, f: 444.413, l: "7", a: 0}],
[{o: 0, f: 32.035, l: "a", a: 0},
{o: 32.035, f: 80.46, l: "b", a: 1},
{o: 80.46, f: 116.965, l: "c", a: 0},
{o: 116.965, f: 163.155, l: "b", a: 1},
{o: 163.155, f: 197.425, l: "d", a: 0},
{o: 197.425, f: 245.85, l: "b", a: 1},
{o: 245.85, f: 282.355, l: "c", a: 0},
{o: 282.355, f: 328.545, l: "b", a: 1},
{o: 328.545, f: 364.305, l: "d", a: 0},
{o: 364.305, f: 444.765, l: "e", a: 1}],
[{o: 0, f: 26.169, l: "n1", a: 0},
{o: 26.169, f: 35.167, l: "A", a: 1},
{o: 35.167, f: 44.35, l: "A", a: 0},
{o: 44.35, f: 53.65, l: "A", a: 1},
{o: 53.65, f: 62.938, l: "A", a: 0},
{o: 62.938, f: 72.353, l: "A", a: 1},
{o: 72.353, f: 77.613, l: "n2", a: 0},
{o: 77.613, f: 86.889, l: "B", a: 1},
{o: 86.889, f: 96.165, l: "B", a: 0},
{o: 96.165, f: 105.558, l: "n3", a: 1},
{o: 105.558, f: 114.892, l: "B", a: 0},
{o: 114.892, f: 118.677, l: "n4", a: 1},
{o: 118.677, f: 127.872, l: "A", a: 0},
{o: 127.872, f: 137.102, l: "A", a: 1},
{o: 137.102, f: 146.367, l: "A", a: 0},
{o: 146.367, f: 155.62, l: "A", a: 1},
{o: 155.62, f: 164.804, l: "A", a: 0},
{o: 164.804, f: 174.01, l: "A", a: 1},
{o: 174.01, f: 183.275, l: "A", a: 0},
{o: 183.275, f: 201.874, l: "n5", a: 1},
{o: 201.874, f: 211.174, l: "C", a: 0},
{o: 211.174, f: 222.795, l: "C", a: 1},
{o: 222.795, f: 231.979, l: "A", a: 0},
{o: 231.979, f: 241.151, l: "A", a: 1},
{o: 241.151, f: 251.008, l: "n7", a: 0},
{o: 251.008, f: 260.493, l: "B", a: 1},
{o: 260.493, f: 269.804, l: "n8", a: 0},
{o: 269.804, f: 279.034, l: "B", a: 1},
{o: 279.034, f: 287.359, l: "n9", a: 0},
{o: 287.359, f: 296.53, l: "A", a: 1},
{o: 296.53, f: 305.644, l: "A", a: 0},
{o: 305.644, f: 315.594, l: "A", a: 1},
{o: 315.594, f: 324.708, l: "D", a: 0},
{o: 324.708, f: 332.974, l: "D", a: 1},
{o: 332.974, f: 342.158, l: "A", a: 0},
{o: 342.158, f: 351.306, l: "A", a: 1},
{o: 351.306, f: 360.478, l: "A", a: 0},
{o: 360.478, f: 444.383, l: "n13", a: 1}],
[{o: 0, f: 0.06, l: "F", a: 0},
{o: 0.06, f: 5.192, l: "E", a: 1},
{o: 5.192, f: 259.28, l: "A", a: 0},
{o: 259.28, f: 266.244, l: "D", a: 1},
{o: 266.244, f: 406.42, l: "A", a: 0},
{o: 406.42, f: 413.236, l: "E", a: 1},
{o: 413.236, f: 423.384, l: "A", a: 0},
{o: 423.384, f: 435.164, l: "E", a: 1},
{o: 435.164, f: 444.456, l: "A", a: 0},
{o: 444.456, f: 444.507, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001322.ogg";