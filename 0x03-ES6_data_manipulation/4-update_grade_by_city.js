export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (!Array.isArray(arr)) return [];
  const list = arr.filter((e) => e.location === city);
  const newList = list.map((e) => {
    for (let i = 0; i < newGrades.length; i++) {
      const grade = newGrades[i].studentId === e.id ? newGrades[i].grade : 'N/A';
      console.log(grade);
      return {
        ...e,
        grade,
      };
    }
  });

  return newList;
}
