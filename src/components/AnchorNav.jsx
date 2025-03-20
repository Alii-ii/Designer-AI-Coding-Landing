import { ScrollArea } from "@/components/ui/scroll-area";

const AnchorNav = ({ sections }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-6 top-24 z-[100]">
      <ScrollArea className="h-[300px] w-[200px] rounded-md border p-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
          >
            {section.title}
          </button>
        ))}
      </ScrollArea>
    </div>
  );
};

export default AnchorNav; 