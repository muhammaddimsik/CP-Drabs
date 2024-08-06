import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosInstance } from "@/lib/axios";
import { Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/stores/AuthStore";

interface Props {
  getKategori: () => void;
  type: string;
}

const AddCategory: React.FC<Props> = ({ getKategori, type }) => {
  const [namaKategori, setNamaKategori] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { toast } = useToast();
  const { accessToken } = useAuth();

  const addNewCategory = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosInstance.post(
        "kategori",
        {
          name_category: namaKategori,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      toast({
        title: "Success",
        description: "Kategori berhasil ditambahkan",
        variant: "success",
      });
      getKategori();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Kategori gagal ditambahkan",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {type === "button" ? (
        <DialogTrigger>
          <Button>+Add New</Button>
        </DialogTrigger>
      ) : (
        <DialogTrigger onClick={() => setIsOpen(true)}>
          Tambah Kategori
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[425px]">
        <form className="space-y-4">
          <DialogHeader>
            <DialogTitle>Tambah Kategori</DialogTitle>
          </DialogHeader>
          <div className="w-full space-y-1">
            <Label htmlFor="name" className="">
              Nama Kategori
            </Label>
            <Input
              id="name"
              className="w-full"
              placeholder="ex. Pemandian Alam"
              onChange={(e) => setNamaKategori(e.target.value)}
              required
            />
          </div>
          <DialogFooter>
            <Button size="sm" onClick={addNewCategory}>
              {isLoading ? <Loader className="animate-spin" /> : "Simpan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
