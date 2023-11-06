import { redirect } from "next/navigation";

export default function TodoPage() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  return redirect(`/todo/${year}/${month}`);
}
