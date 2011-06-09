var data = [
[{o: 0, f: 9.526, l: "Z", a: 0},
{o: 9.526, f: 39.949, l: "A", a: 1},
{o: 39.949, f: 69.554, l: "A", a: 0},
{o: 69.554, f: 98.536, l: "A", a: 1},
{o: 98.536, f: 127.32, l: "B", a: 0},
{o: 127.32, f: 156.366, l: "A", a: 1},
{o: 156.366, f: 185.217, l: "A", a: 0},
{o: 185.217, f: 213.209, l: "A", a: 1},
{o: 213.209, f: 245.346, l: "A", a: 0}],
[{o: 0.044, f: 8.496, l: "G", a: 0},
{o: 8.496, f: 18.584, l: "G", a: 1},
{o: 18.584, f: 25.472, l: "A", a: 0},
{o: 25.472, f: 31.728, l: "G", a: 1},
{o: 31.728, f: 36.072, l: "G", a: 0},
{o: 36.072, f: 48.076, l: "G", a: 1},
{o: 48.076, f: 60.392, l: "G", a: 0},
{o: 60.392, f: 65.76, l: "G", a: 1},
{o: 65.76, f: 77.88, l: "G", a: 0},
{o: 77.88, f: 90.644, l: "G", a: 1},
{o: 90.644, f: 99.124, l: "G", a: 0},
{o: 99.124, f: 108.644, l: "G", a: 1},
{o: 108.644, f: 116.552, l: "G", a: 0},
{o: 116.552, f: 126.476, l: "G", a: 1},
{o: 126.476, f: 140.236, l: "G", a: 0},
{o: 140.236, f: 145.78, l: "G", a: 1},
{o: 145.78, f: 154.244, l: "G", a: 0},
{o: 154.244, f: 162.14, l: "G", a: 1},
{o: 162.14, f: 171.048, l: "G", a: 0},
{o: 171.048, f: 179.724, l: "G", a: 1},
{o: 179.724, f: 188.22, l: "G", a: 0},
{o: 188.22, f: 199.716, l: "G", a: 1},
{o: 199.716, f: 212.032, l: "G", a: 0},
{o: 212.032, f: 220.912, l: "G", a: 1},
{o: 220.912, f: 231.768, l: "G", a: 0},
{o: 231.768, f: 239.396, l: "G", a: 1},
{o: 239.396, f: 243.1, l: "G", a: 0}],
[{o: 0.044, f: 8.496, l: "G", a: 0},
{o: 8.496, f: 18.584, l: "B", a: 1},
{o: 18.584, f: 25.472, l: "D", a: 0},
{o: 25.472, f: 31.728, l: "G", a: 1},
{o: 31.728, f: 36.072, l: "E", a: 0},
{o: 36.072, f: 48.076, l: "G", a: 1},
{o: 48.076, f: 60.392, l: "A", a: 0},
{o: 60.392, f: 65.76, l: "A", a: 1},
{o: 65.76, f: 77.88, l: "H", a: 0},
{o: 77.88, f: 90.644, l: "A", a: 1},
{o: 90.644, f: 99.124, l: "C", a: 0},
{o: 99.124, f: 108.644, l: "C", a: 1},
{o: 108.644, f: 116.552, l: "H", a: 0},
{o: 116.552, f: 126.476, l: "C", a: 1},
{o: 126.476, f: 140.236, l: "C", a: 0},
{o: 140.236, f: 145.78, l: "C", a: 1},
{o: 145.78, f: 154.244, l: "F", a: 0},
{o: 154.244, f: 162.14, l: "I", a: 1},
{o: 162.14, f: 171.048, l: "C", a: 0},
{o: 171.048, f: 179.724, l: "G", a: 1},
{o: 179.724, f: 188.22, l: "C", a: 0},
{o: 188.22, f: 199.716, l: "C", a: 1},
{o: 199.716, f: 212.032, l: "J", a: 0},
{o: 212.032, f: 220.912, l: "A", a: 1},
{o: 220.912, f: 231.768, l: "K", a: 0},
{o: 231.768, f: 239.396, l: "L", a: 1},
{o: 239.396, f: 243.1, l: "E", a: 0}],
[{o: 0.653, f: 3.973, l: "8", a: 0},
{o: 3.973, f: 28.347, l: "6", a: 1},
{o: 28.347, f: 37.68, l: "2", a: 0},
{o: 37.68, f: 57.653, l: "1", a: 1},
{o: 57.653, f: 68.48, l: "5", a: 0},
{o: 68.48, f: 92.187, l: "1", a: 1},
{o: 92.187, f: 116.08, l: "3", a: 0},
{o: 116.08, f: 125.2, l: "2", a: 1},
{o: 125.2, f: 136.027, l: "1", a: 0},
{o: 136.027, f: 149.96, l: "4", a: 1},
{o: 149.96, f: 164.96, l: "1", a: 0},
{o: 164.96, f: 181.867, l: "4", a: 1},
{o: 181.867, f: 198.787, l: "3", a: 0},
{o: 198.787, f: 211.56, l: "2", a: 1},
{o: 211.56, f: 221.773, l: "1", a: 0},
{o: 221.773, f: 237.52, l: "5", a: 1},
{o: 237.52, f: 245.24, l: "7", a: 0}],
[{o: 0, f: 27.565, l: "a", a: 0},
{o: 27.565, f: 51.405, l: "b", a: 1},
{o: 51.405, f: 80.46, l: "b", a: 0},
{o: 80.46, f: 98.34, l: "c", a: 1},
{o: 98.34, f: 115.475, l: "d", a: 0},
{o: 115.475, f: 139.315, l: "b", a: 1},
{o: 139.315, f: 168.37, l: "b", a: 0},
{o: 168.37, f: 185.505, l: "c", a: 1},
{o: 185.505, f: 245.105, l: "e", a: 0}],
[{o: 0, f: 37.407, l: "n1", a: 0},
{o: 37.407, f: 54.996, l: "A", a: 1},
{o: 54.996, f: 124.9, l: "n2", a: 0},
{o: 124.9, f: 141.793, l: "A", a: 1},
{o: 141.793, f: 153.902, l: "n3", a: 0},
{o: 153.902, f: 170.678, l: "A", a: 1},
{o: 170.678, f: 210.86, l: "n4", a: 0},
{o: 210.86, f: 227.521, l: "A", a: 1},
{o: 227.521, f: 245.249, l: "n5", a: 0}],
[{o: 0, f: 0.044, l: "H", a: 0},
{o: 0.044, f: 29.232, l: "G", a: 1},
{o: 29.232, f: 95.5, l: "B", a: 0},
{o: 95.5, f: 116.552, l: "E", a: 1},
{o: 116.552, f: 175.336, l: "B", a: 0},
{o: 175.336, f: 209.104, l: "C", a: 1},
{o: 209.104, f: 243.1, l: "F", a: 0},
{o: 243.1, f: 245.343, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001098.ogg";

var artist = "Janis Joplin";

var track = "Hesitation Blues";