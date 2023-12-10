"use client";

import { useRef, useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormRegister } from "react-hook-form";
import Image from "next/image";

import UploadIcon from "@/app/assets/UploadIcon";
import { Inputs } from "./SignupForm";
import { FormDataSchema } from "@/lib/schema";

interface ProfileAvatarProps {
  setSlika: (slika: string | null) => void;
  register: UseFormRegister<Inputs>;
}

const ProfileAvatar = ({ setSlika, register }: ProfileAvatarProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { ref: registerRef, ...rest } = register("slika");

  useEffect(() => {
    setSlika(imagePreview);
    console.log(imagePreview);
  }, [imagePreview]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const urlImage = URL.createObjectURL(file);
      setImagePreview(urlImage);
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="w-full h-full sm:relative">
      {!imagePreview ? (
        <>
          <button
            onClick={handleButtonClick}
            className="h-full w-full  rounded-full flex flex-col justify-center items-center px-4 text-xs"
          >
            <UploadIcon />
            Kliknite za dodavanje slike
          </button>
          <input
            type="file"
            {...rest}
            accept="image/*"
            ref={(e) => {
              registerRef(e);
              if (e) {
                inputRef.current = e;
              }
            }}
            hidden
            onChange={handleImageChange}
          />
        </>
      ) : (
        <Image
          src={imagePreview}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Preview"
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default ProfileAvatar;
