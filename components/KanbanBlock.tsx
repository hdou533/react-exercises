import KanbanColumn from "./KanbanColumn";
const KanbanBlock = () => {
  return (
    <div className="w-full flex justify-center">
      <KanbanColumn status="Todo" />
      <KanbanColumn status="Ongoing" />
      <KanbanColumn status="Done" />
    </div>
  );
};

export default KanbanBlock;
