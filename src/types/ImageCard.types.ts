export interface ImageCardProps {
  image: string;
  alt: string | null;
  likes: number;
  userName: string;
  onClick: () => void;
}
