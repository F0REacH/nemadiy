var data = [
[{o: 10.327, f: 31.336, l: "A", a: 0},
{o: 31.336, f: 72.617, l: "C", a: 1},
{o: 72.617, f: 93.569, l: "E", a: 0},
{o: 93.569, f: 113.907, l: "A'", a: 1},
{o: 113.907, f: 154.723, l: "C", a: 0},
{o: 154.723, f: 175.747, l: "E", a: 1},
{o: 175.747, f: 195.932, l: "A", a: 0},
{o: 195.932, f: 224.844, l: "A'", a: 1}],
[{o: 0.012, f: 6.092, l: "A", a: 0},
{o: 6.092, f: 18.536, l: "C", a: 1},
{o: 18.536, f: 30.348, l: "C", a: 0},
{o: 30.348, f: 40.352, l: "C", a: 1},
{o: 40.352, f: 50.64, l: "C", a: 0},
{o: 50.64, f: 62.216, l: "C", a: 1},
{o: 62.216, f: 73.888, l: "C", a: 0},
{o: 73.888, f: 94.888, l: "C", a: 1},
{o: 94.888, f: 103.688, l: "C", a: 0},
{o: 103.688, f: 113.068, l: "C", a: 1},
{o: 113.068, f: 118.556, l: "C", a: 0},
{o: 118.556, f: 132.048, l: "C", a: 1},
{o: 132.048, f: 142.568, l: "C", a: 0},
{o: 142.568, f: 154.728, l: "C", a: 1},
{o: 154.728, f: 175.776, l: "C", a: 0},
{o: 175.776, f: 193.488, l: "C", a: 1},
{o: 193.488, f: 200.988, l: "C", a: 0},
{o: 200.988, f: 216.092, l: "C", a: 1}],
[{o: 0.012, f: 6.092, l: "A", a: 0},
{o: 6.092, f: 18.536, l: "G", a: 1},
{o: 18.536, f: 30.348, l: "H", a: 0},
{o: 30.348, f: 40.352, l: "B", a: 1},
{o: 40.352, f: 50.64, l: "B", a: 0},
{o: 50.64, f: 62.216, l: "D", a: 1},
{o: 62.216, f: 73.888, l: "D", a: 0},
{o: 73.888, f: 94.888, l: "B", a: 1},
{o: 94.888, f: 103.688, l: "C", a: 0},
{o: 103.688, f: 113.068, l: "C", a: 1},
{o: 113.068, f: 118.556, l: "E", a: 0},
{o: 118.556, f: 132.048, l: "B", a: 1},
{o: 132.048, f: 142.568, l: "E", a: 0},
{o: 142.568, f: 154.728, l: "E", a: 1},
{o: 154.728, f: 175.776, l: "B", a: 0},
{o: 175.776, f: 193.488, l: "F", a: 1},
{o: 193.488, f: 200.988, l: "F", a: 0},
{o: 200.988, f: 216.092, l: "F", a: 1}],
[{o: 0.813, f: 9.2, l: "7", a: 0},
{o: 9.2, f: 30.387, l: "2", a: 1},
{o: 30.387, f: 71.68, l: "1", a: 0},
{o: 71.68, f: 92.707, l: "3", a: 1},
{o: 92.707, f: 114.04, l: "2", a: 0},
{o: 114.04, f: 155.787, l: "1", a: 1},
{o: 155.787, f: 174.827, l: "3", a: 0},
{o: 174.827, f: 184.947, l: "5", a: 1},
{o: 184.947, f: 194.413, l: "6", a: 0},
{o: 194.413, f: 217.32, l: "4", a: 1},
{o: 217.32, f: 224.733, l: "8", a: 0}],
[{o: 0, f: 31.29, l: "a", a: 0},
{o: 31.29, f: 91.635, l: "b", a: 1},
{o: 91.635, f: 115.475, l: "a", a: 0},
{o: 115.475, f: 178.8, l: "b", a: 1},
{o: 178.8, f: 213.815, l: "a", a: 0},
{o: 213.815, f: 224.245, l: "c", a: 1}],
[{o: 0, f: 10.902, l: "n1", a: 0},
{o: 10.902, f: 24.404, l: "A", a: 1},
{o: 24.404, f: 31.045, l: "n2", a: 0},
{o: 31.045, f: 61.928, l: "B", a: 1},
{o: 61.928, f: 70.983, l: "n3", a: 0},
{o: 70.983, f: 85.507, l: "A", a: 1},
{o: 85.507, f: 95.55, l: "n4", a: 0},
{o: 95.55, f: 109.354, l: "A", a: 1},
{o: 109.354, f: 113.429, l: "n5", a: 0},
{o: 113.429, f: 144.196, l: "B", a: 1},
{o: 144.196, f: 155.434, l: "n6", a: 0},
{o: 155.434, f: 167.323, l: "C", a: 1},
{o: 167.323, f: 175.183, l: "n7", a: 0},
{o: 175.183, f: 189.138, l: "A", a: 1},
{o: 189.138, f: 197.846, l: "n8", a: 0},
{o: 197.846, f: 214.181, l: "A", a: 1},
{o: 214.181, f: 224.816, l: "C", a: 0}],
[{o: 0, f: 0.096, l: "D", a: 0},
{o: 0.096, f: 10.868, l: "B", a: 1},
{o: 10.868, f: 31.672, l: "C", a: 0},
{o: 31.672, f: 72.9, l: "A", a: 1},
{o: 72.9, f: 93.632, l: "B", a: 0},
{o: 93.632, f: 113.712, l: "C", a: 1},
{o: 113.712, f: 155.056, l: "A", a: 0},
{o: 155.056, f: 171.94, l: "B", a: 1},
{o: 171.94, f: 216.092, l: "C", a: 0},
{o: 216.092, f: 224.837, l: "D", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001319.ogg";
