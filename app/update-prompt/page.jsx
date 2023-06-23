"use client"

import Form from "@components/Form"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const UpdatePrompt = () => {
    const router = useRouter()
    // const {data: session} = useSession()
    const searchParams = useSearchParams()
    const promptId = searchParams.get("id")
    const [submitting, setIsSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: "",
        tag:"",
    })

    useEffect(() => {
      const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json()

        setPost({
            prompt: data.prompt,
            tag: data.tag,
        })
      }
      if(promptId) getPromptDetails()
    }, [promptId])
    

    const UpdatePrompt = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        if(!promptId) return alert("Missing PromptId!")

        try {
          const response = await fetch(`/api/prompt/${promptId}`, 
          {
            method: 'PATCH',
            body: JSON.stringify({
              prompt: post.prompt,
              tag: post.tag
            })
          })
          if(response.ok){
            router.push("/")
          }
        } catch (error) {
          console.log(error)
        }finally{
          setIsSubmitting(false)
        }
    }

  return (
    <Form 
      type="Edit"
      post={post}
      setPost={setPost}
      Submitting={submitting}
      handleSubmit={UpdatePrompt}
    />
  )
}

export default UpdatePrompt
