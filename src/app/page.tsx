import { PageElement } from "@/components/PageElement.type";
import { RenderComponent } from "@/components/RenderComponent";

export default function Home() {
  const pageData: PageElement = {
    element: "div",
    children: [
      {
        element: "input",
        type: "text",
        placeholder: "Your name",
        name: "name",
      },
      {
        element: "div",
        className: "font-bold",
        children: [
          { element: "text", content: "Hello " },
          { element: "variable", variableName: "name" },
          {
            element: "div",
            className: "font-bold",
            children: [
              { element: "text", content: "Your name has " },
              {
                element: "calculated",
                variableName: "name",
                operator: "length",
              },
              { element: "text", content: " letters" },
            ],
          },
        ],
      },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RenderComponent {...pageData} />
    </main>
  );
}
