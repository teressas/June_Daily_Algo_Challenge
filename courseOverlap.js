function courseOverlaps(studentCoursePairs) {
    if (!studentCoursePairs || studentCoursePairs.length === 0) {
        return [];
    }
    const courses = new Map();
    for (const [studentId, course] of studentCoursePairs) {
        if (courses.has(studentId)) {
            courses.get(studentId).push(course);
        } else {
            courses.set(studentId, [course]);
        }
    }
    // console.log(courses)
    const studentIds = [...courses.keys()];
    // console.log(studentIds)
    for (let i = 0; i < studentIds.length; i++) {
        for (let j = i + 1; j < studentIds.length; j++) {
            const overlaps = [];
            // console.log(studentIds[i],studentIds[j]) // 58 94
            for (const course1 of courses.get(studentIds[i])) {
                for (const course2 of courses.get(studentIds[j])) {
                    // console.log("course1",course1, course2)
                    // console.log("overlaps",overlaps,course1, course2, studentIds[i],studentIds[j] )
                    if (course1 === course2) {
                        overlaps.push(course1);
                    }
                }
            }

            console.log(`[${studentIds[i]},${studentIds[j]}]: ${overlaps}`);
        }
    }
}

/*
// create a map to store all the courses that map to each student id
Map(4) {
  '58' => [ 'Software Design', 'Linear Algebra', 'Mechanics', 'Economics' ],
  '94' => [ 'Art History', 'Operating Systems', 'Economics' ],
  '17' => [ 'Software Design', 'Linear Algebra', 'Political Science' ],
  '25' => [ 'Economics' ]
}

[ '58', '94', '17', '25' ]

compare 58 software design 94 art history
loop through the keys of the map
create a nested for loop to look at the courses of the 1st key and the courses of the 2nd key
if the course from each key match then push it into an arrray 
at the end create log to display the studentId pair and the matching courses arr
*/

student_course_pairs_1 = [
    ["58", "Software Design"],
    ["58", "Linear Algebra"],
    ["94", "Art History"],
    ["94", "Operating Systems"],
    ["17", "Software Design"],
    ["58", "Mechanics"],
    ["58", "Economics"],
    ["17", "Linear Algebra"],
    ["17", "Political Science"],
    ["94", "Economics"],
    ["25", "Economics"],
]

/*
Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  [58, 17]: ["Software Design", "Linear Algebra"]
  [58, 94]: ["Economics"]
  [58, 25]: ["Economics"]
  [94, 25]: ["Economics"]
  [17, 94]: []
  [17, 25]: []
}
*/
console.log(courseOverlaps(student_course_pairs_1))

student_course_pairs_2 = [
    ["42", "Software Design"],
    ["0", "Advanced Mechanics"],
    ["9", "Art History"],
]

// console.log(courseOverlaps(student_course_pairs_2))

// if (!studentCoursePairs || studentCoursePairs.length === 0) {
//     return [];
// }
// const courses = new Map();
// for (const [studentId, course] of studentCoursePairs) {
//     if (courses.has(studentId)) {
//         courses.get(studentId).push(course);
//     } else {
//         courses.set(studentId, [course]);
//     }
// }
// // console.log(courses)
// const studentIds = [...courses.keys()];
// // console.log(studentIds)
// for (let i = 0; i < studentIds.length; i++) {
//     for (let j = i + 1; j < studentIds.length; j++) {
//         const overlaps = [];
//         // console.log(studentIds[i],studentIds[j]) // 58 94
//         for (const course1 of courses.get(studentIds[i])) {
//             for (const course2 of courses.get(studentIds[j])) {
//                 // console.log("course1",course1, course2)
//                 // console.log("overlaps",overlaps,course1, course2, studentIds[i],studentIds[j] )
//                 if (course1 === course2) {
//                     overlaps.push(course1);
//                 }
//             }
//         }

//         console.log(`[${studentIds[i]},${studentIds[j]}]: ${overlaps}`);
//     }
// }