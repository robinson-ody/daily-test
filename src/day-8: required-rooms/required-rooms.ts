console.clear();
type LectureInterval = [number, number];

const requiredRooms = (lectureIntervals: LectureInterval[]) => {
  let maxOverlap = 0;

  lectureIntervals.forEach(lecture => {
    lecture.forEach(time => {
      let totalOverlap = 0;

      for (const interval of lectureIntervals) {
        const startTime = interval[0];
        const endTime = interval[1];
        if (time >= startTime && time <= endTime) totalOverlap += 1;
      }

      if (totalOverlap > maxOverlap) maxOverlap = totalOverlap;
    });
  });

  return maxOverlap;
};

const lectureIntervals: LectureInterval[] = [
  [30, 75],
  [0, 50],
  [60, 150],
];

console.log(requiredRooms(lectureIntervals));
// * Expected output: 2
