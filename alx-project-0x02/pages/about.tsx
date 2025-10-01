//pages/about.tsx
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-6">About Us</h1>

      <div className="flex gap-4">
        <Button label="Small Rounded" size="small" shape="rounded-sm" />
        <Button label="Medium Rounded" size="medium" shape="rounded-md" />
        <Button label="Large Circle" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}