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
import { Loader, StickyNote, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import AddCategory from "@/components/AddCategory";
import { TCategories } from "@/lib/models";
// import Editor from "@/components/rich-text/editor";

import JoditEditor from "jodit-react";
import { Textarea } from "@/components/ui/textarea";

const MAX_FILE_SIZE_MB = 2;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

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
  title: z.string().min(2).max(255, "Maksimal panjang title adalah 255"),
  categori_id: z.string(),
  content: z.string().min(10, "Deskripsi minimal terdiri dari 10 karakter"),
  meta_description: z
    .string()
    .max(255, "Maksimal panjang meta description adalah 255"),
  meta_keyword: z.string().max(255, "Maksimal panjang meta keyword adalah 255"),
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
    if (fileToBig) {
      return toast({
        title: "Error",
        description: "File gambar terlalu besar, maksimal 2MB",
        variant: "destructive",
      });
    }

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

  const [fileToBig, setFileToBig] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file.size > MAX_FILE_SIZE_BYTES) {
        setFileToBig(true);
        setImgToUpload(undefined);
        setPreview(null);
        return; // Hentikan proses lebih lanjut jika file terlalu besar
      }

      setImgToUpload(file);
    }

    setFileToBig(false);

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

  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [linkFile, setLinkFile] = useState<string[]>([]);
  const [fileUpload, setFileUpload] = useState<File>();
  const [fileBesar, setFileBesar] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file.size > MAX_FILE_SIZE_BYTES) {
        setFileBesar(true);
        setPreview(null);
        return; // Hentikan proses lebih lanjut jika file terlalu besar
      }

      setFileUpload(file);
    }

    setFileBesar(false);
  };

  const uploadFile = async () => {
    setIsLoadingFile(true);
    try {
      const response = await axiosInstance.post(
        "files",
        {
          file: fileUpload,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setLinkFile((prevState) => {
        return [...(prevState || []), response.data.url];
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingFile(false);
    }
  };

  useEffect(() => {
    if (fileUpload && fileBesar == false) {
      uploadFile();
    }
  }, [fileUpload]);

  const handleCopy = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      toast({
        title: "Success",
        description: "Link berhasil dicopy",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Success",
        description: "Link gagal dicopy",
        variant: "destructive",
      });
    }
  };

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
                        alt="prevew-article"
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
                <FormDescription className={`${fileToBig && "text-red-500"}`}>
                  {fileToBig && "Kandani"} Maksimal ukuran file 2MB
                </FormDescription>
              </div>
              <div className="">
                <Label htmlFor="file">File</Label>
                {linkFile &&
                  linkFile.map((item) => (
                    <div
                      className="flex items-center gap-2"
                      onClick={() => handleCopy(item)}
                    >
                      <p
                        key={item}
                        className="text-sm break-words text-blue-500"
                      >
                        {item}
                      </p>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <StickyNote className="w-6 text-green-500" />
                        <p className="text-xs text-green-500">copy link</p>
                      </div>
                    </div>
                  ))}
                {isLoadingFile ? (
                  <Loader className="animate-spin" />
                ) : (
                  <>
                    <Input
                      id="file"
                      type="file"
                      onChange={(e) => handleFile(e)}
                      accept="file"
                      ref={fileInputRef}
                      className="mt-1"
                    />

                    <FormDescription
                      className={`${fileBesar && "text-red-500"}`}
                    >
                      {fileBesar && "Woyy!! Kandani"} Maksimal ukuran file 2MB
                    </FormDescription>
                  </>
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
            </div>
            <div className="w-1/2 space-y-4">
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
              <FormField
                control={form.control}
                name="meta_description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Meta Descriptions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Masukan meta description"
                        {...field}
                      />
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
                      <Textarea
                        placeholder="Masukan meta keywords"
                        {...field}
                      />
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
