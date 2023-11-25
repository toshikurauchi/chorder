import SongForm from "@/fragments/SongForm";
import { postSong } from "./actions";

export const dynamic = "force-dynamic";

export default function SongPage({
  params,
  searchParams,
}: {
  params: { song: string };
  searchParams: { edit?: string };
}) {
  const songSlug = params.song;
  const edit = searchParams.edit === "true" || songSlug === "new";

  return <>{edit && <SongForm postSong={postSong} />}</>;
}
