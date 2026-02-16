// src/components/Cassette.tsx
"use client"; // Bắt buộc phải có vì Framer Motion chạy ở Client

import { motion } from "framer-motion";
import { usePlayerStore } from "@/store/usePlayerStore"; // Import cái não vào

interface Props {
  id: string;
  title: string;
  color: string;
}

export default function Cassette({ id, title, color }: Props) {
  // Lấy hàm playProject từ kho ra để dùng
  const playProject = usePlayerStore((state) => state.playProject);

  return (
    <motion.div
      // --- PHẦN FRAMER MOTION (Cơ bắp) ---
      drag // 1. Bật chế độ kéo thả
      dragSnapToOrigin={true} // 2. Thả tay ra tự bay về chỗ cũ (như dây thun)
      whileHover={{ scale: 1.05, rotate: 2 }} // 3. Hiệu ứng khi di chuột vào
      whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 100 }} // 4. Hiệu ứng lúc đang kéo
      
      // --- LOGIC KẾT HỢP (Logic) ---
      onDragEnd={(event, info) => {
        // info.point.x / y là toạ độ nơi bạn thả chuột.
        // Tạm thời ta giả lập: Nếu kéo sang phải quá 200px thì coi như bỏ vào máy
        if (info.offset.x > 200) {
          playProject(id); // Gọi cái não: "Ê, phát bài này đi!"
          console.log(`Đã thả băng ${title} vào máy!`);
        }
      }}
      
      // --- PHẦN CSS (Giao diện) ---
      className={`w-32 h-20 rounded-md flex items-center justify-center text-white font-bold cursor-grab ${color} shadow-lg`}
    >
      {title}
    </motion.div>
  );
}