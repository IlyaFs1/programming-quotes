import React from 'react'
import translate from '../shared/translate'
import Quotes from '../components/main/Quotes'

const Home = ({ language, allQuotes, phrase, password }) => {
  const filtered = allQuotes
    .filter(quote => quote[language] && quote[language].toLowerCase().includes(phrase.toLowerCase()))

  return (
    <main>
      <h1>{translate('PROGRAMMING_QUOTES')}</h1>
      {phrase && <small>{translate('SHOWING_RESULTS')} "{phrase}":</small>}
      <Quotes language={language} loaded={allQuotes.length} currentQuotes={filtered} password={password} />
    </main>
  )
}

export default Home