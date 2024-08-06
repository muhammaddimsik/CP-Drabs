import Layout from "@/components/Layout";
import React, { useEffect, useRef, useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@/stores/AuthStore";
import { Label } from "@/components/ui/label";
import { Loader, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import AddCategory from "@/components/AddCategory";
import { TCategories } from "@/lib/models";
// import Editor from "@/components/rich-text/editor";

import JoditEditor from "jodit-react";

const path = [
  {
    name: "Articles",
    url: "/articles",
  },
  {
    name: "Add Article",
    url: "/articles/add-article",
  },
];

const formSchema = z.object({
  title: z.string().min(2).max(500, "Maksimal panjang title adalah 500"),
  categori_id: z.string(),
  content: z.string().min(10, "Deskripsi minimal terdiri dari 10 karakter"),
  meta_description: z.string(),
  meta_keyword: z.string(),
});

const AddArticle: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      categori_id: "",
      content: "",
      meta_description: "",
      meta_keyword: "",
    },
  });

  const { accessToken } = useAuth();
  const { toast } = useToast();

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

  const navigate = useNavigate();

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
      await axiosInstance.post("article", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast({
        title: "Success",
        description: "Data article berhasil ditambahkan",
        variant: "success",
      });

      navigate("/administrator/articles");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Data article gagal ditambahkan, coba beberapa saat lagi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const [dataKategori, setDataKategori] = useState<TCategories[]>();
  const [isLoadingKategori, setIsLoadingKategori] = useState<boolean>(false);
  const getKategori = async () => {
    setIsLoadingKategori(true);
    try {
      const response = await axiosInstance.get("kategori");
      setDataKategori(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingKategori(false);
    }
  };

  useEffect(() => {
    getKategori();
  }, []);

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

  const editor = useRef(null);

  return (
    <Layout path={path} title="Add Article">
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
                  className="mt-1"
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
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukan judul artikel anda"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categori_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      {isLoadingKategori ? (
                        <Loader className="animate-spin" />
                      ) : (
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="-- Pilih kategori --" />
                          </SelectTrigger>
                          <SelectContent>
                            {dataKategori?.map((item) => (
                              <SelectItem
                                key={item.id_categori}
                                value={String(item.id_categori)}
                                className="capitalize"
                              >
                                {item.name_categori}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </FormControl>
                    <FormDescription>
                      Kategori tidak tersedia?
                      <AddCategory getKategori={getKategori} type="text" />
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2 space-y-4">
              <FormField
                control={form.control}
                name="meta_description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Meta Descriptions</FormLabel>
                    <FormControl>
                      <Input placeholder="ex. 9123.123.12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="meta_keyword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Meta Keyword</FormLabel>
                    <FormControl>
                      <Input placeholder="ex. 12873.12981.12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="w-full p-4 rounded-xl bg-white">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Descriptions</FormLabel>
                  <FormControl>
                    {/* <Editor
                        content={field.value}
                        onChange={field.onChange}
                        placeholder="Write your post here..."
                      /> */}
                    <JoditEditor
                      ref={editor}
                      value={field.value}
                      // config={config}
                      // tabIndex={1} // tabIndex of textarea
                      // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

export default AddArticle;
