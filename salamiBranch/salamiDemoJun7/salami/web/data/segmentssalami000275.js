var data = [
[{o: 0, f: 2.322, l: "Z", a: 0},
{o: 2.322, f: 24.102, l: "A", a: 1},
{o: 24.102, f: 67.637, l: "A", a: 0},
{o: 67.637, f: 80.794, l: "B", a: 1},
{o: 80.794, f: 124.275, l: "A", a: 0},
{o: 124.275, f: 167.242, l: "A", a: 1},
{o: 167.242, f: 180.332, l: "B", a: 0},
{o: 180.332, f: 222.99, l: "A", a: 1},
{o: 222.99, f: 236.018, l: "C", a: 0},
{o: 236.018, f: 257.204, l: "A", a: 1},
{o: 257.204, f: 270.273, l: "B", a: 0},
{o: 270.273, f: 290.204, l: "C", a: 1},
{o: 290.204, f: 350.485, l: "Z", a: 0}],
[{o: 0.06, f: 22.48, l: "B", a: 0},
{o: 22.48, f: 31.776, l: "B", a: 1},
{o: 31.776, f: 45.82, l: "B", a: 0},
{o: 45.82, f: 61.504, l: "B", a: 1},
{o: 61.504, f: 83.976, l: "B", a: 0},
{o: 83.976, f: 106.056, l: "B", a: 1},
{o: 106.056, f: 126.944, l: "B", a: 0},
{o: 126.944, f: 139.248, l: "B", a: 1},
{o: 139.248, f: 153.84, l: "B", a: 0},
{o: 153.84, f: 166.944, l: "B", a: 1},
{o: 166.944, f: 178.964, l: "B", a: 0},
{o: 178.964, f: 190.92, l: "B", a: 1},
{o: 190.92, f: 208.252, l: "B", a: 0},
{o: 208.252, f: 227.268, l: "B", a: 1},
{o: 227.268, f: 235.628, l: "B", a: 0},
{o: 235.628, f: 249.28, l: "B", a: 1},
{o: 249.28, f: 260.164, l: "B", a: 0},
{o: 260.164, f: 268.572, l: "B", a: 1},
{o: 268.572, f: 279.944, l: "B", a: 0},
{o: 279.944, f: 290.136, l: "C", a: 1},
{o: 290.136, f: 303.488, l: "D", a: 0},
{o: 303.488, f: 318.612, l: "C", a: 1},
{o: 318.612, f: 333.528, l: "D", a: 0},
{o: 333.528, f: 340.764, l: "A", a: 1},
{o: 340.764, f: 350.348, l: "D", a: 0}],
[{o: 0.06, f: 22.48, l: "B", a: 0},
{o: 22.48, f: 31.776, l: "A", a: 1},
{o: 31.776, f: 45.82, l: "A", a: 0},
{o: 45.82, f: 61.504, l: "A", a: 1},
{o: 61.504, f: 83.976, l: "A", a: 0},
{o: 83.976, f: 106.056, l: "A", a: 1},
{o: 106.056, f: 126.944, l: "A", a: 0},
{o: 126.944, f: 139.248, l: "A", a: 1},
{o: 139.248, f: 153.84, l: "A", a: 0},
{o: 153.84, f: 166.944, l: "A", a: 1},
{o: 166.944, f: 178.964, l: "A", a: 0},
{o: 178.964, f: 190.92, l: "A", a: 1},
{o: 190.92, f: 208.252, l: "A", a: 0},
{o: 208.252, f: 227.268, l: "C", a: 1},
{o: 227.268, f: 235.628, l: "E", a: 0},
{o: 235.628, f: 249.28, l: "F", a: 1},
{o: 249.28, f: 260.164, l: "G", a: 0},
{o: 260.164, f: 268.572, l: "H", a: 1},
{o: 268.572, f: 279.944, l: "I", a: 0},
{o: 279.944, f: 290.136, l: "J", a: 1},
{o: 290.136, f: 303.488, l: "K", a: 0},
{o: 303.488, f: 318.612, l: "L", a: 1},
{o: 318.612, f: 333.528, l: "D", a: 0},
{o: 333.528, f: 340.764, l: "M", a: 1},
{o: 340.764, f: 350.348, l: "D", a: 0}],
[{o: 0.653, f: 2.893, l: "4", a: 0},
{o: 2.893, f: 24.107, l: "1", a: 1},
{o: 24.107, f: 65.587, l: "2", a: 0},
{o: 65.587, f: 77.907, l: "3", a: 1},
{o: 77.907, f: 124.2, l: "1", a: 0},
{o: 124.2, f: 165.733, l: "2", a: 1},
{o: 165.733, f: 178.653, l: "3", a: 0},
{o: 178.653, f: 234.053, l: "1", a: 1},
{o: 234.053, f: 262.147, l: "2", a: 0},
{o: 262.147, f: 268.653, l: "3", a: 1},
{o: 268.653, f: 277.533, l: "1", a: 0},
{o: 277.533, f: 289.04, l: "7", a: 1},
{o: 289.04, f: 302.52, l: "5", a: 0},
{o: 302.52, f: 315.16, l: "6", a: 1},
{o: 315.16, f: 330.867, l: "4", a: 0},
{o: 330.867, f: 339.827, l: "8", a: 1},
{o: 339.827, f: 350.307, l: "4", a: 0}],
[{o: 0, f: 27.565, l: "a", a: 0},
{o: 27.565, f: 82.695, l: "b", a: 1},
{o: 82.695, f: 100.575, l: "c", a: 0},
{o: 100.575, f: 124.415, l: "a", a: 1},
{o: 124.415, f: 182.525, l: "b", a: 0},
{o: 182.525, f: 199.66, l: "c", a: 1},
{o: 199.66, f: 223.5, l: "a", a: 0},
{o: 223.5, f: 271.925, l: "b", a: 1},
{o: 271.925, f: 350.15, l: "d", a: 0}],
[{o: 0, f: 4.83, l: "n1", a: 0},
{o: 4.83, f: 26.645, l: "A", a: 1},
{o: 26.645, f: 39.462, l: "n2", a: 0},
{o: 39.462, f: 52.315, l: "C", a: 1},
{o: 52.315, f: 70.322, l: "n3", a: 0},
{o: 70.322, f: 83.36, l: "B", a: 1},
{o: 83.36, f: 105.14, l: "A", a: 0},
{o: 105.14, f: 126.758, l: "A", a: 1},
{o: 126.758, f: 139.273, l: "n5", a: 0},
{o: 139.273, f: 152.009, l: "C", a: 1},
{o: 152.009, f: 182.787, l: "n6", a: 0},
{o: 182.787, f: 204.22, l: "A", a: 1},
{o: 204.22, f: 225.988, l: "A", a: 0},
{o: 225.988, f: 236.286, l: "B", a: 1},
{o: 236.286, f: 259.866, l: "n8", a: 0},
{o: 259.866, f: 270.28, l: "B", a: 1},
{o: 270.28, f: 350.389, l: "n9", a: 0}],
[{o: 0, f: 0.06, l: "D", a: 0},
{o: 0.06, f: 350.348, l: "C", a: 1},
{o: 350.348, f: 350.413, l: "D", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000275.ogg";
