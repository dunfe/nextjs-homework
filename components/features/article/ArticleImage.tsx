import { CtfImage } from '@components/contentful';
import { ComponentRichImage } from '@lib/__generated/sdk';

interface ArticleImageProps {
  image: ComponentRichImage;
}

export const ArticleImage = ({ image }: ArticleImageProps) => {
  const className = image.fullWidth
  ? 'mt-0 mb-0 md:w-screen md:max-w-[calc(100vw-40px)] md:shrink-0'
  : 'mt-0 mb-0 rounded-2xl border border-gray300 shadow-lg';
  return image.image ? (
    <figure>
      <div className="flex justify-center">
        <CtfImage
          nextImageProps={{
            className: className,
          }}
          {...image.image}
        />
      </div>
      {image.caption && (
        <figcaption className="mt-4">
          {image.caption}
        </figcaption>
      )}
    </figure>
  ) : null;
};
