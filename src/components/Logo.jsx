export default function Logo({ href, image, className, alt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={image} className={className} alt={alt} />
    </a>
  );
}
