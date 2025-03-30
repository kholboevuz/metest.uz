import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMask } from "@react-input/mask";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schema/auth-schema";

import { axiosClient } from "@/http/axios";
import { toast } from "../ui/use-toast";
import { IsUser } from "@/types/type";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const signIn = useSignIn<IsUser>();


  const phoneInputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      const formattedPhone = values.phone.replace(/[^\d+]/g, "");

      const response = await axiosClient.post("/metest/login", {
        phonenumber: formattedPhone,
        password: values.password,
      });

      if (response.data.status) {

        const success = signIn({
          auth: {
            token: response.data.token,
            type: "Bearer"
          },
          userState: response.data.data
        });
        if (success) {
          localStorage.setItem("login_time", Date.now().toString());
          window.location.href = "/dashboard";
        }
        if (!success) {
          throw new Error("Authentication failed");
        }
      } else {
        toast({
          variant: "destructive",
          title: "Login yoki parol xato ",
          description: "Iltimos, tekshirib qaytadan urinib ko'ring",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error Occurred",
        description: `Error message: ${error}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+998 (__) ___-__-__"
                    {...field}
                    ref={phoneInputRef}
                    disabled={isLoading}
                  />
                </FormControl>
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
                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <ImSpinner2 className="animate-spin h-5 w-5" />
            ) : "Kirish"}
          </Button>
        </form>
      </Form>
    </div>
  );
}