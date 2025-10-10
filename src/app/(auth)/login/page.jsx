'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'


function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [submiting, setSubmiting] = useState(false)

    function submit() {
        if (!id || !password) {
            toast('Invalid attempt ! please fill the form correctly')
        }

        setSubmiting(true)
        axios.post('/api/login', { id, password }).then(res => {
            toast(res.data?.message)
            setSubmiting(false);
            localStorage.setItem('user', JSON.stringify(res.data))
            // console.log(res,res.data, res.data.data.role)
            if (res.data.data.role == 'Admin') {
                window.location.href = '/admin'
            } else {
                window.location.href = '/profile'
            }
        }).catch(err => {
            console.log(err);
            toast(err.response?.message || err.message)
            setSubmiting(false)
        })
    }
    return (
        <div className='w-full py-8 md:py-20 flex flex-wrap gap-16 justify-evenly items-center '>
            <div className='shadow-sm bg-white p-4 sm:p-10 rounded-xl w-full sm:w-[498px] '>
                <p className='opacity-50 text-[14px] font-[400] text-center'>Welcome back !!</p>
                <h2 className='text-[40px] text-center font-bold mb-4'>Sign In</h2>

                <div className='flex flex-col w-full gap-4'>
                    <div>
                        <Label>User Id</Label>
                        <Input value={id} onChange={e => setId(e.target.value)} className='rounded-none text-black mt-2 border-0 bg-green-100' placeholder='Enter your User Id' />
                    </div>
                    <div>
                        <Label>Password</Label>
                        <Input value={password} onChange={e => setPassword(e.target.value)} className='rounded-none text-black mt-2 border-0 bg-green-100' placeholder='Enter your password' type='password' />
                    </div>
                </div>

                <div className='flex flex-col w-full justify-center items-center gap-4 mt-6 mb-6'>
                    <Button onClick={submit} className={`w-full h-12 text-[16px] bg-yellow-300 hover:bg-yellow-600 align-middle py-2 text-black  font-medium`}>
                        {submiting ? '...' : <>Sign In <ArrowRight className='ml-4 mt-1 size-5 ' /></>}
                    </Button>
                </div>
                <div className=' font-sans'>
                    <div className='border-[1px] border-gray-200 mb-4 w-40'></div>
                    <h2 className='text-[15px] font-medium'>Can't Find Your confirmation Details?</h2>
                    <p className='text-[13px] opacity-40'>For your account password contact your support team.</p>
                </div>
            </div>

            <img src="/track-01.webp" alt="" className='md:h-[450px] md:w-[400px] lg:w-auto' />
        </div>

    )
}

export default Login