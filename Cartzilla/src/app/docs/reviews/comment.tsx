'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Comment from '@/components/reviews/comment'

const CommentDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import Comment from '@/components/reviews/comment'

export default function CommentDemo() {
  const [likeCount, setLikeCount] = useState(6)
  const [userLike, setUserLike] = useState(false)

  const handleLike = () => {
    if (userLike) {
      setLikeCount(likeCount - 1)
      setUserLike(false)
    } else {
      setLikeCount(likeCount + 1)
      setUserLike(true)
    }
  }

  return (
    <Comment
      author={{
        avatar: '/img/shop/marketplace/single/comments/02.jpg',
        name: 'Daniel Adams',
      }}
      date="August 15, 2025"
      likeButton={{
        count: likeCount,
        active: userLike,
        // label: '' // default "Like" aria-label can be altered
        // className: '', // optionally apply extra CSS class to "Like" button
        onClick: handleLike,
      }}
      replyButton={{
        // label: '' // default "Reply" aria-label can be altered
        // className: '', // optionally apply extra CSS class to "Reply" button
        onClick: () => console.log('Reply button is clicked!'),
      }}
    >
      I&apos;ve used a lot of mockups, but these are some of the best. The variety of angles and perspectives really
      helped me showcase my app from different viewpoints. Plus, the customizable backgrounds are a fantastic
      feature — I could easily match the mockups to my brand colors. A must-have for designers!
    </Comment>
  )
}`

  const [likeCount, setLikeCount] = useState(6)
  const [userLike, setUserLike] = useState(false)

  const handleLike = () => {
    if (userLike) {
      setLikeCount(likeCount - 1)
      setUserLike(false)
    } else {
      setLikeCount(likeCount + 1)
      setUserLike(true)
    }
  }

  return (
    <section id="comment" className="docs-section pb-sm-2 mb-5">
      <h4>Comment</h4>
      <DocsComponentDemo code={code}>
        <Comment
          author={{
            avatar: '/img/shop/marketplace/single/comments/02.jpg',
            name: 'Daniel Adams',
          }}
          date="August 15, 2025"
          likeButton={{
            count: likeCount,
            active: userLike,
            onClick: handleLike,
          }}
          replyButton={{
            onClick: () => console.log('Reply button is clicked!'),
          }}
        >
          I&apos;ve used a lot of mockups, but these are some of the best. The variety of angles and perspectives really
          helped me showcase my app from different viewpoints. Plus, the customizable backgrounds are a fantastic
          feature — I could easily match the mockups to my brand colors. A must-have for designers!
        </Comment>
      </DocsComponentDemo>
    </section>
  )
}

export default CommentDemo
