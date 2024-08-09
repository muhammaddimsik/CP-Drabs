import Layout from "@/components/Layout";
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
import { Loader } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/stores/AuthStore";

const path = [
  {
    name: "Services",
    url: "/administrator/services",
  },
  {
    name: "Add Service",
    url: "/administrator/services/add-service",
  },
];

const formSchema = z.object({
  title: z.string().min(2).max(255, "Maksimal panjang nama adalah 255"),
  content: z.string().min(10, "Deskripsi minimal terdiri dari 10 karakter"),
  icon: z.string(),
});

const AddService: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      icon: "",
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const { accessToken } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      await axiosInstance.post("services", values, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast({
        title: "Success",
        description: "Data service berhasil ditambahkan",
        variant: "success",
      });

      navigate("/administrator/services");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Data service gagal ditambahkan, coba beberapa saat lagi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout path={path} title="Add Service">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="bg-white rounded-xl p-4 flex gap-6">
            <div className="w-1/2 space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Service</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukan nama service" {...field} />
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

export default AddService;
