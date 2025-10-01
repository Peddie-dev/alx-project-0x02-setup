// pages/home.tsx
import Card from "../components/common/Card";

export default function HomePage() {
  return (
       <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Home Page</h1>

      <Card
        title="First Card"
        content="This is the content of the first card."
      />
      <Card
        title="Second Card"
        content="Here is some more content for the second card."
      />
      <Card
        title="Third Card"
        content="And this is the content of the third card."
      />
    </div>
  );
}