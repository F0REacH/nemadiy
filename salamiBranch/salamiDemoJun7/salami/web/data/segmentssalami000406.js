var data = [
[{o: 0.512, f: 16.861, l: "A", a: 0},
{o: 16.861, f: 33.098, l: "A", a: 1},
{o: 33.098, f: 49.274, l: "C", a: 0},
{o: 49.274, f: 69.736, l: "B", a: 1},
{o: 69.736, f: 77.833, l: "A", a: 0},
{o: 77.833, f: 94.062, l: "A", a: 1},
{o: 94.062, f: 110.226, l: "C", a: 0},
{o: 110.226, f: 130.699, l: "B", a: 1},
{o: 130.699, f: 146.93, l: "A", a: 0},
{o: 146.93, f: 163.179, l: "C", a: 1},
{o: 163.179, f: 183.575, l: "B", a: 0},
{o: 183.575, f: 191.76, l: "A", a: 1},
{o: 191.76, f: 208.159, l: "A", a: 0},
{o: 208.159, f: 224.471, l: "C", a: 1},
{o: 224.471, f: 258.067, l: "B", a: 0}],
[{o: 0.308, f: 6.92, l: "A", a: 0},
{o: 6.92, f: 23.904, l: "C", a: 1},
{o: 23.904, f: 32.288, l: "C", a: 0},
{o: 32.288, f: 41.376, l: "C", a: 1},
{o: 41.376, f: 60.756, l: "C", a: 0},
{o: 60.756, f: 69.652, l: "C", a: 1},
{o: 69.652, f: 77.276, l: "C", a: 0},
{o: 77.276, f: 93.728, l: "C", a: 1},
{o: 93.728, f: 103.672, l: "C", a: 0},
{o: 103.672, f: 120.132, l: "C", a: 1},
{o: 120.132, f: 131.148, l: "C", a: 0},
{o: 131.148, f: 145.58, l: "B", a: 1},
{o: 145.58, f: 161.34, l: "B", a: 0},
{o: 161.34, f: 174.984, l: "B", a: 1},
{o: 174.984, f: 183.08, l: "D", a: 0},
{o: 183.08, f: 196.056, l: "C", a: 1},
{o: 196.056, f: 207.848, l: "C", a: 0},
{o: 207.848, f: 218.072, l: "A", a: 1},
{o: 218.072, f: 234.632, l: "C", a: 0},
{o: 234.632, f: 247.812, l: "B", a: 1},
{o: 247.812, f: 254.464, l: "B", a: 0}],
[{o: 0.308, f: 6.92, l: "E", a: 0},
{o: 6.92, f: 23.904, l: "C", a: 1},
{o: 23.904, f: 32.288, l: "D", a: 0},
{o: 32.288, f: 41.376, l: "C", a: 1},
{o: 41.376, f: 60.756, l: "C", a: 0},
{o: 60.756, f: 69.652, l: "G", a: 1},
{o: 69.652, f: 77.276, l: "C", a: 0},
{o: 77.276, f: 93.728, l: "D", a: 1},
{o: 93.728, f: 103.672, l: "F", a: 0},
{o: 103.672, f: 120.132, l: "A", a: 1},
{o: 120.132, f: 131.148, l: "F", a: 0},
{o: 131.148, f: 145.58, l: "B", a: 1},
{o: 145.58, f: 161.34, l: "B", a: 0},
{o: 161.34, f: 174.984, l: "B", a: 1},
{o: 174.984, f: 183.08, l: "H", a: 0},
{o: 183.08, f: 196.056, l: "D", a: 1},
{o: 196.056, f: 207.848, l: "C", a: 0},
{o: 207.848, f: 218.072, l: "I", a: 1},
{o: 218.072, f: 234.632, l: "A", a: 0},
{o: 234.632, f: 247.812, l: "J", a: 1},
{o: 247.812, f: 254.464, l: "K", a: 0}],
[{o: 0.493, f: 6.907, l: "8", a: 0},
{o: 6.907, f: 17.56, l: "2", a: 1},
{o: 17.56, f: 66.88, l: "1", a: 0},
{o: 66.88, f: 78.533, l: "2", a: 1},
{o: 78.533, f: 91.72, l: "1", a: 0},
{o: 91.72, f: 109.44, l: "3", a: 1},
{o: 109.44, f: 129.893, l: "1", a: 0},
{o: 129.893, f: 147.067, l: "4", a: 1},
{o: 147.067, f: 154.187, l: "5", a: 0},
{o: 154.187, f: 162.88, l: "4", a: 1},
{o: 162.88, f: 173.707, l: "5", a: 0},
{o: 173.707, f: 183.867, l: "6", a: 1},
{o: 183.867, f: 207.36, l: "1", a: 0},
{o: 207.36, f: 221.12, l: "3", a: 1},
{o: 221.12, f: 242.987, l: "1", a: 0},
{o: 242.987, f: 249.12, l: "2", a: 1},
{o: 249.12, f: 257.88, l: "7", a: 0}],
[{o: 0, f: 14.9, l: "a", a: 0},
{o: 14.9, f: 67.795, l: "b", a: 1},
{o: 67.795, f: 131.865, l: "b", a: 0},
{o: 131.865, f: 182.525, l: "b", a: 1},
{o: 182.525, f: 246.595, l: "b", a: 0},
{o: 246.595, f: 257.77, l: "c", a: 1}],
[{o: 0, f: 1.01, l: "n1", a: 0},
{o: 1.01, f: 15.314, l: "C", a: 1},
{o: 15.314, f: 41.157, l: "n2", a: 0},
{o: 41.157, f: 77.822, l: "A", a: 1},
{o: 77.822, f: 102.168, l: "n3", a: 0},
{o: 102.168, f: 138.739, l: "A", a: 1},
{o: 138.739, f: 159.579, l: "n4", a: 0},
{o: 159.579, f: 173.987, l: "B", a: 1},
{o: 173.987, f: 220.868, l: "n5", a: 0},
{o: 220.868, f: 234.661, l: "B", a: 1},
{o: 234.661, f: 245.04, l: "n6", a: 0},
{o: 245.04, f: 252.482, l: "C", a: 1},
{o: 252.482, f: 257.881, l: "n7", a: 0}],
[{o: 0, f: 0.308, l: "E", a: 0},
{o: 0.308, f: 45.928, l: "B", a: 1},
{o: 45.928, f: 66.868, l: "D", a: 0},
{o: 66.868, f: 107.936, l: "B", a: 1},
{o: 107.936, f: 127.616, l: "D", a: 0},
{o: 127.616, f: 160.312, l: "B", a: 1},
{o: 160.312, f: 181.092, l: "D", a: 0},
{o: 181.092, f: 221.864, l: "B", a: 1},
{o: 221.864, f: 246.288, l: "D", a: 0},
{o: 246.288, f: 254.464, l: "A", a: 1},
{o: 254.464, f: 258, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000406.ogg";
