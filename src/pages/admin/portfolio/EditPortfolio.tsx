import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Loader, Pencil, Trash2 } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { TPortfolio } from "@/lib/models";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/stores/AuthStore";

const formSchema = z.object({
  title: z.string().min(2).max(255, "Maksimal panjang nama adalah 255"),
  description: z.string().min(10, "Deskripsi minimal terdiri dari 10 karakter"),
});

interface Props {
  portfolio: TPortfolio;
  getDataPortfolio: () => void;
}

const EditPortfolio: React.FC<Props> = ({
  portfolio,
  getDataPortfolio: refetch,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: portfolio.title,
      description: portfolio.description,
    },
  });

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

  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    let imageUrl = "";

    if (imgToUpload) {
      imageUrl = await getLinkImg(imgToUpload);
    } else if (preveiw) {
      imageUrl = preveiw;
    }

    const body = {
      ...values,
      image: imageUrl,
    };
    try {
      await axiosInstance.put(`portofolio/${portfolio.id_portofolio}`, body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast({
        title: "Success",
        description: "Data portfolio berhasil diubah",
        variant: "success",
      });

      setIsOpen(false);
      refetch();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Data portfolio gagal diubah, coba beberapa saat lagi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const [imgToUpload, setImgToUpload] = useState<File>();
  const [preveiw, setPreview] = useState<string | null>(portfolio.image);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" onClick={() => setIsOpen(true)}>
          <Pencil className="w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Portfolio</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="bg-white rounded-xl space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul</FormLabel>
                    <FormControl>
                      <Input
                        className="text-sm"
                        placeholder="Masukan nama portfolio"
                        {...field}
                      />
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
                        placeholder="Masukan deskripsi dari portfolio"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                        alt="prevew-client"
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
            </div>
            <DialogFooter>
              <div className="bg-white w-full py-2 px-4 flex justify-end">
                <Button size="sm" type="submit">
                  {isLoading ? <Loader className="animate-spin" /> : "Simpan"}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPortfolio;
