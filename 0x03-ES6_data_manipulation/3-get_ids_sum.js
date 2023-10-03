export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) return [];
  const list = arr.reduce((total, value) => total + value.id, 0);

  return list;
}
