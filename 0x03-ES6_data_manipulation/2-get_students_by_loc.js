export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr)) return [];
  const list = arr.filter((e) => e.location === city);

  return list;
}
