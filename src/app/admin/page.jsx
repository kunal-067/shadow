'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
toast
import axios from "axios"
import { toast } from "sonner"
import { SavedUserTable } from "@/components/admin/UserTables"
import { useForm } from "react-hook-form"


export default function SavedUsers() {
     const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm({
        defaultValues: {
            bankName: "",
            accountNumber: "",
            ifsc: "",
            branchName: "",
        },
    });
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/account-info");
            const result = await res.json();
            
            if (result?.accountInfo) {
                // reset will overwrite the form values
                reset({
                    ...result.accountInfo
                });
            }
        }
        fetchData();
    }, [reset]);
    const onSubmit = async (formData) => {
        try {
            const { data } = await axios.post('/api/account-info', formData);
            toast({
                title: data.message
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: error.response?.data?.message || 'error try again'
            });
        }
    };

    const [data, setData] = useState([]);
    const [pendingData, setPendingData] = useState([]);
    useEffect(() => {
        let user = { data: { role: 'User' } };
        let Lusr = localStorage.getItem('user')
        // console.log(Lusr)
        if (Lusr && Lusr != 'undefined') {
            user = JSON.parse(localStorage.getItem('user'));
        }
        if (user.data.role !== 'Admin') {
            return window.location.href = '/login'
        }
        axios.get('/api/allApplications').then(res => {
            setData(res.data.data)
        }).catch(err => {
            console.log(err);
            toast('Please refreach page !')
        })
        axios.get('/api/applications').then(res => {
            setPendingData(res.data.data)
        }).catch(err => {
            console.log(err);
            toast('Please refreach page !')
        })
    }, [])
    return (
        <>

        <div className="flex flex-wrap gap-2">
                <input className="border p-1 rounded-md min-w-[200px]" {...register('accountNumber')} placeholder="account no." type="text" />
                <input className="border p-1 rounded-md min-w-[200px]" {...register('ifc')} type="text" placeholder="ifc" />
                <input className="border p-1 rounded-md min-w-[200px]" {...register('bankName')} type="text" placeholder="bank name" />
                <input className="border p-1 rounded-md min-w-[200px]" {...register('branchName')} type="text" placeholder="branch name" />
                <button onClick={handleSubmit(onSubmit)} className={`py-1 px-6 ml-6 rounded-sm text-sm font-medium text-white ${isSubmitting?'bg-gray-600':'bg-black'}`}>Save</button>
            </div>

            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="pending"  onClick={()=>{location.href='/admin/pending'}}>Pending</TabsTrigger>
                        <TabsTrigger value="saved">Saved</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="all">
                    <SavedUserTable products={data} />
                </TabsContent>
                <TabsContent value="pending">

                </TabsContent>
            </Tabs>
        </>
    )
}

