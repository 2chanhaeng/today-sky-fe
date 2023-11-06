export default function formToObj<T = any>(form: FormData): T {
  return Object.fromEntries(form.entries()) as unknown as T;
}
