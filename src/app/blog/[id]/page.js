import React from 'react'
import blogPost from '@/app/lib/singlePost'
async function page({params}) {
    const id=params.slug;
    const post =await blogPost(id);

  return (
    <>
         {
    post.map((items,index)=>(
        <div key={index}>
        <p>{items.title}</p>
        <p>{items.img}</p>
        <p>{items.short}</p>
        <p>{items.category_id}</p>

        </div>
    ))
   }
    </>
  
  )
}

export default page