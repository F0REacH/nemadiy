var data = [
[{o: 0.488, f: 28.468, l: "A", a: 0},
{o: 28.468, f: 53.256, l: "B", a: 1},
{o: 53.256, f: 66.084, l: "C", a: 0},
{o: 66.084, f: 89.792, l: "B'", a: 1},
{o: 89.792, f: 98.63, l: "C'", a: 0},
{o: 98.63, f: 114.428, l: "B''", a: 1},
{o: 114.428, f: 168.866, l: "D", a: 0},
{o: 168.866, f: 183.253, l: "A'", a: 1},
{o: 183.253, f: 197.605, l: "F", a: 0}],
[{o: 0.368, f: 22.376, l: "C", a: 0},
{o: 22.376, f: 41.92, l: "C", a: 1},
{o: 41.92, f: 59.092, l: "C", a: 0},
{o: 59.092, f: 76.568, l: "C", a: 1},
{o: 76.568, f: 91.284, l: "C", a: 0},
{o: 91.284, f: 110.012, l: "C", a: 1},
{o: 110.012, f: 117.852, l: "A", a: 0},
{o: 117.852, f: 131.44, l: "A", a: 1},
{o: 131.44, f: 139.864, l: "A", a: 0},
{o: 139.864, f: 150.864, l: "A", a: 1},
{o: 150.864, f: 168.24, l: "A", a: 0},
{o: 168.24, f: 175.16, l: "A", a: 1},
{o: 175.16, f: 191.224, l: "A", a: 0},
{o: 191.224, f: 197.316, l: "A", a: 1}],
[{o: 0.368, f: 22.376, l: "C", a: 0},
{o: 22.376, f: 41.92, l: "C", a: 1},
{o: 41.92, f: 59.092, l: "C", a: 0},
{o: 59.092, f: 76.568, l: "C", a: 1},
{o: 76.568, f: 91.284, l: "B", a: 0},
{o: 91.284, f: 110.012, l: "C", a: 1},
{o: 110.012, f: 117.852, l: "A", a: 0},
{o: 117.852, f: 131.44, l: "D", a: 1},
{o: 131.44, f: 139.864, l: "E", a: 0},
{o: 139.864, f: 150.864, l: "F", a: 1},
{o: 150.864, f: 168.24, l: "G", a: 0},
{o: 168.24, f: 175.16, l: "A", a: 1},
{o: 175.16, f: 191.224, l: "A", a: 0},
{o: 191.224, f: 197.316, l: "A", a: 1}],
[{o: 0.467, f: 4.12, l: "3", a: 0},
{o: 4.12, f: 109.173, l: "1", a: 1},
{o: 109.173, f: 116.213, l: "2", a: 0},
{o: 116.213, f: 127.453, l: "4", a: 1},
{o: 127.453, f: 132.707, l: "6", a: 0},
{o: 132.707, f: 147.32, l: "2", a: 1},
{o: 147.32, f: 152.76, l: "7", a: 0},
{o: 152.76, f: 174.2, l: "1", a: 1},
{o: 174.2, f: 178.6, l: "8", a: 0},
{o: 178.6, f: 189.64, l: "5", a: 1},
{o: 189.64, f: 197.507, l: "3", a: 0}],
[{o: 0, f: 8.94, l: "a", a: 0},
{o: 8.94, f: 23.095, l: "b", a: 1},
{o: 23.095, f: 34.27, l: "c", a: 0},
{o: 34.27, f: 53.64, l: "d", a: 1},
{o: 53.64, f: 67.05, l: "b", a: 0},
{o: 67.05, f: 97.595, l: "e", a: 1},
{o: 97.595, f: 104.3, l: "c", a: 0},
{o: 104.3, f: 196.68, l: "f", a: 1}],
[{o: 0, f: 197.242, l: "A", a: 0},
{o: 0.406, f: 197.323, l: "A", a: 1}],
[{o: 0, f: 0.376, l: "I", a: 0},
{o: 0.376, f: 7.524, l: "D", a: 1},
{o: 7.524, f: 38.256, l: "C", a: 0},
{o: 38.256, f: 69.268, l: "H", a: 1},
{o: 69.268, f: 82.26, l: "C", a: 0},
{o: 82.26, f: 104.664, l: "H", a: 1},
{o: 104.664, f: 116.584, l: "D", a: 0},
{o: 116.584, f: 129.944, l: "E", a: 1},
{o: 129.944, f: 148.844, l: "D", a: 0},
{o: 148.844, f: 163.052, l: "C", a: 1},
{o: 163.052, f: 170.012, l: "G", a: 0},
{o: 170.012, f: 189.696, l: "H", a: 1},
{o: 189.696, f: 197.532, l: "C", a: 0},
{o: 197.532, f: 197.591, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001326.ogg";

var artist = "Compilations";

var track = "Three Songs to Poems by Carl Sandbur";