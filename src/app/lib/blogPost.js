import React from 'react'

 export default async function page() {

    const data=await fetch("https://basic-blog.teamrabbil.com/api/post-newest")
    const json=await data.json()
  return json
}
