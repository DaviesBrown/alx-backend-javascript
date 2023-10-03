export default function createInt8TypedArray(length, position, value) {
  let buffer = new ArrayBuffer(length);
  try {
    buffer[position] = value;
    buffer = new DataView(buffer);
  } catch (error) {
    throw new Error('Position outside range');
  }

  return buffer;
}
