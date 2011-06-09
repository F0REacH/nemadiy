var data = [
[{o: 0.284, f: 90.05, l: "A", a: 0},
{o: 90.05, f: 137.02, l: "B", a: 1},
{o: 137.02, f: 184.156, l: "B", a: 0},
{o: 184.156, f: 275.16, l: "A", a: 1},
{o: 275.16, f: 370.286, l: "A", a: 0}],
[{o: 0, f: 370.287, l: "A", a: 0}],
[{o: 0, f: 370.287, l: "A", a: 0}],
[{o: 0.493, f: 6.92, l: "4", a: 0},
{o: 6.92, f: 17.213, l: "2", a: 1},
{o: 17.213, f: 27.693, l: "1", a: 0},
{o: 27.693, f: 34.707, l: "6", a: 1},
{o: 34.707, f: 46.173, l: "3", a: 0},
{o: 46.173, f: 54.32, l: "4", a: 1},
{o: 54.32, f: 70.8, l: "1", a: 0},
{o: 70.8, f: 90.747, l: "5", a: 1},
{o: 90.747, f: 104.813, l: "4", a: 0},
{o: 104.813, f: 123.187, l: "7", a: 1},
{o: 123.187, f: 132.28, l: "3", a: 0},
{o: 132.28, f: 154.467, l: "2", a: 1},
{o: 154.467, f: 164.76, l: "1", a: 0},
{o: 164.76, f: 179.613, l: "3", a: 1},
{o: 179.613, f: 201.12, l: "2", a: 0},
{o: 201.12, f: 212.013, l: "1", a: 1},
{o: 212.013, f: 218.973, l: "6", a: 0},
{o: 218.973, f: 231.067, l: "3", a: 1},
{o: 231.067, f: 252.013, l: "1", a: 0},
{o: 252.013, f: 260.293, l: "7", a: 1},
{o: 260.293, f: 270.547, l: "5", a: 0},
{o: 270.547, f: 291.4, l: "2", a: 1},
{o: 291.4, f: 302.093, l: "1", a: 0},
{o: 302.093, f: 308.32, l: "6", a: 1},
{o: 308.32, f: 321.053, l: "3", a: 0},
{o: 321.053, f: 328.547, l: "4", a: 1},
{o: 328.547, f: 345.573, l: "1", a: 0},
{o: 345.573, f: 362.333, l: "5", a: 1},
{o: 362.333, f: 368.92, l: "8", a: 0}],
[{o: 0, f: 44.7, l: "a", a: 0},
{o: 44.7, f: 138.57, l: "b", a: 1},
{o: 138.57, f: 184.76, l: "a", a: 0},
{o: 184.76, f: 229.46, l: "a", a: 1},
{o: 229.46, f: 323.33, l: "b", a: 0},
{o: 323.33, f: 370.265, l: "c", a: 1}],
[{o: 0, f: 7.279, l: "n1", a: 0},
{o: 7.279, f: 49.784, l: "A", a: 1},
{o: 49.784, f: 61.893, l: "C", a: 0},
{o: 61.893, f: 68.023, l: "n3", a: 1},
{o: 68.023, f: 91.394, l: "B", a: 0},
{o: 91.394, f: 99.242, l: "n4", a: 1},
{o: 99.242, f: 108.321, l: "D", a: 0},
{o: 108.321, f: 144.184, l: "n5", a: 1},
{o: 144.184, f: 184.657, l: "A", a: 0},
{o: 184.657, f: 191.739, l: "n6", a: 1},
{o: 191.739, f: 234.278, l: "A", a: 0},
{o: 234.278, f: 247.293, l: "C", a: 1},
{o: 247.293, f: 253.202, l: "n8", a: 0},
{o: 253.202, f: 274.947, l: "B", a: 1},
{o: 274.947, f: 284.468, l: "n9", a: 0},
{o: 284.468, f: 292.92, l: "D", a: 1},
{o: 292.92, f: 370.08, l: "n10", a: 0}],
[{o: 0, f: 0.02, l: "I", a: 0},
{o: 0.02, f: 57.352, l: "D", a: 1},
{o: 57.352, f: 85.188, l: "H", a: 0},
{o: 85.188, f: 160.436, l: "D", a: 1},
{o: 160.436, f: 179.968, l: "H", a: 0},
{o: 179.968, f: 184.184, l: "F", a: 1},
{o: 184.184, f: 226.568, l: "D", a: 0},
{o: 226.568, f: 233.524, l: "F", a: 1},
{o: 233.524, f: 266.364, l: "D", a: 0},
{o: 266.364, f: 270.24, l: "H", a: 1},
{o: 270.24, f: 335.028, l: "D", a: 0},
{o: 335.028, f: 345.6, l: "H", a: 1},
{o: 345.6, f: 366.164, l: "D", a: 0},
{o: 366.164, f: 370.208, l: "A", a: 1},
{o: 370.208, f: 370.287, l: "I", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001253.ogg";