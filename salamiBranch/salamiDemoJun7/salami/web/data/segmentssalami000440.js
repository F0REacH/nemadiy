var data = [
[{o: 2.531, f: 21.043, l: "A", a: 0},
{o: 21.043, f: 42.07, l: "B", a: 1},
{o: 42.07, f: 51.453, l: "E", a: 0},
{o: 51.453, f: 69.982, l: "G", a: 1},
{o: 69.982, f: 79.277, l: "A", a: 0},
{o: 79.277, f: 100.326, l: "B", a: 1},
{o: 100.326, f: 109.542, l: "E", a: 0},
{o: 109.542, f: 128.253, l: "G", a: 1},
{o: 128.253, f: 146.906, l: "A", a: 0},
{o: 146.906, f: 158.61, l: "E", a: 1},
{o: 158.61, f: 177.181, l: "G", a: 0},
{o: 177.181, f: 195.798, l: "G", a: 1},
{o: 195.798, f: 219.158, l: "A", a: 0}],
[{o: 0.004, f: 20.968, l: "E", a: 0},
{o: 20.968, f: 39.036, l: "D", a: 1},
{o: 39.036, f: 55.348, l: "B", a: 0},
{o: 55.348, f: 70.204, l: "B", a: 1},
{o: 70.204, f: 79.236, l: "C", a: 0},
{o: 79.236, f: 97.58, l: "D", a: 1},
{o: 97.58, f: 117.388, l: "B", a: 0},
{o: 117.388, f: 128.172, l: "B", a: 1},
{o: 128.172, f: 139.524, l: "A", a: 0},
{o: 139.524, f: 146.224, l: "A", a: 1},
{o: 146.224, f: 154.96, l: "B", a: 0},
{o: 154.96, f: 169.808, l: "F", a: 1},
{o: 169.808, f: 180.596, l: "B", a: 0},
{o: 180.596, f: 200.692, l: "C", a: 1},
{o: 200.692, f: 213.488, l: "C", a: 0}],
[{o: 0.004, f: 20.968, l: "A", a: 0},
{o: 20.968, f: 39.036, l: "D", a: 1},
{o: 39.036, f: 55.348, l: "B", a: 0},
{o: 55.348, f: 70.204, l: "B", a: 1},
{o: 70.204, f: 79.236, l: "C", a: 0},
{o: 79.236, f: 97.58, l: "D", a: 1},
{o: 97.58, f: 117.388, l: "B", a: 0},
{o: 117.388, f: 128.172, l: "B", a: 1},
{o: 128.172, f: 139.524, l: "E", a: 0},
{o: 139.524, f: 146.224, l: "F", a: 1},
{o: 146.224, f: 154.96, l: "G", a: 0},
{o: 154.96, f: 169.808, l: "H", a: 1},
{o: 169.808, f: 180.596, l: "B", a: 0},
{o: 180.596, f: 200.692, l: "I", a: 1},
{o: 200.692, f: 213.488, l: "C", a: 0}],
[{o: 0.6, f: 3.24, l: "8", a: 0},
{o: 3.24, f: 20.12, l: "2", a: 1},
{o: 20.12, f: 36.44, l: "3", a: 0},
{o: 36.44, f: 47.493, l: "6", a: 1},
{o: 47.493, f: 69.64, l: "1", a: 0},
{o: 69.64, f: 78.96, l: "2", a: 1},
{o: 78.96, f: 96.44, l: "3", a: 0},
{o: 96.44, f: 128.467, l: "1", a: 1},
{o: 128.467, f: 146.533, l: "4", a: 0},
{o: 146.533, f: 158.76, l: "5", a: 1},
{o: 158.76, f: 194.307, l: "1", a: 0},
{o: 194.307, f: 212.907, l: "2", a: 1},
{o: 212.907, f: 218.973, l: "7", a: 0}],
[{o: 0, f: 23.095, l: "a", a: 0},
{o: 23.095, f: 34.27, l: "b", a: 1},
{o: 34.27, f: 67.05, l: "c", a: 0},
{o: 67.05, f: 81.95, l: "a", a: 1},
{o: 81.95, f: 93.125, l: "d", a: 0},
{o: 93.125, f: 125.905, l: "c", a: 1},
{o: 125.905, f: 146.765, l: "a", a: 0},
{o: 146.765, f: 160.175, l: "e", a: 1},
{o: 160.175, f: 192.955, l: "c", a: 0},
{o: 192.955, f: 218.285, l: "a", a: 1}],
[{o: 0, f: 25.948, l: "n1", a: 0},
{o: 25.948, f: 51.583, l: "B", a: 1},
{o: 51.583, f: 84.207, l: "A", a: 0},
{o: 84.207, f: 109.842, l: "B", a: 1},
{o: 109.842, f: 142.454, l: "A", a: 0},
{o: 142.454, f: 156.735, l: "n2", a: 1},
{o: 156.735, f: 166.348, l: "C", a: 0},
{o: 166.348, f: 177.412, l: "C", a: 1},
{o: 177.412, f: 210.036, l: "A", a: 0},
{o: 210.036, f: 218.871, l: "n5", a: 1}],
[{o: 0, f: 0.004, l: "F", a: 0},
{o: 0.004, f: 20.104, l: "D", a: 1},
{o: 20.104, f: 38.452, l: "B", a: 0},
{o: 38.452, f: 67.58, l: "E", a: 1},
{o: 67.58, f: 83.016, l: "D", a: 0},
{o: 83.016, f: 96.708, l: "B", a: 1},
{o: 96.708, f: 125.832, l: "E", a: 0},
{o: 125.832, f: 143.888, l: "D", a: 1},
{o: 143.888, f: 193.408, l: "E", a: 0},
{o: 193.408, f: 213.488, l: "D", a: 1},
{o: 213.488, f: 219.093, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000440.ogg";