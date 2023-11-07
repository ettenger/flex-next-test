import { PageElement } from "@/components/PageElement.type";
import { RenderComponent } from "@/components/RenderComponent";

export default function Home() {
  const pageData: PageElement = {
    element: "div",
    className: "font-bold",
    children: [
      { element: "text", content: "hello" },
      {
        element: "input",
        type: "text",
        placeholder: "Your name",
        name: "name",
      },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RenderComponent {...pageData} />
    </main>
  );
}
