var data = [
[{o: 0.033, f: 4.515, l: "Z", a: 0},
{o: 4.515, f: 73.326, l: "A", a: 1},
{o: 73.326, f: 113.284, l: "B", a: 0},
{o: 113.284, f: 163.245, l: "C", a: 1},
{o: 163.245, f: 195.397, l: "B", a: 0},
{o: 195.397, f: 295.975, l: "D", a: 1},
{o: 295.975, f: 311.487, l: "B", a: 0},
{o: 311.487, f: 437.288, l: "D", a: 1},
{o: 437.288, f: 493.725, l: "B", a: 0},
{o: 493.725, f: 512.952, l: "Z", a: 1}],
[{o: 0.048, f: 6.12, l: "B", a: 0},
{o: 6.12, f: 23.164, l: "A", a: 1},
{o: 23.164, f: 41.816, l: "G", a: 0},
{o: 41.816, f: 52.684, l: "G", a: 1},
{o: 52.684, f: 61.812, l: "G", a: 0},
{o: 61.812, f: 73.932, l: "G", a: 1},
{o: 73.932, f: 85.8, l: "G", a: 0},
{o: 85.8, f: 105.072, l: "G", a: 1},
{o: 105.072, f: 113.924, l: "G", a: 0},
{o: 113.924, f: 123.332, l: "G", a: 1},
{o: 123.332, f: 135.984, l: "G", a: 0},
{o: 135.984, f: 150.692, l: "G", a: 1},
{o: 150.692, f: 163.932, l: "G", a: 0},
{o: 163.932, f: 176.884, l: "G", a: 1},
{o: 176.884, f: 190.868, l: "G", a: 0},
{o: 190.868, f: 215.616, l: "G", a: 1},
{o: 215.616, f: 230.056, l: "G", a: 0},
{o: 230.056, f: 244.184, l: "G", a: 1},
{o: 244.184, f: 257.964, l: "G", a: 0},
{o: 257.964, f: 264.128, l: "C", a: 1},
{o: 264.128, f: 279.576, l: "D", a: 0},
{o: 279.576, f: 290.496, l: "E", a: 1},
{o: 290.496, f: 304.072, l: "G", a: 0},
{o: 304.072, f: 320.144, l: "G", a: 1},
{o: 320.144, f: 334.732, l: "H", a: 0},
{o: 334.732, f: 349.712, l: "F", a: 1},
{o: 349.712, f: 360.74, l: "F", a: 0},
{o: 360.74, f: 373.328, l: "I", a: 1},
{o: 373.328, f: 389.076, l: "J", a: 0},
{o: 389.076, f: 404.58, l: "K", a: 1},
{o: 404.58, f: 415.736, l: "L", a: 0},
{o: 415.736, f: 429.952, l: "M", a: 1},
{o: 429.952, f: 438.212, l: "N", a: 0},
{o: 438.212, f: 457.524, l: "O", a: 1},
{o: 457.524, f: 474.192, l: "P", a: 0},
{o: 474.192, f: 490.296, l: "Q", a: 1},
{o: 490.296, f: 500.312, l: "R", a: 0},
{o: 500.312, f: 512.808, l: "A", a: 1}],
[{o: 0.048, f: 6.12, l: "H", a: 0},
{o: 6.12, f: 23.164, l: "I", a: 1},
{o: 23.164, f: 41.816, l: "G", a: 0},
{o: 41.816, f: 52.684, l: "A", a: 1},
{o: 52.684, f: 61.812, l: "A", a: 0},
{o: 61.812, f: 73.932, l: "A", a: 1},
{o: 73.932, f: 85.8, l: "B", a: 0},
{o: 85.8, f: 105.072, l: "B", a: 1},
{o: 105.072, f: 113.924, l: "J", a: 0},
{o: 113.924, f: 123.332, l: "K", a: 1},
{o: 123.332, f: 135.984, l: "A", a: 0},
{o: 135.984, f: 150.692, l: "A", a: 1},
{o: 150.692, f: 163.932, l: "D", a: 0},
{o: 163.932, f: 176.884, l: "E", a: 1},
{o: 176.884, f: 190.868, l: "E", a: 0},
{o: 190.868, f: 215.616, l: "C", a: 1},
{o: 215.616, f: 230.056, l: "C", a: 0},
{o: 230.056, f: 244.184, l: "C", a: 1},
{o: 244.184, f: 257.964, l: "C", a: 0},
{o: 257.964, f: 264.128, l: "L", a: 1},
{o: 264.128, f: 279.576, l: "M", a: 0},
{o: 279.576, f: 290.496, l: "N", a: 1},
{o: 290.496, f: 304.072, l: "D", a: 0},
{o: 304.072, f: 320.144, l: "G", a: 1},
{o: 320.144, f: 334.732, l: "O", a: 0},
{o: 334.732, f: 349.712, l: "F", a: 1},
{o: 349.712, f: 360.74, l: "F", a: 0},
{o: 360.74, f: 373.328, l: "P", a: 1},
{o: 373.328, f: 389.076, l: "Q", a: 0},
{o: 389.076, f: 404.58, l: "R", a: 1},
{o: 404.58, f: 415.736, l: "S", a: 0},
{o: 415.736, f: 429.952, l: "T", a: 1},
{o: 429.952, f: 438.212, l: "U", a: 0},
{o: 438.212, f: 457.524, l: "V", a: 1},
{o: 457.524, f: 474.192, l: "W", a: 0},
{o: 474.192, f: 490.296, l: "X", a: 1},
{o: 490.296, f: 500.312, l: "Y", a: 0},
{o: 500.312, f: 512.808, l: "Z", a: 1}],
[{o: 0.44, f: 3.96, l: "5", a: 0},
{o: 3.96, f: 29.027, l: "6", a: 1},
{o: 29.027, f: 72.653, l: "2", a: 0},
{o: 72.653, f: 104.307, l: "1", a: 1},
{o: 104.307, f: 113.053, l: "3", a: 0},
{o: 113.053, f: 163.36, l: "2", a: 1},
{o: 163.36, f: 280.44, l: "1", a: 0},
{o: 280.44, f: 288.173, l: "3", a: 1},
{o: 288.173, f: 296.093, l: "7", a: 0},
{o: 296.093, f: 317.053, l: "4", a: 1},
{o: 317.053, f: 358.2, l: "2", a: 0},
{o: 358.2, f: 397.347, l: "1", a: 1},
{o: 397.347, f: 402.973, l: "3", a: 0},
{o: 402.973, f: 408.653, l: "1", a: 1},
{o: 408.653, f: 429.053, l: "3", a: 0},
{o: 429.053, f: 438.267, l: "1", a: 1},
{o: 438.267, f: 457.573, l: "4", a: 0},
{o: 457.573, f: 482.973, l: "1", a: 1},
{o: 482.973, f: 491.947, l: "3", a: 0},
{o: 491.947, f: 496.84, l: "8", a: 1},
{o: 496.84, f: 512.733, l: "5", a: 0}],
[{o: 0, f: 28.31, l: "a", a: 0},
{o: 28.31, f: 77.48, l: "b", a: 1},
{o: 77.48, f: 115.475, l: "c", a: 0},
{o: 115.475, f: 162.41, l: "b", a: 1},
{o: 162.41, f: 320.35, l: "d", a: 0},
{o: 320.35, f: 485.74, l: "d", a: 1},
{o: 485.74, f: 513.305, l: "e", a: 0}],
[{o: 0, f: 41.506, l: "n1", a: 0},
{o: 41.506, f: 104.501, l: "A", a: 1},
{o: 104.501, f: 131.553, l: "n2", a: 0},
{o: 131.553, f: 194.363, l: "A", a: 1},
{o: 194.363, f: 220.415, l: "n3", a: 0},
{o: 220.415, f: 233.848, l: "C", a: 1},
{o: 233.848, f: 249.289, l: "n4", a: 0},
{o: 249.289, f: 262.931, l: "C", a: 1},
{o: 262.931, f: 401.891, l: "n5", a: 0},
{o: 401.891, f: 415.033, l: "B", a: 1},
{o: 415.033, f: 467.58, l: "n6", a: 0},
{o: 467.58, f: 481.28, l: "B", a: 1},
{o: 481.28, f: 512.743, l: "n7", a: 0}],
[{o: 0, f: 0.004, l: "F", a: 0},
{o: 0.004, f: 3.564, l: "C", a: 1},
{o: 3.564, f: 72.068, l: "B", a: 0},
{o: 72.068, f: 112.432, l: "E", a: 1},
{o: 112.432, f: 161.868, l: "B", a: 0},
{o: 161.868, f: 512.796, l: "E", a: 1},
{o: 512.796, f: 512.85, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000994.ogg";

var artist = "Chicago Afrobeat Project";

var track = "7";
