interface CardProps {
  name: string;
  keywords: string[];
  img: string;
  description: string;
  id: number;
}
const colors = ["#4297A0", "#F4EAE6", "#E57F84", "#2F5061", "#B7CFDC"];

function Card({ project }: { project: CardProps }) {
  return (
    <div className="flex-1">
      <div
        className="h-[285px] min-w-[560px]"
        style={{ backgroundColor: colors[project.id - 1] }}
      >
        Card
      </div>
      <div>
        <div>{project.name}</div>
        <div>{project.keywords.join(", ")}</div>
      </div>
    </div>
  );
}

export default Card;
