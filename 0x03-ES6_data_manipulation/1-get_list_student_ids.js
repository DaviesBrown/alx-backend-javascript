export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];
  const list = arr.map((e) => e.id);

  return list;
}
