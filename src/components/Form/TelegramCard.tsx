
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTelegram } from "react-icons/fa";

const TelegramBotCard = () => {
    const telegramBotLink = "https://t.me/ymetabot?start=start";

    return (
        <div className="">
            <Card className="w-96 shadow-lg rounded-2xl bg-white">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl font-semibold text-gray-800">
                        Ro'yxatdan o'tish
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <p className="text-gray-600 text-center">
                        Ro'yxatdan o'tish uchun telegram botiga o'ting.
                    </p>
                    <Button
                        className="w-full flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => window.open(telegramBotLink, "_blank")}
                    >
                        <FaTelegram size={24} /> Telegramga O'tish
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default TelegramBotCard;
