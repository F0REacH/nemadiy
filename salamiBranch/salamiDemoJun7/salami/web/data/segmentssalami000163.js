var data = [
[{o: 0.279, f: 102.539, l: "A", a: 0},
{o: 102.539, f: 132.191, l: "B", a: 1},
{o: 132.191, f: 189.97, l: "C", a: 0},
{o: 189.97, f: 246.073, l: "D", a: 1},
{o: 246.074, f: 379.116, l: "E", a: 0},
{o: 379.116, f: 480.765, l: "F", a: 1},
{o: 480.765, f: 530.909, l: "G", a: 0},
{o: 530.909, f: 548.062, l: "H", a: 1},
{o: 548.062, f: 606.041, l: "I", a: 0},
{o: 606.041, f: 650.188, l: "J", a: 1},
{o: 650.188, f: 713.665, l: "K", a: 0},
{o: 713.665, f: 865.186, l: "L", a: 1},
{o: 865.186, f: 900.385, l: "M", a: 0},
{o: 900.385, f: 918.478, l: "N", a: 1},
{o: 918.478, f: 976.035, l: "O", a: 0},
{o: 976.034, f: 984.171, l: "N'", a: 1},
{o: 984.171, f: 1049.359, l: "Q", a: 0}],
[{o: 0, f: 1049.34, l: "A", a: 0}],
[{o: 0, f: 1049.34, l: "A", a: 0}],
[{o: 0.307, f: 42.187, l: "2", a: 0},
{o: 42.187, f: 101.693, l: "3", a: 1},
{o: 101.693, f: 116.853, l: "2", a: 0},
{o: 116.853, f: 137.52, l: "6", a: 1},
{o: 137.52, f: 145.413, l: "2", a: 0},
{o: 145.413, f: 152.4, l: "6", a: 1},
{o: 152.4, f: 161.84, l: "2", a: 0},
{o: 161.84, f: 168.533, l: "6", a: 1},
{o: 168.533, f: 177.36, l: "2", a: 0},
{o: 177.36, f: 183.427, l: "7", a: 1},
{o: 183.427, f: 192.187, l: "2", a: 0},
{o: 192.187, f: 197.893, l: "7", a: 1},
{o: 197.893, f: 225.707, l: "5", a: 0},
{o: 225.707, f: 261.493, l: "3", a: 1},
{o: 261.493, f: 378.427, l: "2", a: 0},
{o: 378.427, f: 444.587, l: "3", a: 1},
{o: 444.587, f: 480.667, l: "1", a: 0},
{o: 480.667, f: 486.133, l: "3", a: 1},
{o: 486.133, f: 493.147, l: "1", a: 0},
{o: 493.147, f: 498, l: "3", a: 1},
{o: 498, f: 505.307, l: "1", a: 0},
{o: 505.307, f: 510.533, l: "3", a: 1},
{o: 510.533, f: 517.307, l: "1", a: 0},
{o: 517.307, f: 525.867, l: "3", a: 1},
{o: 525.867, f: 532.187, l: "1", a: 0},
{o: 532.187, f: 659.653, l: "4", a: 1},
{o: 659.653, f: 828.853, l: "1", a: 0},
{o: 828.853, f: 852.453, l: "5", a: 1},
{o: 852.453, f: 1043.173, l: "1", a: 0},
{o: 1043.173, f: 1048.28, l: "8", a: 1}],
[{o: 0, f: 105.79, l: "a", a: 0},
{o: 105.79, f: 225.735, l: "a", a: 1},
{o: 225.735, f: 334.505, l: "b", a: 0},
{o: 334.505, f: 436.57, l: "b", a: 1},
{o: 436.57, f: 559.495, l: "c", a: 0},
{o: 559.495, f: 680.93, l: "c", a: 1},
{o: 680.93, f: 773.31, l: "d", a: 0},
{o: 773.31, f: 911.88, l: "e", a: 1},
{o: 911.88, f: 1051.195, l: "e", a: 0}],
[{o: 0, f: 3.367, l: "n1", a: 0},
{o: 3.367, f: 12.608, l: "B", a: 1},
{o: 12.608, f: 21.374, l: "B", a: 0},
{o: 21.374, f: 32.345, l: "n3", a: 1},
{o: 32.345, f: 43.897, l: "B", a: 0},
{o: 43.897, f: 52.57, l: "B", a: 1},
{o: 52.57, f: 56.262, l: "n5", a: 0},
{o: 56.262, f: 64.853, l: "B", a: 1},
{o: 64.853, f: 68.534, l: "n6", a: 0},
{o: 68.534, f: 77.706, l: "B", a: 1},
{o: 77.706, f: 86.158, l: "B", a: 0},
{o: 86.158, f: 91.312, l: "n8", a: 1},
{o: 91.312, f: 99.776, l: "B", a: 0},
{o: 99.776, f: 106.382, l: "n9", a: 1},
{o: 106.382, f: 114.869, l: "B", a: 0},
{o: 114.869, f: 118.538, l: "n10", a: 1},
{o: 118.538, f: 127.071, l: "B", a: 0},
{o: 127.071, f: 135.268, l: "n11", a: 1},
{o: 135.268, f: 143.778, l: "B", a: 0},
{o: 143.778, f: 148.91, l: "n12", a: 1},
{o: 148.91, f: 157.431, l: "B", a: 0},
{o: 157.431, f: 164.142, l: "n13", a: 1},
{o: 164.142, f: 172.664, l: "B", a: 0},
{o: 172.664, f: 185.423, l: "n14", a: 1},
{o: 185.423, f: 193.875, l: "B", a: 0},
{o: 193.875, f: 246.375, l: "n15", a: 1},
{o: 246.375, f: 264.382, l: "C", a: 0},
{o: 264.382, f: 282.482, l: "C", a: 1},
{o: 282.482, f: 300.536, l: "C", a: 0},
{o: 300.536, f: 318.531, l: "C", a: 1},
{o: 318.531, f: 336.678, l: "C", a: 0},
{o: 336.678, f: 354.917, l: "C", a: 1},
{o: 354.917, f: 373.133, l: "C", a: 0},
{o: 373.133, f: 379.519, l: "n16", a: 1},
{o: 379.519, f: 391.465, l: "G", a: 0},
{o: 391.465, f: 403.307, l: "n17", a: 1},
{o: 403.307, f: 415.115, l: "G", a: 0},
{o: 415.115, f: 441.794, l: "n18", a: 1},
{o: 441.794, f: 458.629, l: "F", a: 0},
{o: 458.629, f: 462.878, l: "n19", a: 1},
{o: 462.878, f: 480.804, l: "F", a: 0},
{o: 480.804, f: 513.776, l: "n20", a: 1},
{o: 513.776, f: 526.629, l: "D", a: 0},
{o: 526.629, f: 532.074, l: "n21", a: 1},
{o: 532.074, f: 544.67, l: "D", a: 0},
{o: 544.67, f: 550.069, l: "n22", a: 1},
{o: 550.069, f: 562.654, l: "D", a: 0},
{o: 562.654, f: 576.935, l: "n23", a: 1},
{o: 576.935, f: 589.485, l: "D", a: 0},
{o: 589.485, f: 594.837, l: "n24", a: 1},
{o: 594.837, f: 607.306, l: "D", a: 0},
{o: 607.306, f: 620.089, l: "n25", a: 1},
{o: 620.089, f: 632.395, l: "D", a: 0},
{o: 632.395, f: 637.678, l: "n26", a: 1},
{o: 637.678, f: 649.903, l: "D", a: 0},
{o: 649.903, f: 686.498, l: "n27", a: 1},
{o: 686.498, f: 696.204, l: "A", a: 0},
{o: 696.204, f: 702.218, l: "n28", a: 1},
{o: 702.218, f: 711.889, l: "A", a: 0},
{o: 711.889, f: 717.299, l: "n29", a: 1},
{o: 717.299, f: 725.682, l: "D", a: 0},
{o: 725.682, f: 731.928, l: "n30", a: 1},
{o: 731.928, f: 741.506, l: "A", a: 0},
{o: 741.506, f: 750.214, l: "n31", a: 1},
{o: 750.214, f: 761.603, l: "A", a: 0},
{o: 761.603, f: 774.142, l: "A", a: 1},
{o: 774.142, f: 783.72, l: "A", a: 0},
{o: 783.72, f: 857.083, l: "n34", a: 1},
{o: 857.083, f: 866.569, l: "A", a: 0},
{o: 866.569, f: 870.69, l: "n35", a: 1},
{o: 870.69, f: 878.922, l: "E", a: 0},
{o: 878.922, f: 882.463, l: "n36", a: 1},
{o: 882.463, f: 891.31, l: "E", a: 0},
{o: 891.31, f: 899.518, l: "E", a: 1},
{o: 899.518, f: 903.036, l: "n38", a: 0},
{o: 903.036, f: 911.488, l: "E", a: 1},
{o: 911.488, f: 920.915, l: "A", a: 0},
{o: 920.915, f: 930.795, l: "n40", a: 1},
{o: 930.795, f: 940.431, l: "A", a: 0},
{o: 940.431, f: 954.909, l: "n41", a: 1},
{o: 954.909, f: 964.545, l: "A", a: 0},
{o: 964.545, f: 969.956, l: "n42", a: 1},
{o: 969.956, f: 979.499, l: "A", a: 0},
{o: 979.499, f: 984.851, l: "n43", a: 1},
{o: 984.851, f: 994.406, l: "A", a: 0},
{o: 994.406, f: 999.77, l: "n44", a: 1},
{o: 999.77, f: 1009.36, l: "A", a: 0},
{o: 1009.36, f: 1014.712, l: "n45", a: 1},
{o: 1014.712, f: 1024.279, l: "A", a: 0},
{o: 1024.279, f: 1029.654, l: "n46", a: 1},
{o: 1029.654, f: 1039.197, l: "A", a: 0},
{o: 1039.197, f: 1049.217, l: "n47", a: 1}],
[{o: 0, f: 0.184, l: "G", a: 0},
{o: 0.184, f: 198.336, l: "E", a: 1},
{o: 198.336, f: 221.864, l: "D", a: 0},
{o: 221.864, f: 231.416, l: "E", a: 1},
{o: 231.416, f: 397.484, l: "A", a: 0},
{o: 397.484, f: 416.232, l: "D", a: 1},
{o: 416.232, f: 445.768, l: "A", a: 0},
{o: 445.768, f: 480.62, l: "F", a: 1},
{o: 480.62, f: 487.02, l: "A", a: 0},
{o: 487.02, f: 492.664, l: "F", a: 1},
{o: 492.664, f: 499.188, l: "A", a: 0},
{o: 499.188, f: 505.596, l: "F", a: 1},
{o: 505.596, f: 511.432, l: "A", a: 0},
{o: 511.432, f: 516.48, l: "F", a: 1},
{o: 516.48, f: 526.592, l: "A", a: 0},
{o: 526.592, f: 532.344, l: "F", a: 1},
{o: 532.344, f: 541.628, l: "A", a: 0},
{o: 541.628, f: 546.736, l: "F", a: 1},
{o: 546.736, f: 556.636, l: "A", a: 0},
{o: 556.636, f: 561.704, l: "F", a: 1},
{o: 561.704, f: 571.528, l: "A", a: 0},
{o: 571.528, f: 576.604, l: "F", a: 1},
{o: 576.604, f: 615.208, l: "A", a: 0},
{o: 615.208, f: 621.94, l: "F", a: 1},
{o: 621.94, f: 629.416, l: "A", a: 0},
{o: 629.416, f: 636.424, l: "F", a: 1},
{o: 636.424, f: 644.036, l: "A", a: 0},
{o: 644.036, f: 650.864, l: "F", a: 1},
{o: 650.864, f: 659.812, l: "D", a: 0},
{o: 659.812, f: 1044.92, l: "F", a: 1},
{o: 1044.92, f: 1049.34, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000163.ogg";
