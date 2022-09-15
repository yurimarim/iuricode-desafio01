import React from 'react'
import { postsMock } from '../../mock/postsMock'

export function FeedPostsCard() {
  return(
    <div>
      {
        postsMock.map((item) => (
          <div key={item.id}>
            <h1>{item.date}</h1>
            <h1>{item.postTitle}</h1>
            <h1>{item.content}</h1>
            <h1><br></br></h1>
          </div>
        ))
      }
    </div>
  )
}