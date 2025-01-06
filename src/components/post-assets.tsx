import Image from "next/image";
import type { Asset } from "@/definitions";
import Link from "next/link";

type Props = {
  id: string;
  assets: Asset[];
};
export default function PostAssets({ id, assets }: Props) {
  return (
    <picture
      className={`grid ${assets.length < 2 ? "grid-cols-1" : "grid-cols-2"} ${
        assets.length > 2 && "grid-rows-2"
      } ${
        assets.length < 2 && "grid-rows-1"
      } gap-2 w-full overflow-hidden rounded-md shadow shadow-black/30 my-3`}
    >
      {assets.map((asset, index) => (
        <Link
          href={`/post/${id}/assets/${index + 1}`}
          key={asset.publicId}
          className="block shadow shadow-black/30"
        >
          <Image
            src={asset.secureUrl}
            alt={`Foto numero ${index} de la publicacion`}
            width={asset.width}
            height={asset.height}
            className="w-full aspect-video object-contain"
            loading="lazy"
          />
        </Link>
      ))}
    </picture>
  );
}
