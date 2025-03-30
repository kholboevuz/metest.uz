import tr from "@/assets/images/flag/tr.png";
import uk from "@/assets/images/flag/uk.png";
import badge1 from "@/assets/images/icons/badge1.CegM95sz.png";
import badge2 from "@/assets/images/icons/badge2.DkeRjbXw.png";
import badge3 from "@/assets/images/icons/badge3.C2_Hy4Ld.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { BsBarChart } from "react-icons/bs";
import { Link } from "react-router-dom";


import PageLoading from "../Loading/pageLoading";
import MenuNavbar from "../Partials/MenuNavbar";
import { Button } from "../ui/button";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { IsUser } from "@/types/type";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const auth = useAuthUser() as IsUser | null;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoading />
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Salom {auth?.fullname}
          </h1>
          <MenuNavbar />

          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <Card className="bg-gradient-to-l from-red-700 to-transparent dark:bg-slate-700 bg-blue-700 bg-opacity-90">
                <CardHeader>
                  <CardTitle className="mb-4 sm:mb-7">
                    <img
                      src={uk}
                      alt="uk"
                      className="w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24"
                    />
                  </CardTitle>
                  <CardDescription className="dark:text-white">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      Ingliz tili namunaviy test topshiriqlari
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base md:text-lg text-white">
                    Bu sizga eng yaxshi ko'nikmalada shug'ullanishingiz uchun
                    yordam beradi.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to={`/dashboard/mock/english`}>
                    <Button className="w-full sm:w-auto">Boshlash</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-l from-red-700 to-transparent dark:bg-slate-700 bg-white bg-opacity-90">
                <CardHeader>
                  <CardTitle className="mb-4 sm:mb-7">
                    <img
                      src={tr}
                      alt="tr"
                      className="w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24"
                    />
                  </CardTitle>
                  <CardDescription className="dark:text-white">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-white">
                      Turk tili namunaviy test topshiriqlari
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-white">
                    Bu sizga eng yaxshi ko'nikmalada shug'ullanishingiz uchun
                    yordam beradi.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to={`/dashboard/mock/turkish`}>
                    <Button className="w-full sm:w-auto">Boshlash</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <Card className="bg-gradient-to-l from-yellow-500 to-transparent dark:bg-slate-700 bg-slate-200 bg-opacity-90">
                <CardHeader>
                  <CardTitle className="mb-4 sm:mb-7">
                    <BsBarChart className="text-3xl sm:text-4xl md:text-5xl text-dark dark:text-yellow-500" />
                  </CardTitle>
                  <CardDescription className="dark:text-white">
                    <p className="text-base sm:text-lg">
                      Real-vaqt bilim tahlilchisi
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">
                    Bunda siz namunaviy imtihon va umumiy natijalaringizni ko'rib
                    borishingiz mumkin bo'ladi!
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto">Tez orada</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-5 items-center justify-between">
                      <img src={badge1} alt="badge1" className="w-10 sm:w-12" />
                      <img src={badge2} alt="badge2" className="w-10 sm:w-12" />
                      <img src={badge3} alt="badge3" className="w-10 sm:w-12" />
                    </div>
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg font-bold dark:text-white">
                    Mening bedjim: 3
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">
                    Bu bizga eng yaxshi ko'nikmalarni siz shug'ullanishingiz
                    uchun tavsiya etishga yordam beradi.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto">Batafsil</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}