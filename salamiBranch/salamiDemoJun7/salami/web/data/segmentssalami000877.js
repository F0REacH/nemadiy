var data = [
[{o: 0.366, f: 14.377, l: "A", a: 0},
{o: 14.377, f: 56.06, l: "B", a: 1},
{o: 56.06, f: 109.078, l: "C", a: 0},
{o: 109.078, f: 169.271, l: "D", a: 1},
{o: 169.271, f: 182.929, l: "A", a: 0},
{o: 182.929, f: 213.629, l: "B", a: 1}],
[{o: 0.212, f: 6.784, l: "F", a: 0},
{o: 6.784, f: 14.324, l: "F", a: 1},
{o: 14.324, f: 24.712, l: "A", a: 0},
{o: 24.712, f: 37.976, l: "D", a: 1},
{o: 37.976, f: 46.676, l: "D", a: 0},
{o: 46.676, f: 55.372, l: "D", a: 1},
{o: 55.372, f: 68.776, l: "A", a: 0},
{o: 68.776, f: 76.704, l: "A", a: 1},
{o: 76.704, f: 83.32, l: "A", a: 0},
{o: 83.32, f: 89.752, l: "C", a: 1},
{o: 89.752, f: 98.856, l: "C", a: 0},
{o: 98.856, f: 105.744, l: "G", a: 1},
{o: 105.744, f: 116.648, l: "B", a: 0},
{o: 116.648, f: 127.564, l: "B", a: 1},
{o: 127.564, f: 136.968, l: "E", a: 0},
{o: 136.968, f: 144.36, l: "B", a: 1},
{o: 144.36, f: 152.5, l: "B", a: 0},
{o: 152.5, f: 160.38, l: "E", a: 1},
{o: 160.38, f: 169.008, l: "E", a: 0},
{o: 169.008, f: 175.104, l: "D", a: 1},
{o: 175.104, f: 182.22, l: "D", a: 0},
{o: 182.22, f: 193.244, l: "A", a: 1},
{o: 193.244, f: 203.488, l: "D", a: 0},
{o: 203.488, f: 209.612, l: "H", a: 1}],
[{o: 0.212, f: 6.784, l: "F", a: 0},
{o: 6.784, f: 14.324, l: "F", a: 1},
{o: 14.324, f: 24.712, l: "A", a: 0},
{o: 24.712, f: 37.976, l: "D", a: 1},
{o: 37.976, f: 46.676, l: "D", a: 0},
{o: 46.676, f: 55.372, l: "D", a: 1},
{o: 55.372, f: 68.776, l: "E", a: 0},
{o: 68.776, f: 76.704, l: "E", a: 1},
{o: 76.704, f: 83.32, l: "E", a: 0},
{o: 83.32, f: 89.752, l: "C", a: 1},
{o: 89.752, f: 98.856, l: "C", a: 0},
{o: 98.856, f: 105.744, l: "G", a: 1},
{o: 105.744, f: 116.648, l: "B", a: 0},
{o: 116.648, f: 127.564, l: "B", a: 1},
{o: 127.564, f: 136.968, l: "H", a: 0},
{o: 136.968, f: 144.36, l: "B", a: 1},
{o: 144.36, f: 152.5, l: "B", a: 0},
{o: 152.5, f: 160.38, l: "I", a: 1},
{o: 160.38, f: 169.008, l: "J", a: 0},
{o: 169.008, f: 175.104, l: "K", a: 1},
{o: 175.104, f: 182.22, l: "L", a: 0},
{o: 182.22, f: 193.244, l: "A", a: 1},
{o: 193.244, f: 203.488, l: "M", a: 0},
{o: 203.488, f: 209.612, l: "N", a: 1}],
[{o: 0.467, f: 1.56, l: "8", a: 0},
{o: 1.56, f: 55.6, l: "1", a: 1},
{o: 55.6, f: 61.76, l: "5", a: 0},
{o: 61.76, f: 70.987, l: "3", a: 1},
{o: 70.987, f: 84.227, l: "5", a: 0},
{o: 84.227, f: 90.427, l: "7", a: 1},
{o: 90.427, f: 108.253, l: "3", a: 0},
{o: 108.253, f: 133.373, l: "2", a: 1},
{o: 133.373, f: 138.8, l: "4", a: 0},
{o: 138.8, f: 150.053, l: "2", a: 1},
{o: 150.053, f: 169.253, l: "4", a: 0},
{o: 169.253, f: 207.667, l: "1", a: 1},
{o: 207.667, f: 213.48, l: "6", a: 0}],
[{o: 0, f: 39.485, l: "a", a: 0},
{o: 39.485, f: 52.15, l: "b", a: 1},
{o: 52.15, f: 78.97, l: "c", a: 0},
{o: 78.97, f: 109.515, l: "c", a: 1},
{o: 109.515, f: 125.16, l: "d", a: 0},
{o: 125.16, f: 145.275, l: "e", a: 1},
{o: 145.275, f: 169.115, l: "e", a: 0},
{o: 169.115, f: 213.07, l: "a", a: 1}],
[{o: 0, f: 7.454, l: "n1", a: 0},
{o: 7.454, f: 40.391, l: "B", a: 1},
{o: 40.391, f: 55.623, l: "n2", a: 0},
{o: 55.623, f: 83.789, l: "A", a: 1},
{o: 83.789, f: 108.716, l: "A", a: 0},
{o: 108.716, f: 137.88, l: "n4", a: 1},
{o: 137.88, f: 163.097, l: "A", a: 0},
{o: 163.097, f: 175.984, l: "n5", a: 1},
{o: 175.984, f: 208.62, l: "B", a: 0},
{o: 208.62, f: 213.299, l: "n6", a: 1}],
[{o: 0, f: 0.212, l: "F", a: 0},
{o: 0.212, f: 43.856, l: "B", a: 1},
{o: 43.856, f: 109.352, l: "D", a: 0},
{o: 109.352, f: 121.88, l: "B", a: 1},
{o: 121.88, f: 132.412, l: "D", a: 0},
{o: 132.412, f: 145.94, l: "E", a: 1},
{o: 145.94, f: 168.56, l: "D", a: 0},
{o: 168.56, f: 201.904, l: "B", a: 1},
{o: 201.904, f: 209.612, l: "D", a: 0},
{o: 209.612, f: 213.604, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000877.ogg";
