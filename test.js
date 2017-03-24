1│ var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
2│ var oddEvenCounts = numbers.reduce(function(counts, number) {
3│   if (isOdd(number)) {
4│     counts[odd]++;
5│   } else {
6│     counts[even]++;
7│   }
8│ }, {});


1│ var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
2│ var oddEvenCounts = numbers.reduce(function(counts, number) {
3│   if (isOdd(number)) {
4│     counts[odd]++;
5│   } else {
6│     counts[even]++;
7│   }
8│ }, {});