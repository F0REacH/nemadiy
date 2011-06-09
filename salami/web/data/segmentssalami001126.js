var data = [
[{o: 0.023, f: 32.359, l: "I", a: 0},
{o: 32.359, f: 104.868, l: "H", a: 1},
{o: 104.868, f: 176.697, l: "H", a: 0},
{o: 176.697, f: 261.058, l: "H", a: 1},
{o: 261.058, f: 315.331, l: "K", a: 0},
{o: 315.331, f: 330.074, l: "I", a: 1},
{o: 330.074, f: 337.802, l: "Z", a: 0}],
[{o: 0.072, f: 18.596, l: "B", a: 0},
{o: 18.596, f: 28.32, l: "B", a: 1},
{o: 28.32, f: 44.032, l: "E", a: 0},
{o: 44.032, f: 54.612, l: "A", a: 1},
{o: 54.612, f: 64.22, l: "B", a: 0},
{o: 64.22, f: 77.328, l: "E", a: 1},
{o: 77.328, f: 92.832, l: "E", a: 0},
{o: 92.832, f: 110.3, l: "E", a: 1},
{o: 110.3, f: 124.304, l: "B", a: 0},
{o: 124.304, f: 135.32, l: "B", a: 1},
{o: 135.32, f: 156.764, l: "B", a: 0},
{o: 156.764, f: 169.2, l: "B", a: 1},
{o: 169.2, f: 190.36, l: "B", a: 0},
{o: 190.36, f: 205.848, l: "B", a: 1},
{o: 205.848, f: 220.32, l: "B", a: 0},
{o: 220.32, f: 233.548, l: "B", a: 1},
{o: 233.548, f: 244.276, l: "B", a: 0},
{o: 244.276, f: 256.696, l: "B", a: 1},
{o: 256.696, f: 264.268, l: "E", a: 0},
{o: 264.268, f: 273.38, l: "C", a: 1},
{o: 273.38, f: 281.576, l: "B", a: 0},
{o: 281.576, f: 289.896, l: "E", a: 1},
{o: 289.896, f: 299.748, l: "E", a: 0},
{o: 299.748, f: 316.728, l: "B", a: 1},
{o: 316.728, f: 331.152, l: "B", a: 0},
{o: 331.152, f: 337.708, l: "B", a: 1}],
[{o: 0.072, f: 18.596, l: "B", a: 0},
{o: 18.596, f: 28.32, l: "B", a: 1},
{o: 28.32, f: 44.032, l: "E", a: 0},
{o: 44.032, f: 54.612, l: "D", a: 1},
{o: 54.612, f: 64.22, l: "G", a: 0},
{o: 64.22, f: 77.328, l: "E", a: 1},
{o: 77.328, f: 92.832, l: "C", a: 0},
{o: 92.832, f: 110.3, l: "C", a: 1},
{o: 110.3, f: 124.304, l: "G", a: 0},
{o: 124.304, f: 135.32, l: "G", a: 1},
{o: 135.32, f: 156.764, l: "G", a: 0},
{o: 156.764, f: 169.2, l: "G", a: 1},
{o: 169.2, f: 190.36, l: "G", a: 0},
{o: 190.36, f: 205.848, l: "A", a: 1},
{o: 205.848, f: 220.32, l: "B", a: 0},
{o: 220.32, f: 233.548, l: "B", a: 1},
{o: 233.548, f: 244.276, l: "F", a: 0},
{o: 244.276, f: 256.696, l: "B", a: 1},
{o: 256.696, f: 264.268, l: "H", a: 0},
{o: 264.268, f: 273.38, l: "I", a: 1},
{o: 273.38, f: 281.576, l: "A", a: 0},
{o: 281.576, f: 289.896, l: "J", a: 1},
{o: 289.896, f: 299.748, l: "K", a: 0},
{o: 299.748, f: 316.728, l: "L", a: 1},
{o: 316.728, f: 331.152, l: "B", a: 0},
{o: 331.152, f: 337.708, l: "M", a: 1}],
[{o: 0.653, f: 30.6, l: "3", a: 0},
{o: 30.6, f: 102.053, l: "1", a: 1},
{o: 102.053, f: 109.053, l: "2", a: 0},
{o: 109.053, f: 119.027, l: "1", a: 1},
{o: 119.027, f: 127.573, l: "2", a: 0},
{o: 127.573, f: 142.067, l: "1", a: 1},
{o: 142.067, f: 151.013, l: "2", a: 0},
{o: 151.013, f: 163.467, l: "1", a: 1},
{o: 163.467, f: 187.613, l: "2", a: 0},
{o: 187.613, f: 198.613, l: "1", a: 1},
{o: 198.613, f: 223.667, l: "2", a: 0},
{o: 223.667, f: 229.76, l: "1", a: 1},
{o: 229.76, f: 241.387, l: "2", a: 0},
{o: 241.387, f: 251.813, l: "4", a: 1},
{o: 251.813, f: 257.493, l: "8", a: 0},
{o: 257.493, f: 265.293, l: "4", a: 1},
{o: 265.293, f: 286.093, l: "5", a: 0},
{o: 286.093, f: 299.44, l: "4", a: 1},
{o: 299.44, f: 314.533, l: "6", a: 0},
{o: 314.533, f: 330.08, l: "3", a: 1},
{o: 330.08, f: 337.667, l: "7", a: 0}],
[{o: 0, f: 64.07, l: "a", a: 0},
{o: 64.07, f: 80.46, l: "b", a: 1},
{o: 80.46, f: 102.065, l: "c", a: 0},
{o: 102.065, f: 131.12, l: "d", a: 1},
{o: 131.12, f: 147.51, l: "b", a: 0},
{o: 147.51, f: 169.115, l: "c", a: 1},
{o: 169.115, f: 203.385, l: "d", a: 0},
{o: 203.385, f: 224.99, l: "e", a: 1},
{o: 224.99, f: 246.595, l: "c", a: 0},
{o: 246.595, f: 337.485, l: "f", a: 1}],
[{o: 0, f: 48.611, l: "n1", a: 0},
{o: 48.611, f: 62.729, l: "C", a: 1},
{o: 62.729, f: 79.877, l: "n2", a: 0},
{o: 79.877, f: 93.878, l: "A", a: 1},
{o: 93.878, f: 102.354, l: "n3", a: 0},
{o: 102.354, f: 120.802, l: "B", a: 1},
{o: 120.802, f: 134.838, l: "C", a: 0},
{o: 134.838, f: 151.8, l: "n5", a: 1},
{o: 151.8, f: 165.756, l: "A", a: 0},
{o: 165.756, f: 174.243, l: "n6", a: 1},
{o: 174.243, f: 190.392, l: "B", a: 0},
{o: 190.392, f: 223.922, l: "n7", a: 1},
{o: 223.922, f: 238.097, l: "A", a: 0},
{o: 238.097, f: 337.757, l: "n8", a: 1}],
[{o: 0, f: 0.076, l: "H", a: 0},
{o: 0.076, f: 29.544, l: "G", a: 1},
{o: 29.544, f: 69.276, l: "B", a: 0},
{o: 69.276, f: 115.808, l: "F", a: 1},
{o: 115.808, f: 155.26, l: "B", a: 0},
{o: 155.26, f: 305.94, l: "F", a: 1},
{o: 305.94, f: 314.752, l: "E", a: 0},
{o: 314.752, f: 328.548, l: "G", a: 1},
{o: 328.548, f: 337.712, l: "E", a: 0},
{o: 337.712, f: 337.79, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001126.ogg";

var artist = "Chucho Valde s";

var track = "My Funny Valentine";