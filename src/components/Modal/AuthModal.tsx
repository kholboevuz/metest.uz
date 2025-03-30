import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useAuthStore } from "@/hook";

import { Button } from "../ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

import LoginForm from "../Form/LoginForm";

import TelegramBotCard from "../Form/TelegramCard";

export default function AuthModal() {
  const { isPage } = useAuthStore();

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-lg bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            Kirish
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ytest.uz security ©</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex  ">
              <Button
                className="w-full rounded-none"
                variant={isPage == 1 ? "default" : "outline"}
                onClick={() => useAuthStore.setState({ isPage: 1 })}
              >
                Kirish
              </Button>
              <Button
                className="w-full rounded-none"
                variant={isPage == 2 ? "default" : "outline"}
                onClick={() => useAuthStore.setState({ isPage: 2 })}
              >
                Ro'yxatdan o'tish
              </Button>
            </div>
            {isPage == 1 && <LoginForm />}
            {isPage == 2 && <TelegramBotCard />}

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
