import ChatForm from '@/components/chat-form'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Chat = () => (
    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto w-full">
        <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
            <div className='flex-shrink-0 flex flex-col relative items-end'>
                <Skeleton className="h-12 w-12 rounded-full" />
            </div>
            <div className='relative flex w-full flex-col'>
                <Skeleton className="h-4 w-[25%] mb-2" />
                <div className="flex-1 space-y-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[50%]" />
                </div>
            </div>
        </div>
    </div>
)

export default function loading() {
    return (
        <div className="w-full h-full flex flex-col items-center gap-2 overflow-hidden">
            <div className="flex flex-1 w-full overflow-auto scrollbar">
                <div className="flex flex-1 w-full p-2">
                    <div className="flex flex-col pb-9 text-sm w-full">
                        <Chat />
                        <Chat />
                    </div>
                </div>
            </div>
            <ChatForm />
        </div>
    )
}
