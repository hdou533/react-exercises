import { create } from "zustand";

type Task = {
  title: string;
  status: string;
};
type State = {
  tasks: Task[];
};

type Action = {
  addTask: (title: State["tasks"]) => void;
};

export const useStore = create<State>((set) => ({
  tasks: [{ title: "add store", status: "todo" }],
}));
