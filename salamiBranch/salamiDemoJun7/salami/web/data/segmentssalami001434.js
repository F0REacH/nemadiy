var data = [
[{o: 0.186, f: 5.031, l: "I", a: 0},
{o: 5.031, f: 26.671, l: "A", a: 1},
{o: 26.671, f: 45.823, l: "V", a: 0},
{o: 45.823, f: 65.047, l: "C", a: 1},
{o: 65.047, f: 74.656, l: "A", a: 0},
{o: 74.656, f: 93.847, l: "V", a: 1},
{o: 93.847, f: 113.111, l: "C", a: 0},
{o: 113.111, f: 165.863, l: "E", a: 1},
{o: 165.863, f: 185.023, l: "C", a: 0},
{o: 185.023, f: 204.271, l: "C", a: 1},
{o: 204.271, f: 254.929, l: "E", a: 0}],
[{o: 0.2, f: 15.504, l: "B", a: 0},
{o: 15.504, f: 26.752, l: "B", a: 1},
{o: 26.752, f: 45.8, l: "D", a: 0},
{o: 45.8, f: 64.704, l: "D", a: 1},
{o: 64.704, f: 75.204, l: "D", a: 0},
{o: 75.204, f: 86.456, l: "D", a: 1},
{o: 86.456, f: 95.604, l: "D", a: 0},
{o: 95.604, f: 111.056, l: "D", a: 1},
{o: 111.056, f: 134.152, l: "D", a: 0},
{o: 134.152, f: 154.848, l: "D", a: 1},
{o: 154.848, f: 165.204, l: "A", a: 0},
{o: 165.204, f: 174.204, l: "C", a: 1},
{o: 174.204, f: 182.3, l: "C", a: 0},
{o: 182.3, f: 205.256, l: "E", a: 1},
{o: 205.256, f: 227.744, l: "D", a: 0},
{o: 227.744, f: 242.128, l: "F", a: 1},
{o: 242.128, f: 251.16, l: "B", a: 0}],
[{o: 0.2, f: 15.504, l: "B", a: 0},
{o: 15.504, f: 26.752, l: "E", a: 1},
{o: 26.752, f: 45.8, l: "D", a: 0},
{o: 45.8, f: 64.704, l: "A", a: 1},
{o: 64.704, f: 75.204, l: "F", a: 0},
{o: 75.204, f: 86.456, l: "D", a: 1},
{o: 86.456, f: 95.604, l: "D", a: 0},
{o: 95.604, f: 111.056, l: "A", a: 1},
{o: 111.056, f: 134.152, l: "A", a: 0},
{o: 134.152, f: 154.848, l: "A", a: 1},
{o: 154.848, f: 165.204, l: "G", a: 0},
{o: 165.204, f: 174.204, l: "C", a: 1},
{o: 174.204, f: 182.3, l: "C", a: 0},
{o: 182.3, f: 205.256, l: "H", a: 1},
{o: 205.256, f: 227.744, l: "A", a: 0},
{o: 227.744, f: 242.128, l: "I", a: 1},
{o: 242.128, f: 251.16, l: "J", a: 0}],
[{o: 0.787, f: 5.907, l: "8", a: 0},
{o: 5.907, f: 25.693, l: "6", a: 1},
{o: 25.693, f: 40.707, l: "3", a: 0},
{o: 40.707, f: 64.693, l: "2", a: 1},
{o: 64.693, f: 77.293, l: "3", a: 0},
{o: 77.293, f: 111.507, l: "2", a: 1},
{o: 111.507, f: 131.907, l: "1", a: 0},
{o: 131.907, f: 166.107, l: "5", a: 1},
{o: 166.107, f: 202.707, l: "4", a: 0},
{o: 202.707, f: 248.293, l: "1", a: 1},
{o: 248.293, f: 254.627, l: "7", a: 0}],
[{o: 0, f: 32.78, l: "a", a: 0},
{o: 32.78, f: 65.56, l: "a", a: 1},
{o: 65.56, f: 76.735, l: "b", a: 0},
{o: 76.735, f: 113.24, l: "a", a: 1},
{o: 113.24, f: 157.195, l: "c", a: 0},
{o: 157.195, f: 168.37, l: "d", a: 1},
{o: 168.37, f: 204.875, l: "a", a: 0},
{o: 204.875, f: 254.79, l: "c", a: 1}],
[{o: 0, f: 35.039, l: "n1", a: 0},
{o: 35.039, f: 65.039, l: "B", a: 1},
{o: 65.039, f: 83.035, l: "n2", a: 0},
{o: 83.035, f: 113.035, l: "B", a: 1},
{o: 113.035, f: 122.636, l: "A", a: 0},
{o: 122.636, f: 132.238, l: "A", a: 1},
{o: 132.238, f: 141.827, l: "A", a: 0},
{o: 141.827, f: 151.441, l: "A", a: 1},
{o: 151.441, f: 159.835, l: "A", a: 0},
{o: 159.835, f: 174.231, l: "n7", a: 1},
{o: 174.231, f: 204.231, l: "B", a: 0},
{o: 204.231, f: 213.833, l: "A", a: 1},
{o: 213.833, f: 223.434, l: "A", a: 0},
{o: 223.434, f: 233.035, l: "A", a: 1},
{o: 233.035, f: 242.614, l: "A", a: 0},
{o: 242.614, f: 251.101, l: "A", a: 1},
{o: 251.101, f: 254.909, l: "n12", a: 0}],
[{o: 0, f: 0.124, l: "G", a: 0},
{o: 0.124, f: 16.552, l: "D", a: 1},
{o: 16.552, f: 41.304, l: "E", a: 0},
{o: 41.304, f: 66.952, l: "B", a: 1},
{o: 66.952, f: 74.452, l: "C", a: 0},
{o: 74.452, f: 113.756, l: "B", a: 1},
{o: 113.756, f: 159.656, l: "F", a: 0},
{o: 159.656, f: 203.304, l: "B", a: 1},
{o: 203.304, f: 250.856, l: "F", a: 0},
{o: 250.856, f: 254.93, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001434.ogg";