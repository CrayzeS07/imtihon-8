import { getTodos } from "../server/get-todos";
import { PhoneCard } from "./Cards";
export default async function Home() {
  const data = await getTodos();

  return (
    <main className="p-24">
      {data.map((todo) => (
        <PhoneCard key={todo.id} {...todo} />
      ))}
    </main>
  );
}
