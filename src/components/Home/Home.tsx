import hero from "@/assets/gifs/hero-2.webm";
import grid from "@/assets/grids/grid.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { TiPencil } from "react-icons/ti";
import Faq from "../Faq/Faq";
import { Badge } from "../ui/badge";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      {/* Hero Section */}
      <div className="mt-6 mb-12 px-4 sm:mt-10 sm:mb-16">
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
          style={{ backgroundImage: `url(${grid})` }}
        >
          <div className="w-full md:w-1/2 px-2 sm:px-4">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center md:text-left">
              Chet tilini bilish{" "}
              <span className="text-yellow-600 dark:text-yellow-500">
                darajasi imtihonlariga
              </span>{" "}
              tayyorgarlik
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 text-center md:text-left">
              Metest.uz bilan chet tilini bilish darajasi imtihonlariga
              tayyorgarlikni yangi bosqichga olib chiqing va orzu qilgan
              sertifikatingizga ega bo‘ling!
            </p>
          </div>
          <div className="w-full md:w-1/2 px-2 sm:px-4">
            <video
              className="w-full max-w-md mx-auto rounded-lg"
              autoPlay
              loop
              muted
            >
              <source src={hero} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Preparation Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="text-center md:text-left">
          <Badge className="p-2 text-sm mb-4">O'ZINGIZGA MOS JOYDA</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex flex-col md:flex-row gap-2 md:gap-3 items-center justify-center md:justify-start">
            O'zingizga qulay vaqtda{" "}
            <MdQuiz className="text-yellow-600 dark:text-yellow-500 text-3xl md:text-4xl" />{" "}
            tayyorlaning
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-3 max-w-3xl mx-auto md:mx-0">
            Bu sinov imtihonlari sizning bilimingizni mustahkamlash va yangi
            narsalarni o'rganishingizga yordam beradi. Har kuni ma'lum bir
            vaqtni ajratib, sinov imtihonlarini ishlashni odat qiling.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-6 sm:mt-10">
          {/* Speaking Card */}
          <Card
            style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
          >
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                GAPIRISH BO‘LIMI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-sm sm:text-base">
                  Og‘zaki nutq bo‘limining maqsadi nomzodning fikrini chet
                  tilida og‘zaki tarzda to‘g‘ri va ravon ifodalay olish
                  qobiliyatini tekshirishdir. Ushbu bo‘lim uchun ajratilgan vaqt
                  15 daqiqani tashkil etadi.
                </p>
                <CiMicrophoneOn className="text-yellow-600 dark:text-yellow-500 text-5xl sm:text-6xl md:text-8xl opacity-50 flex-shrink-0" />
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm">Metest.uz</p>
            </CardFooter>
          </Card>

          {/* Writing Card */}
          <Card
            style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
          >
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                YOZISH BO‘LIMI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-sm sm:text-base">
                  Yozma nutq bo‘limining maqsadi nomzodning fikrini chet tilida
                  yozma ravishda to‘g‘ri va ravon ifodalay olish qobiliyatini
                  tekshirishdir. Ushbu bo‘lim ikkita topshiriqdan iborat bo‘lib,
                  ajratilgan vaqt javob varaqasini to‘ldirish bilan birga 60
                  daqiqani tashkil etadi.
                </p>
                <TiPencil className="text-yellow-600 dark:text-yellow-500 text-5xl sm:text-6xl md:text-8xl opacity-50 flex-shrink-0" />
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm">Metest.uz</p>
            </CardFooter>
          </Card>

          {/* Reading Card */}
          <Card
            style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
          >
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                O‘QISH BO‘LIMI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base">
                Ushbu bo‘limning maqsadi ommabop, ilmiy-ommabop hamda ilmiy
                matnlarning umumiy mazmunini, ulardagi asosiy fikrlar va
                detallarni tushunishni, aniq ma’lumot olish ochiq aytilmagan
                ma’lumotlarni tushunish ko‘nikmalarini tekshirishdir. Ushbu
                bo‘lim uchun ajratilgan vaqt javob varaqasini to‘ldirish bilan
                birga 60 daqiqani tashkil etadi.
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm">Metest.uz</p>
            </CardFooter>
          </Card>

          {/* Listening Card */}
          <Card
            style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
          >
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                TINGLAB TUSHUNISH BO‘LIMI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-sm sm:text-base">
                  Ushbu bo‘limning maqsadi autentik va yarim autentik
                  audiomatnlarning umumiy mazmunini, ulardagi asosiy fikrlar va
                  detallarni tushunishni, aniq ma’lumot olish, ochiq aytilmagan
                  ma’lumotlarni tushunish ko‘nikmalarini tekshirishdir...
                </p>
                <SlEarphones className="text-yellow-600 dark:text-yellow-500 text-5xl sm:text-6xl md:text-8xl opacity-50 flex-shrink-0" />
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm">Metest.uz</p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Guide Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
          Tizimdan foydalanish bo'yicha <br className="md:hidden" /> yo'riqnoma
        </h1>
        <div className="w-full aspect-video max-w-4xl mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/aLP4JPzphnY?si=HplvFt-dkfwALm4a"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex flex-col md:flex-row gap-2 md:gap-3 items-center justify-center md:justify-start">
          Ko'p uchraydigan savollar{" "}
          <FaInfoCircle className="text-yellow-600 dark:text-yellow-500 text-2xl md:text-3xl" />
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-3 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          Metest.uz Shaxsiy tavsiyalarni berishda o'quvchi uchun barchasi mavjud
        </p>
        <div className="mt-6">
          <Faq />
        </div>
      </div>
    </div>
  );
}
