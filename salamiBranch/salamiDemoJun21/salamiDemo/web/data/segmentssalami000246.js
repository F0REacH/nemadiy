var data = [
[{o: 0.375, f: 20.998, l: "A", a: 0},
{o: 20.998, f: 43.476, l: "B", a: 1},
{o: 43.476, f: 77.339, l: "C", a: 0},
{o: 77.339, f: 129.042, l: "C", a: 1},
{o: 129.042, f: 183.714, l: "C", a: 0},
{o: 183.714, f: 217.896, l: "C", a: 1},
{o: 217.896, f: 266.635, l: "C", a: 0},
{o: 266.635, f: 306.023, l: "B", a: 1}],
[{o: 0.248, f: 8.732, l: "A", a: 0},
{o: 8.732, f: 21.148, l: "C", a: 1},
{o: 21.148, f: 40.684, l: "B", a: 0},
{o: 40.684, f: 54.028, l: "B", a: 1},
{o: 54.028, f: 69.532, l: "B", a: 0},
{o: 69.532, f: 78.62, l: "B", a: 1},
{o: 78.62, f: 94.352, l: "B", a: 0},
{o: 94.352, f: 105.084, l: "B", a: 1},
{o: 105.084, f: 117.5, l: "B", a: 0},
{o: 117.5, f: 128.728, l: "B", a: 1},
{o: 128.728, f: 147.8, l: "B", a: 0},
{o: 147.8, f: 161.64, l: "B", a: 1},
{o: 161.64, f: 174.76, l: "B", a: 0},
{o: 174.76, f: 190.744, l: "B", a: 1},
{o: 190.744, f: 204.092, l: "B", a: 0},
{o: 204.092, f: 217.964, l: "B", a: 1},
{o: 217.964, f: 235.604, l: "B", a: 0},
{o: 235.604, f: 258.748, l: "B", a: 1},
{o: 258.748, f: 266.364, l: "D", a: 0},
{o: 266.364, f: 284.98, l: "B", a: 1},
{o: 284.98, f: 301.7, l: "B", a: 0}],
[{o: 0.248, f: 8.732, l: "D", a: 0},
{o: 8.732, f: 21.148, l: "E", a: 1},
{o: 21.148, f: 40.684, l: "B", a: 0},
{o: 40.684, f: 54.028, l: "A", a: 1},
{o: 54.028, f: 69.532, l: "A", a: 0},
{o: 69.532, f: 78.62, l: "C", a: 1},
{o: 78.62, f: 94.352, l: "A", a: 0},
{o: 94.352, f: 105.084, l: "A", a: 1},
{o: 105.084, f: 117.5, l: "A", a: 0},
{o: 117.5, f: 128.728, l: "C", a: 1},
{o: 128.728, f: 147.8, l: "A", a: 0},
{o: 147.8, f: 161.64, l: "F", a: 1},
{o: 161.64, f: 174.76, l: "A", a: 0},
{o: 174.76, f: 190.744, l: "C", a: 1},
{o: 190.744, f: 204.092, l: "G", a: 0},
{o: 204.092, f: 217.964, l: "A", a: 1},
{o: 217.964, f: 235.604, l: "H", a: 0},
{o: 235.604, f: 258.748, l: "I", a: 1},
{o: 258.748, f: 266.364, l: "J", a: 0},
{o: 266.364, f: 284.98, l: "B", a: 1},
{o: 284.98, f: 301.7, l: "K", a: 0}],
[{o: 0.36, f: 7.987, l: "5", a: 0},
{o: 7.987, f: 19.933, l: "6", a: 1},
{o: 19.933, f: 32.333, l: "3", a: 0},
{o: 32.333, f: 42.36, l: "2", a: 1},
{o: 42.36, f: 69.053, l: "1", a: 0},
{o: 69.053, f: 76.707, l: "4", a: 1},
{o: 76.707, f: 105.933, l: "2", a: 0},
{o: 105.933, f: 122.493, l: "1", a: 1},
{o: 122.493, f: 128.253, l: "4", a: 0},
{o: 128.253, f: 133.787, l: "2", a: 1},
{o: 133.787, f: 147.453, l: "1", a: 0},
{o: 147.453, f: 164.147, l: "3", a: 1},
{o: 164.147, f: 173.213, l: "2", a: 0},
{o: 173.213, f: 182.28, l: "1", a: 1},
{o: 182.28, f: 191.213, l: "4", a: 0},
{o: 191.213, f: 213.16, l: "1", a: 1},
{o: 213.16, f: 223.667, l: "4", a: 0},
{o: 223.667, f: 242.76, l: "2", a: 1},
{o: 242.76, f: 252.28, l: "1", a: 0},
{o: 252.28, f: 261.48, l: "5", a: 1},
{o: 261.48, f: 266.507, l: "8", a: 0},
{o: 266.507, f: 277.587, l: "3", a: 1},
{o: 277.587, f: 284.253, l: "2", a: 0},
{o: 284.253, f: 295.72, l: "3", a: 1},
{o: 295.72, f: 304.253, l: "7", a: 0}],
[{o: 0, f: 67.05, l: "a", a: 0},
{o: 67.05, f: 94.615, l: "b", a: 1},
{o: 94.615, f: 124.415, l: "b", a: 0},
{o: 124.415, f: 172.095, l: "c", a: 1},
{o: 172.095, f: 199.66, l: "b", a: 0},
{o: 199.66, f: 233.93, l: "b", a: 1},
{o: 233.93, f: 266.71, l: "d", a: 0},
{o: 266.71, f: 284.59, l: "e", a: 1},
{o: 284.59, f: 305.45, l: "e", a: 0}],
[{o: 0, f: 20.097, l: "n1", a: 0},
{o: 20.097, f: 37.256, l: "A", a: 1},
{o: 37.256, f: 283.446, l: "n2", a: 0},
{o: 283.446, f: 300.652, l: "A", a: 1},
{o: 300.652, f: 305.807, l: "n3", a: 0}],
[{o: 0, f: 0.248, l: "G", a: 0},
{o: 0.248, f: 20.188, l: "F", a: 1},
{o: 20.188, f: 48.328, l: "A", a: 0},
{o: 48.328, f: 63.352, l: "C", a: 1},
{o: 63.352, f: 151.628, l: "D", a: 0},
{o: 151.628, f: 172.128, l: "A", a: 1},
{o: 172.128, f: 223.424, l: "D", a: 0},
{o: 223.424, f: 249.18, l: "A", a: 1},
{o: 249.18, f: 265.88, l: "F", a: 0},
{o: 265.88, f: 295.972, l: "A", a: 1},
{o: 295.972, f: 301.7, l: "D", a: 0},
{o: 301.7, f: 305.973, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000246.ogg";

var artist = "Compilations";

var track = "Enrique Melchor De Mi Fuente";
