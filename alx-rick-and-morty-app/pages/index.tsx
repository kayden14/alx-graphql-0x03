import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "@/graphql/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: 1 }
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Rick and Morty Episodes</h1>

      <ul className="w-full max-w-3xl bg-white shadow-md rounded-lg p-4 space-y-4">
        {data?.episodes?.results?.map((episode: any) => (
          <li key={episode.id} className="border-b pb-2">
            <h2 className="text-xl font-semibold">{episode.name}</h2>
            <p className="text-gray-600">{episode.air_date} — {episode.episode}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
