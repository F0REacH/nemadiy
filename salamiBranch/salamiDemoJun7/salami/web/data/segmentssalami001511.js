var data = [
[{o: 0.139, f: 21.083, l: "A", a: 0},
{o: 21.083, f: 47.113, l: "B", a: 1},
{o: 47.113, f: 67.965, l: "C", a: 0},
{o: 67.965, f: 94.118, l: "B", a: 1},
{o: 94.118, f: 108.057, l: "C", a: 0},
{o: 108.057, f: 134.09, l: "B", a: 1},
{o: 134.09, f: 154.956, l: "C", a: 0},
{o: 154.956, f: 181.069, l: "B", a: 1},
{o: 181.069, f: 194.96, l: "C", a: 0},
{o: 194.96, f: 221.031, l: "B", a: 1},
{o: 221.031, f: 234.965, l: "C", a: 0},
{o: 234.965, f: 261.058, l: "B", a: 1},
{o: 261.058, f: 301.732, l: "D", a: 0}],
[{o: 0.1, f: 7.044, l: "B", a: 0},
{o: 7.044, f: 20.96, l: "B", a: 1},
{o: 20.96, f: 33.132, l: "F", a: 0},
{o: 33.132, f: 44.876, l: "F", a: 1},
{o: 44.876, f: 61.392, l: "F", a: 0},
{o: 61.392, f: 82.268, l: "F", a: 1},
{o: 82.268, f: 101.824, l: "F", a: 0},
{o: 101.824, f: 126.616, l: "F", a: 1},
{o: 126.616, f: 140.952, l: "F", a: 0},
{o: 140.952, f: 150.956, l: "F", a: 1},
{o: 150.956, f: 170.524, l: "F", a: 0},
{o: 170.524, f: 181.392, l: "D", a: 1},
{o: 181.392, f: 193.568, l: "F", a: 0},
{o: 193.568, f: 209.652, l: "C", a: 1},
{o: 209.652, f: 216.608, l: "C", a: 0},
{o: 216.608, f: 234.868, l: "E", a: 1},
{o: 234.868, f: 260.088, l: "F", a: 0},
{o: 260.088, f: 273.128, l: "A", a: 1},
{o: 273.128, f: 283.128, l: "A", a: 0},
{o: 283.128, f: 294.868, l: "G", a: 1},
{o: 294.868, f: 301.412, l: "H", a: 0}],
[{o: 0.1, f: 7.044, l: "D", a: 0},
{o: 7.044, f: 20.96, l: "G", a: 1},
{o: 20.96, f: 33.132, l: "F", a: 0},
{o: 33.132, f: 44.876, l: "F", a: 1},
{o: 44.876, f: 61.392, l: "H", a: 0},
{o: 61.392, f: 82.268, l: "E", a: 1},
{o: 82.268, f: 101.824, l: "E", a: 0},
{o: 101.824, f: 126.616, l: "B", a: 1},
{o: 126.616, f: 140.952, l: "B", a: 0},
{o: 140.952, f: 150.956, l: "I", a: 1},
{o: 150.956, f: 170.524, l: "E", a: 0},
{o: 170.524, f: 181.392, l: "J", a: 1},
{o: 181.392, f: 193.568, l: "E", a: 0},
{o: 193.568, f: 209.652, l: "C", a: 1},
{o: 209.652, f: 216.608, l: "C", a: 0},
{o: 216.608, f: 234.868, l: "K", a: 1},
{o: 234.868, f: 260.088, l: "B", a: 0},
{o: 260.088, f: 273.128, l: "A", a: 1},
{o: 273.128, f: 283.128, l: "A", a: 0},
{o: 283.128, f: 294.868, l: "L", a: 1},
{o: 294.868, f: 301.412, l: "M", a: 0}],
[{o: 0.52, f: 4.227, l: "6", a: 0},
{o: 4.227, f: 13.347, l: "7", a: 1},
{o: 13.347, f: 20.307, l: "1", a: 0},
{o: 20.307, f: 46.387, l: "4", a: 1},
{o: 46.387, f: 61.187, l: "1", a: 0},
{o: 61.187, f: 68.147, l: "2", a: 1},
{o: 68.147, f: 93.8, l: "3", a: 0},
{o: 93.8, f: 100.747, l: "1", a: 1},
{o: 100.747, f: 107.707, l: "3", a: 0},
{o: 107.707, f: 133.787, l: "2", a: 1},
{o: 133.787, f: 148.133, l: "1", a: 0},
{o: 148.133, f: 155.093, l: "2", a: 1},
{o: 155.093, f: 180.747, l: "3", a: 0},
{o: 180.747, f: 186.84, l: "1", a: 1},
{o: 186.84, f: 194.227, l: "3", a: 0},
{o: 194.227, f: 220.307, l: "4", a: 1},
{o: 220.307, f: 227.693, l: "1", a: 0},
{o: 227.693, f: 234.653, l: "4", a: 1},
{o: 234.653, f: 260.307, l: "2", a: 0},
{o: 260.307, f: 291.613, l: "5", a: 1},
{o: 291.613, f: 298.133, l: "6", a: 0},
{o: 298.133, f: 301.507, l: "8", a: 1}],
[{o: 0, f: 48.425, l: "a", a: 0},
{o: 48.425, f: 96.85, l: "b", a: 1},
{o: 96.85, f: 135.59, l: "c", a: 0},
{o: 135.59, f: 184.015, l: "b", a: 1},
{o: 184.015, f: 222.755, l: "c", a: 0},
{o: 222.755, f: 261.495, l: "c", a: 1},
{o: 261.495, f: 300.98, l: "d", a: 0}],
[{o: 0, f: 47.078, l: "n1", a: 0},
{o: 47.078, f: 60.987, l: "B", a: 1},
{o: 60.987, f: 94.029, l: "A", a: 0},
{o: 94.029, f: 100.984, l: "n2", a: 1},
{o: 100.984, f: 134.026, l: "A", a: 0},
{o: 134.026, f: 147.934, l: "B", a: 1},
{o: 147.934, f: 181, l: "A", a: 0},
{o: 181, f: 187.942, l: "n3", a: 1},
{o: 187.942, f: 220.984, l: "A", a: 0},
{o: 220.984, f: 227.939, l: "n4", a: 1},
{o: 227.939, f: 260.992, l: "A", a: 0},
{o: 260.992, f: 301.349, l: "n5", a: 1}],
[{o: 0, f: 0.096, l: "G", a: 0},
{o: 0.096, f: 7.916, l: "C", a: 1},
{o: 7.916, f: 94.44, l: "A", a: 0},
{o: 94.44, f: 105.088, l: "F", a: 1},
{o: 105.088, f: 142.468, l: "A", a: 0},
{o: 142.468, f: 150.52, l: "F", a: 1},
{o: 150.52, f: 182.264, l: "A", a: 0},
{o: 182.264, f: 192.696, l: "E", a: 1},
{o: 192.696, f: 261.388, l: "A", a: 0},
{o: 261.388, f: 293.132, l: "E", a: 1},
{o: 293.132, f: 300.536, l: "F", a: 0},
{o: 300.536, f: 301.627, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001511.ogg";
