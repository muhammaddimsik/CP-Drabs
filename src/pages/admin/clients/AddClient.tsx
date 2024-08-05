import Layout from "@/components/Layout";
import React, { useRef, useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { Loader, Trash2 } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/stores/AuthStore";
import { Label } from "@/components/ui/label";

const path = [
  {
    name: "Clients",
    url: "/clients",
  },
  {
    name: "Add Clients",
    url: "/services/add-clients",
  },
];

const formSchema = z.object({
  title: z.string().min(2).max(50, "Maksimal panjang nama adalah 50"),
  description: z.string().min(10, "Deskripsi minimal terdiri dari 10 karakter"),
});

const AddClient: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const { accessToken } = useAuth();

  const getLinkImg = async (img: File) => {
    try {
      const response = await axiosInstance.post(
        "files",
        {
          file: img,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    let imageUrl = "";

    if (imgToUpload) {
      imageUrl = await getLinkImg(imgToUpload);
    }

    const body = {
      ...values,
      image: imageUrl,
    };

    try {
      await axiosInstance.post("client", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast({
        title: "Success",
        description: "Data client berhasil ditambahkan",
        variant: "success",
      });

      navigate("/administrator/clients");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Data client gagal ditambahkan, coba beberapa saat lagi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const [imgToUpload, setImgToUpload] = useState<File>();
  const [preveiw, setPreview] = useState<string | null>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImgToUpload(file);
    }
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const removeImg = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Mengatur ulang nilai input file
    }
  };

  return (
    <Layout path={path} title="Add Client">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="bg-white rounded-xl p-4 flex gap-6">
            <div className="w-1/2 space-y-4">
              <div>
                <Label htmlFor="pict">Image</Label>
                <Input
                  id="pict"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  ref={fileInputRef}
                />
                {preveiw && (
                  <div className="mt-2">
                    <Label
                      htmlFor="pict"
                      className="border rounded-md flex justify-center py-2"
                    >
                      <img
                        src={preveiw ? preveiw : ""}
                        alt="prevew-wisata"
                        className="max-h-40"
                      />
                    </Label>
                    <div className="text-center py-2 border rounded-md mt-1">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={removeImg}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Client</FormLabel>
                    <FormControl>
                      <Input placeholder="ex. Web Development" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Deskripsi</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Masukan deskripsi dari service"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="bg-white w-full py-2 px-4 flex justify-end">
            <Button size="sm" type="submit">
              {isLoading ? <Loader className="animate-spin" /> : "Simpan"}
            </Button>
          </div>
        </form>
      </Form>
    </Layout>
  );
};

export default AddClient;
