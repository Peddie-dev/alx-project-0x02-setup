// components/common/PostCard.tsx
import { PostProps } from "../../interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}
