type BookProps = {
  id: number
  title: string
  //Legge til bilde? etterhvert
}

type PresentationArticleProps = {
  name: string
  presentation: string
  books: BookProps[] 
}

export default function PresentationArticle({
  name,
  presentation,
  books,
}: PresentationArticleProps) {
  return (
    <>
      <h1>{name}</h1>
      <p>{presentation}</p>
      <h2>Bøker av {name}</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </>
  )
}
