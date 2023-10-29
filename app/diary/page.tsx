import { redirect } from "next/navigation";

/**
 * redirect to this month diary page
 */
export default function DiaryPage() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  return redirect(`/diary/${year}/${month}`);
}
