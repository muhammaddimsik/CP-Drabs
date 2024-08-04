import React, { FormEvent, useEffect, useState } from "react";
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
import { Loader, Pencil } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  id: number;
  kategori: string;
  refetch: () => void;
}

const EditCategory: React.FC<Props> = ({ id, kategori, refetch }) => {
  const [namaKategori, setNamaKategori] = useState(`${kategori}`);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const editCategories = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosInstance.put(`kategori/${id}`, {
        name_category: namaKategori,
      });

      toast({
        title: "Success",
        description: "Kategori berhasil diubah",
        variant: "success",
      });
      setIsOpen(false);
      refetch();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Kategori gagal diiubah",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setNamaKategori(kategori);
  }, [kategori]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" onClick={() => setIsOpen(true)}>
          <Pencil className="w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={editCategories} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Edit Kategori</DialogTitle>
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
              value={namaKategori}
            />
          </div>
          <DialogFooter>
            <Button size="sm">
              {isLoading ? <Loader className="animate-spin" /> : "Simpan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategory;
