import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";

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

import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { Loader, Pencil } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { TServices } from "@/lib/models";
import { useAuth } from "@/stores/AuthStore";

const formSchema = z.object({
  title: z.string().min(2).max(255, "Maksimal panjang nama adalah 255"),
  content: z.string().min(10, "Deskripsi minimal terdiri dari 10 karakter"),
  icon: z.string(),
});

interface Props {
  services: TServices;
  getDataServices: () => void;
}

const EditService: React.FC<Props> = ({
  services,
  getDataServices: refetch,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: services.title,
      content: services.content,
      icon: services.icon,
    },
  });

  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { accessToken } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      await axiosInstance.put(`services/${services.id_service}`, values, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast({
        title: "Success",
        description: "Data service berhasil diubah",
        variant: "success",
      });

      setIsOpen(false);
      refetch();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Data service gagal diubah, coba beberapa saat lagi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
          <DialogTitle>Edit Service</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="bg-white rounded-xl space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Service</FormLabel>
                    <FormControl>
                      <Input
                        className="text-sm"
                        placeholder="Masukan nama service"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
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
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icon</FormLabel>
                    <FormControl>
                      <Input placeholder="ex. <svg></svg>" {...field} />
                    </FormControl>
                    <FormDescription className="mt-1">
                      Icon harus berbentuk tag svg
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

export default EditService;
