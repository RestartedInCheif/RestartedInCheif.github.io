import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface AuthorCardExpandedProps {
  name: string
  pronouns?: string
  quote?: string
  bio?: string
  avatar: string
  href: string
  isAuthorPage: boolean
}

export default function AuthorCardExpanded({
  name,
  pronouns,
  quote,
  bio,
  avatar,
  href,
  isAuthorPage,
}: AuthorCardExpandedProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLongBio = bio && bio.length > 200

  const handleClick = (e: React.MouseEvent) => {
    if (!isAuthorPage) {
      window.location.href = href
    }
  }

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }

  const displayBio = isLongBio && !isExpanded ? bio.slice(0, 200) + '...' : bio

  return (
    <div
      onClick={handleClick}
      className={cn(
        'hover:bg-secondary/50 overflow-hidden rounded-xl border p-4 transition-colors duration-300 ease-in-out',
        !isAuthorPage && 'cursor-pointer'
      )}
    >
      <div className="flex gap-4">
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className={cn(
            'size-32 rounded-md object-cover flex-shrink-0',
            !isAuthorPage &&
              'hover:ring-primary transition-shadow duration-300 hover:ring-2'
          )}
        />
        <div className="flex flex-col gap-y-2 min-w-0">
          <div>
            <div className="flex flex-wrap items-center gap-x-2">
              <h3 className="text-lg font-medium">{name}</h3>
              {pronouns && (
                <span className="text-muted-foreground text-sm">
                  ({pronouns})
                </span>
              )}
            </div>
            {quote && (
              <p className="text-foreground text-sm italic mt-1">"{quote}"</p>
            )}
            <div className="text-sm mt-2">
              <span className="font-medium text-foreground">PROFILE:</span>{' '}
              <span className="text-muted-foreground">{displayBio}</span>
              {isLongBio && (
                <button
                  onClick={handleExpandClick}
                  className="ml-2 text-primary hover:underline text-sm"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}