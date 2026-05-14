type Props = Readonly<{
  name: string;
  content: string;
}>;

export default function Post({ name, content }: Props) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{content}</p>
    </div>
  );
}
