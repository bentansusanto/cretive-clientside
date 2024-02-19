import { v4 as uuidv4 } from "uuid";

// Fungsi untuk menghasilkan ID kustom
export const generateCustomId = (): string => {
  const uuid = uuidv4(); // Menghasilkan UUID baru
  const customId = uuid.replace(/-/g, "").substring(0, 12); // Mengambil 8 karakter pertama dan menghapus tanda hubung
  return customId;
};