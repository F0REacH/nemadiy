var data = [
[{o: 0.266, f: 19.347, l: "A", a: 0},
{o: 19.347, f: 66.383, l: "B", a: 1},
{o: 66.383, f: 94.223, l: "B", a: 0},
{o: 94.223, f: 250.206, l: "C", a: 1},
{o: 250.206, f: 358.44, l: "D", a: 0},
{o: 358.44, f: 445.884, l: "C", a: 1}],
[{o: 0.224, f: 18.976, l: "B", a: 0},
{o: 18.976, f: 35.44, l: "B", a: 1},
{o: 35.44, f: 49.492, l: "B", a: 0},
{o: 49.492, f: 65.884, l: "B", a: 1},
{o: 65.884, f: 82.092, l: "B", a: 0},
{o: 82.092, f: 101.952, l: "B", a: 1},
{o: 101.952, f: 120.356, l: "B", a: 0},
{o: 120.356, f: 130.128, l: "B", a: 1},
{o: 130.128, f: 142.212, l: "B", a: 0},
{o: 142.212, f: 158.388, l: "B", a: 1},
{o: 158.388, f: 173.428, l: "B", a: 0},
{o: 173.428, f: 186.652, l: "B", a: 1},
{o: 186.652, f: 197.512, l: "B", a: 0},
{o: 197.512, f: 214.156, l: "B", a: 1},
{o: 214.156, f: 239.832, l: "B", a: 0},
{o: 239.832, f: 254.676, l: "B", a: 1},
{o: 254.676, f: 271.276, l: "C", a: 0},
{o: 271.276, f: 288.292, l: "E", a: 1},
{o: 288.292, f: 300.64, l: "E", a: 0},
{o: 300.64, f: 315.896, l: "E", a: 1},
{o: 315.896, f: 333.852, l: "D", a: 0},
{o: 333.852, f: 357.764, l: "D", a: 1},
{o: 357.764, f: 368.14, l: "F", a: 0},
{o: 368.14, f: 384.132, l: "A", a: 1},
{o: 384.132, f: 394.144, l: "G", a: 0},
{o: 394.144, f: 410.64, l: "A", a: 1},
{o: 410.64, f: 421.552, l: "H", a: 0},
{o: 421.552, f: 434.996, l: "I", a: 1},
{o: 434.996, f: 445.12, l: "J", a: 0}],
[{o: 0.224, f: 18.976, l: "B", a: 0},
{o: 18.976, f: 35.44, l: "A", a: 1},
{o: 35.44, f: 49.492, l: "A", a: 0},
{o: 49.492, f: 65.884, l: "B", a: 1},
{o: 65.884, f: 82.092, l: "A", a: 0},
{o: 82.092, f: 101.952, l: "G", a: 1},
{o: 101.952, f: 120.356, l: "G", a: 0},
{o: 120.356, f: 130.128, l: "H", a: 1},
{o: 130.128, f: 142.212, l: "C", a: 0},
{o: 142.212, f: 158.388, l: "G", a: 1},
{o: 158.388, f: 173.428, l: "I", a: 0},
{o: 173.428, f: 186.652, l: "F", a: 1},
{o: 186.652, f: 197.512, l: "C", a: 0},
{o: 197.512, f: 214.156, l: "J", a: 1},
{o: 214.156, f: 239.832, l: "F", a: 0},
{o: 239.832, f: 254.676, l: "F", a: 1},
{o: 254.676, f: 271.276, l: "K", a: 0},
{o: 271.276, f: 288.292, l: "E", a: 1},
{o: 288.292, f: 300.64, l: "E", a: 0},
{o: 300.64, f: 315.896, l: "E", a: 1},
{o: 315.896, f: 333.852, l: "D", a: 0},
{o: 333.852, f: 357.764, l: "D", a: 1},
{o: 357.764, f: 368.14, l: "L", a: 0},
{o: 368.14, f: 384.132, l: "M", a: 1},
{o: 384.132, f: 394.144, l: "N", a: 0},
{o: 394.144, f: 410.64, l: "O", a: 1},
{o: 410.64, f: 421.552, l: "P", a: 0},
{o: 421.552, f: 434.996, l: "Q", a: 1},
{o: 434.996, f: 445.12, l: "R", a: 0}],
[{o: 0.707, f: 18.693, l: "5", a: 0},
{o: 18.693, f: 45.76, l: "4", a: 1},
{o: 45.76, f: 65.267, l: "5", a: 0},
{o: 65.267, f: 85.667, l: "4", a: 1},
{o: 85.667, f: 99.96, l: "1", a: 0},
{o: 99.96, f: 110.333, l: "3", a: 1},
{o: 110.333, f: 120.667, l: "1", a: 0},
{o: 120.667, f: 129.28, l: "3", a: 1},
{o: 129.28, f: 137.293, l: "1", a: 0},
{o: 137.293, f: 148.347, l: "2", a: 1},
{o: 148.347, f: 156.4, l: "1", a: 0},
{o: 156.4, f: 165.093, l: "2", a: 1},
{o: 165.093, f: 175.453, l: "1", a: 0},
{o: 175.453, f: 185.8, l: "2", a: 1},
{o: 185.8, f: 193.227, l: "1", a: 0},
{o: 193.227, f: 204.733, l: "2", a: 1},
{o: 204.733, f: 211.013, l: "1", a: 0},
{o: 211.013, f: 220.747, l: "2", a: 1},
{o: 220.747, f: 229.853, l: "1", a: 0},
{o: 229.853, f: 240.133, l: "2", a: 1},
{o: 240.133, f: 296.933, l: "1", a: 0},
{o: 296.933, f: 303.653, l: "3", a: 1},
{o: 303.653, f: 365, l: "1", a: 0},
{o: 365, f: 375.307, l: "3", a: 1},
{o: 375.307, f: 384.427, l: "1", a: 0},
{o: 384.427, f: 393.387, l: "3", a: 1},
{o: 393.387, f: 403.44, l: "1", a: 0},
{o: 403.44, f: 411.307, l: "3", a: 1},
{o: 411.307, f: 418.027, l: "1", a: 0},
{o: 418.027, f: 427.56, l: "7", a: 1},
{o: 427.56, f: 432.867, l: "8", a: 0},
{o: 432.867, f: 445.8, l: "6", a: 1}],
[{o: 0, f: 46.935, l: "a", a: 0},
{o: 46.935, f: 101.32, l: "a", a: 1},
{o: 101.32, f: 254.045, l: "b", a: 0},
{o: 254.045, f: 408.26, l: "b", a: 1},
{o: 408.26, f: 446.255, l: "c", a: 0}],
[{o: 0, f: 0.337, l: "n1", a: 0},
{o: 0.337, f: 47.183, l: "B", a: 1},
{o: 47.183, f: 93.925, l: "B", a: 0},
{o: 93.925, f: 111.2, l: "n2", a: 1},
{o: 111.2, f: 148.05, l: "A", a: 0},
{o: 148.05, f: 166.534, l: "n3", a: 1},
{o: 166.534, f: 203.302, l: "A", a: 0},
{o: 203.302, f: 221.634, l: "n4", a: 1},
{o: 221.634, f: 258.159, l: "A", a: 0},
{o: 258.159, f: 298.98, l: "A", a: 1},
{o: 298.98, f: 339.348, l: "A", a: 0},
{o: 339.348, f: 375.629, l: "A", a: 1},
{o: 375.629, f: 411.632, l: "A", a: 0},
{o: 411.632, f: 445.87, l: "n7", a: 1}],
[{o: 0, f: 0.088, l: "G", a: 0},
{o: 0.088, f: 8.1, l: "E", a: 1},
{o: 8.1, f: 44.696, l: "D", a: 0},
{o: 44.696, f: 54.344, l: "E", a: 1},
{o: 54.344, f: 88.972, l: "D", a: 0},
{o: 88.972, f: 136.44, l: "E", a: 1},
{o: 136.44, f: 143.116, l: "F", a: 0},
{o: 143.116, f: 155.1, l: "E", a: 1},
{o: 155.1, f: 165.376, l: "F", a: 0},
{o: 165.376, f: 173.452, l: "E", a: 1},
{o: 173.452, f: 180.216, l: "F", a: 0},
{o: 180.216, f: 269.704, l: "E", a: 1},
{o: 269.704, f: 279.696, l: "D", a: 0},
{o: 279.696, f: 377.888, l: "E", a: 1},
{o: 377.888, f: 384.58, l: "F", a: 0},
{o: 384.58, f: 423.128, l: "E", a: 1},
{o: 423.128, f: 443.512, l: "D", a: 0},
{o: 443.512, f: 445.885, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001058.ogg";

var artist = "Buena Vista Social Club";

var track = "El Cuarto de Tula";
