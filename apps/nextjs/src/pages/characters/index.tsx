import { api } from "~/utils/api";

export default function Characters() {
  const { data, isLoading } = api.character.all.useQuery();

  if (isLoading) return <p>Loading...</p>;

  if (!data) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {data?.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
