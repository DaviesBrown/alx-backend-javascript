export default function createInt8TypedArray(length, position, value) {
  let buffer = new ArrayBuffer(length);
  if (position >= length - 1) {
    throw new Error('Position outside range');
  }
  buffer[position] = value;
  buffer = new DataView(buffer);

  return buffer;
}
