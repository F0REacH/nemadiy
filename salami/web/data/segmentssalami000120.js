var data = [
[{o: 0.098, f: 23.777, l: "A", a: 0},
{o: 23.777, f: 43.608, l: "A", a: 1},
{o: 43.608, f: 71.011, l: "A'", a: 0},
{o: 71.011, f: 90.267, l: "B", a: 1},
{o: 90.267, f: 99.198, l: "C", a: 0},
{o: 99.198, f: 118.342, l: "A", a: 1},
{o: 118.342, f: 142.712, l: "A'", a: 0},
{o: 142.712, f: 162.064, l: "B", a: 1},
{o: 162.064, f: 171.105, l: "C", a: 0},
{o: 171.105, f: 220.147, l: "D", a: 1},
{o: 220.147, f: 237.466, l: "A", a: 0},
{o: 237.466, f: 271.54, l: "B'", a: 1},
{o: 271.54, f: 304.506, l: "C", a: 0}],
[{o: 0.068, f: 9.956, l: "D", a: 0},
{o: 9.956, f: 21.376, l: "D", a: 1},
{o: 21.376, f: 45.8, l: "B", a: 0},
{o: 45.8, f: 66.9, l: "B", a: 1},
{o: 66.9, f: 82.536, l: "B", a: 0},
{o: 82.536, f: 103.632, l: "B", a: 1},
{o: 103.632, f: 119.128, l: "B", a: 0},
{o: 119.128, f: 135.236, l: "B", a: 1},
{o: 135.236, f: 152.912, l: "B", a: 0},
{o: 152.912, f: 162.66, l: "B", a: 1},
{o: 162.66, f: 178.256, l: "B", a: 0},
{o: 178.256, f: 201.536, l: "B", a: 1},
{o: 201.536, f: 213.568, l: "B", a: 0},
{o: 213.568, f: 235.66, l: "D", a: 1},
{o: 235.66, f: 253.924, l: "B", a: 0},
{o: 253.924, f: 275.212, l: "B", a: 1},
{o: 275.212, f: 284.272, l: "D", a: 0},
{o: 284.272, f: 296.424, l: "B", a: 1},
{o: 296.424, f: 304.32, l: "B", a: 0}],
[{o: 0.068, f: 9.956, l: "D", a: 0},
{o: 9.956, f: 21.376, l: "D", a: 1},
{o: 21.376, f: 45.8, l: "B", a: 0},
{o: 45.8, f: 66.9, l: "B", a: 1},
{o: 66.9, f: 82.536, l: "F", a: 0},
{o: 82.536, f: 103.632, l: "B", a: 1},
{o: 103.632, f: 119.128, l: "E", a: 0},
{o: 119.128, f: 135.236, l: "B", a: 1},
{o: 135.236, f: 152.912, l: "B", a: 0},
{o: 152.912, f: 162.66, l: "F", a: 1},
{o: 162.66, f: 178.256, l: "F", a: 0},
{o: 178.256, f: 201.536, l: "F", a: 1},
{o: 201.536, f: 213.568, l: "E", a: 0},
{o: 213.568, f: 235.66, l: "A", a: 1},
{o: 235.66, f: 253.924, l: "C", a: 0},
{o: 253.924, f: 275.212, l: "F", a: 1},
{o: 275.212, f: 284.272, l: "G", a: 0},
{o: 284.272, f: 296.424, l: "H", a: 1},
{o: 296.424, f: 304.32, l: "I", a: 0}],
[{o: 0.44, f: 20.373, l: "4", a: 0},
{o: 20.373, f: 43.04, l: "1", a: 1},
{o: 43.04, f: 47.387, l: "3", a: 0},
{o: 47.387, f: 70.027, l: "1", a: 1},
{o: 70.027, f: 89.16, l: "5", a: 0},
{o: 89.16, f: 98.133, l: "4", a: 1},
{o: 98.133, f: 110.667, l: "3", a: 0},
{o: 110.667, f: 116.16, l: "1", a: 1},
{o: 116.16, f: 121.933, l: "3", a: 0},
{o: 121.933, f: 135.52, l: "1", a: 1},
{o: 135.52, f: 141.307, l: "2", a: 0},
{o: 141.307, f: 151.853, l: "5", a: 1},
{o: 151.853, f: 168.107, l: "6", a: 0},
{o: 168.107, f: 179.64, l: "1", a: 1},
{o: 179.64, f: 193.48, l: "2", a: 0},
{o: 193.48, f: 197.96, l: "1", a: 1},
{o: 197.96, f: 204.027, l: "2", a: 0},
{o: 204.027, f: 220.027, l: "1", a: 1},
{o: 220.027, f: 235.84, l: "4", a: 0},
{o: 235.84, f: 250.853, l: "5", a: 1},
{o: 250.853, f: 270.907, l: "2", a: 0},
{o: 270.907, f: 284.613, l: "3", a: 1},
{o: 284.613, f: 293.747, l: "8", a: 0},
{o: 293.747, f: 304.333, l: "7", a: 1}],
[{o: 0, f: 26.82, l: "a", a: 0},
{o: 26.82, f: 41.72, l: "b", a: 1},
{o: 41.72, f: 73.01, l: "a", a: 0},
{o: 73.01, f: 99.085, l: "c", a: 1},
{o: 99.085, f: 113.985, l: "b", a: 0},
{o: 113.985, f: 145.275, l: "a", a: 1},
{o: 145.275, f: 171.35, l: "c", a: 0},
{o: 171.35, f: 216.795, l: "d", a: 1},
{o: 216.795, f: 231.695, l: "b", a: 0},
{o: 231.695, f: 262.985, l: "a", a: 1},
{o: 262.985, f: 281.61, l: "c", a: 0},
{o: 281.61, f: 303.96, l: "e", a: 1}],
[{o: 0, f: 11.981, l: "n1", a: 0},
{o: 11.981, f: 25.437, l: "E", a: 1},
{o: 25.437, f: 35.817, l: "A", a: 0},
{o: 35.817, f: 44.35, l: "n3", a: 1},
{o: 44.35, f: 55.333, l: "A", a: 0},
{o: 55.333, f: 70.821, l: "n4", a: 1},
{o: 70.821, f: 83.418, l: "B", a: 0},
{o: 83.418, f: 90.616, l: "n5", a: 1},
{o: 90.616, f: 101.436, l: "A", a: 0},
{o: 101.436, f: 118.851, l: "n6", a: 1},
{o: 118.851, f: 131.204, l: "A", a: 0},
{o: 131.204, f: 141.932, l: "E", a: 1},
{o: 141.932, f: 161.216, l: "n8", a: 0},
{o: 161.216, f: 171.003, l: "D", a: 1},
{o: 171.003, f: 174.37, l: "n9", a: 0},
{o: 174.37, f: 183.287, l: "C", a: 1},
{o: 183.287, f: 192.075, l: "C", a: 0},
{o: 192.075, f: 219.881, l: "n10", a: 1},
{o: 219.881, f: 230.098, l: "A", a: 0},
{o: 230.098, f: 237.273, l: "n11", a: 1},
{o: 237.273, f: 251.867, l: "B", a: 0},
{o: 251.867, f: 264.545, l: "B", a: 1},
{o: 264.545, f: 270.687, l: "n13", a: 0},
{o: 270.687, f: 281.6, l: "D", a: 1},
{o: 281.6, f: 304.321, l: "n14", a: 0}],
[{o: 0, f: 0.004, l: "K", a: 0},
{o: 0.004, f: 0.164, l: "G", a: 1},
{o: 0.164, f: 34.268, l: "H", a: 0},
{o: 34.268, f: 36.4, l: "G", a: 1},
{o: 36.4, f: 150.612, l: "H", a: 0},
{o: 150.612, f: 158.316, l: "J", a: 1},
{o: 158.316, f: 171.66, l: "H", a: 0},
{o: 171.66, f: 174.796, l: "G", a: 1},
{o: 174.796, f: 180.116, l: "H", a: 0},
{o: 180.116, f: 185.076, l: "G", a: 1},
{o: 185.076, f: 189.144, l: "H", a: 0},
{o: 189.144, f: 192.82, l: "G", a: 1},
{o: 192.82, f: 214.344, l: "H", a: 0},
{o: 214.344, f: 217.776, l: "B", a: 1},
{o: 217.776, f: 233.292, l: "H", a: 0},
{o: 233.292, f: 235.768, l: "C", a: 1},
{o: 235.768, f: 264.568, l: "H", a: 0},
{o: 264.568, f: 271.028, l: "A", a: 1},
{o: 271.028, f: 286.164, l: "H", a: 0},
{o: 286.164, f: 304.428, l: "G", a: 1},
{o: 304.428, f: 304.467, l: "K", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000120.ogg";

var artist = "Charlotte Martin";

var track = "Step back";
