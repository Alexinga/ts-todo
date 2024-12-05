import { type ReactNode } from "react";

type ImageProp = {
  src: string;
  alt: string;
};

type HeaderProps = {
  imageProp: ImageProp;
  children: ReactNode;
};

export default function Header({ children, imageProp }: HeaderProps) {
  return (
    <div>
      <img src={imageProp.src} alt={imageProp.alt} />
      <p>{children}</p>
    </div>
  );
}
