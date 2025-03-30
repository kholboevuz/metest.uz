
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { axiosClient } from "@/http/axios";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { IsUser } from "@/types/type";
import { FaSpinner } from "react-icons/fa";


interface PaymentData {
    phonenumber: string;

    provayder: string;
    amount: number;
}
export default function PaymentHistory() {
    const [paymentData, setPaymentData] = React.useState<PaymentData[]>([]);
    const [loading, setLoading] = React.useState(true);
    const auth = useAuthUser() as IsUser | null;
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await axiosClient.post("/get-user-payment-history", {
                phonenumber: auth?.phonenumber
            });
            if (res.data.status) {
                setLoading(false);
                setPaymentData(res.data.data);
            }
            setLoading(false);
        };
        fetchData();
    }, [auth]);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Hisobni to'ldirish tarixi</CardTitle>

            </CardHeader>
            <CardContent className="max-h-[400px] overflow-y-auto">
                {loading ? (
                    <div className="flex flex-col items-center gap-2 ">
                        <FaSpinner className="animate-spin text-4xl sm:text-5xl text-slate-500" />
                        <p className="text-sm sm:text-base text-gray-500">
                            Hisobni to'ldirish tarixi yuklanmoqda
                        </p>
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Telefon raqam</TableHead>
                                <TableHead>Holati</TableHead>
                                <TableHead>To'lov turi</TableHead>
                                <TableHead className="text-right">Qiymat</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paymentData.length > 0 ? (
                                paymentData.map((payment, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">
                                            {payment.phonenumber}
                                        </TableCell>
                                        <TableCell>To'langan</TableCell>
                                        <TableCell>{payment.provayder}</TableCell>
                                        <TableCell className="text-right">
                                            {payment.amount} so'm
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">
                                        Ma'lumot mavjud emas
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
}
