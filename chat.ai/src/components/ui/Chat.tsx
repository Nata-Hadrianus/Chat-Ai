'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Button } from "./button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"
import { Input } from "./input"
import  { useChat } from 'ai/react'


export  function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
    
        <Card className="w-[450px] h-[700px] grid grid-rows-[min-content_1fr_min-content] ">
          <CardHeader>
            <CardTitle>Chat Ai</CardTitle>
            <CardDescription>Using vercel SDK to create but chat</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
             <div className="flex gap-3 text-primary-600 text-sm">
                 <Avatar>
                  <AvatarFallback>NH</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/95093095?v=4"></AvatarImage>
                 </Avatar>
                 <p className="leading-relaxed">
                     <span className="block font-bold text-muted-foreground">Humano</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae alias corrupti error a quae esse dolorum necessitatibus eveniet ipsa fugit? 
                    Enim, optio minima ad eos excepturi consequatur distinctio in quibusdam.
                 </p>
             </div>

             <div className="flex gap-3 text-primary-600 text-sm">
             <Avatar>
                  <AvatarFallback>NH</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/133774696?s=48&v=4"></AvatarImage>
                 </Avatar>
                 <p className="leading-relaxed">
                     <span className="block font-bold text-muted-foreground">Chat</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae alias corrupti error a quae esse dolorum necessitatibus eveniet ipsa fugit? 
                    Enim, optio minima ad eos excepturi consequatur distinctio in quibusdam.
                 </p>
             </div>

          </CardContent>
          <CardFooter >
            <form className="w-full flex gap-2" onSubmit={handleSubmit}>
             <Input placeholder="Faça aqui suas questões" value={input} onChange={handleInputChange}/>
             <Button type="submit">Send</Button>
             </form>
          </CardFooter>
        </Card>

    )
}