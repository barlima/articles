import React from 'react'
import { useArticlesFetch } from '../../hooks'

export const Articles: React.FC = () => {
  const { loading, articles } = useArticlesFetch('fashion')

  console.log(articles)

  return (
    <div>

    </div>
  )
}