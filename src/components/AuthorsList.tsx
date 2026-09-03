import React, { useState, useEffect } from 'react'
import type { CollectionEntry } from 'astro:content'
import AuthorCardExpanded from './AuthorCardExpanded'

interface AuthorsListProps {
  authors: Array<{
    id: string
    data: CollectionEntry<'authors'>['data']
  }>
}

export default function AuthorsList({ authors }: AuthorsListProps) {
  const [randomizedAuthors, setRandomizedAuthors] = useState(authors)

  useEffect(() => {
    // Randomize on client side after mount
    const shuffled = [...authors].sort(() => Math.random() - 0.5)
    setRandomizedAuthors(shuffled)
  }, [])

  return (
    <ul className="flex flex-col gap-4">
      {randomizedAuthors.map((author) => (
        <li key={author.id}>
          <AuthorCardExpanded
            name={author.data.name}
            pronouns={author.data.pronouns}
            quote={author.data.quote}
            bio={author.data.bio}
            avatar={author.data.avatar}
            href={`/authors/${author.id}`}
            isAuthorPage={false}
          />
        </li>
      ))}
    </ul>
  )
}