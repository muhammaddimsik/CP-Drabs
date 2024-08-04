import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Loader } from "lucide-react";
import { useState } from "react";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const forgotSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/reset-password`, {
        email,
      });

      toast({
        title: "Success",
        description: "Silakan cek email anda",
        variant: "success",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="text-end w-full hover:cursor-default">
        <p className="text-sm hover:underline inline hover:cursor-pointer font-semibold text-blue-500">
          Forgot Password?
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Forgot Password</DialogTitle>
          <DialogDescription>
            Enter your email and we'll send you a link to reset your password
          </DialogDescription>
        </DialogHeader>
        <div>
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            placeholder="example@domain.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button onClick={forgotSubmit} type="submit">
            {isLoading ? <Loader className="animate-spin" /> : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordForm;
