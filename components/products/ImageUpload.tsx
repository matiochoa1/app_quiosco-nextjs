"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import { toast } from "react-toastify";

export default function ImageUpload() {
	const [imageUrl, setImageUrl] = useState("");

	return (
		<>
			<CldUploadWidget
				options={{
					maxFiles: 1,
				}}
				uploadPreset="ml_default"
				onSuccess={(result, { widget }) => {
					if (result.event === "success") {
						widget.close();
						toast.success("La imagen se ha subido correctamente");
						// @ts-expect-error, this is a type issue from the cloudinary dependency, secure_url does exist in the response and optional chaining does not work either
						setImageUrl(result.info?.secure_url);
					}
				}}>
				{({ open }) => (
					<>
						<div className="space-y-2">
							<label className="text-slate-800 ">Imagen Producto</label>
							<div
								onClick={() => open()}
								className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100">
								<TbPhotoPlus size={50} />

								<p className="text-lg font-semibold">Agregar Imagen</p>

								{imageUrl && (
									<div className="absolute inset-0 w-full h-full">
										<Image
											fill
											style={{ objectFit: "contain" }}
											src={imageUrl}
											alt="Imagen de producto"
										/>
									</div>
								)}
							</div>
						</div>

						<input type="hidden" name="image" value={imageUrl} />
					</>
				)}
			</CldUploadWidget>
		</>
	);
}
