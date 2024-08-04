import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { PasswordInput } from "@/components/ui/password-input";
import { useAuth } from "@/stores/AuthStore";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import axios from "axios";

import Logo from "/logo.png";

const formSchema = z.object({
  username: z.string().min(1, "username tidak boleh kosong"),
  password: z.string().min(8, "Password harus terdiri dari minimal 8 karakter"),
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
  //   "Password harus mengandung huruf kecil, huruf kapital, angka, dan karakter spesial"
  // ),
});

interface BodyLogin {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { setAccessToken } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);
  const [titleAlert, setTitleAlert] = useState("");
  const [descAlert, setDescAlert] = useState("");
  const handleLogin = async (body: BodyLogin) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        body
      );
      //   console.log(response.data.access_token);
      try {
        setAccessToken(response.data.access_token);
        navigate("/administrator/dashboard");
      } catch (error) {
        console.log("error set access_token");
      }
    } catch (error) {
      // console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setTitleAlert("username tidak terdaftar");
          setDescAlert("Pastikan username yang anda masukan sudah benar");
          setOpenAlert(true);
        } else if (error.response?.status === 400) {
          setTitleAlert("Password salah");
          setDescAlert("Pastikan password yang anda masukan sudah benar");
          setOpenAlert(true);
        }
      } else {
        console.error("Unexpected error", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleLogin(values);
  }
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-slate-100">
      <Card className="min-w-[350px] p-4 border-blue-400">
        <CardHeader className="text-center space-y-4">
          <Link to="/">
            <div className="lg:flex flex-col justify-center items-center gap-2">
              <div className="lg:block flex justify-center mb-2 lg:mb-0">
                <img src={Logo} alt="logo" className="w-14" />
              </div>
              <p className="font-medium text-[#00AEF0] text-xl">
                Drabsky Technology
              </p>
            </div>
          </Link>
          <hr className=" bg-blue-500" />
          <div className="">
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your detail here!</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan username anda" {...field} />
                      </FormControl>
                      <FormDescription>
                        Use the registered username
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Make sure the password you enter is correct
                      </FormDescription>
                      <FormMessage className="max-w-[300px] break-words" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-8 mt-2">{/* <ForgotPasswordForm /> */}</div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700"
              >
                {isLoading ? <Loader className="animate-spin" /> : "Submit"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
      </Card>
      <AlertDialog open={openAlert}>
        <AlertDialogContent className="border border-red-500 text-red-500">
          <AlertDialogHeader>
            <div className="flex items-start gap-2">
              <div className="p-1">
                <ExclamationTriangleIcon className="w-5 h-5" />
              </div>
              <div className="">
                <AlertDialogTitle className="text-xl">
                  {titleAlert}
                </AlertDialogTitle>
                <AlertDialogDescription className="text-red-500">
                  {descAlert}
                </AlertDialogDescription>
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setOpenAlert(false)}
              className="bg-red-500 text-xs hover:bg-red-600"
            >
              Coba Lagi
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Login;
