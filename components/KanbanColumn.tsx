import Task from "./Task";
import { useStore } from "@/app/state-management/kanban-zustand/store";
import { useMemo } from "react";

const KanbanColumn = ({ status }: { status: string }) => {
  const tasks = useStore((store) => store.tasks);

  const filter = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );
  return (
    <div className="flex flex-col bg-gray-800 text-white w-1/3 min-h-[20rem] m-2 p-2 rounded-sm">
      {status}
      <Task title="todo" />
    </div>
  );
};

export default KanbanColumn;
