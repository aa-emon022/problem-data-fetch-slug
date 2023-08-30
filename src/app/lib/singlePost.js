import React from "react";

export default async function singlePost(id) {
  const data = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-newest/${id}`
  );

  return data.json();
}
