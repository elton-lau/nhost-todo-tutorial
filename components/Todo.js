import styles from '../styles/Home.module.css'

export default function Todo({ loading, error, data }) {
  if (loading) return <p>Loading...</p>
  if (error) console.error(error)

  return (
    <div className={styles.grid}>
      {data.todo.map(todo => {
        return (<a href="https://nextjs.org/docs" className={styles.card} key={todo.id}>
          <h2>{todo.title} &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>)
      })}
    </div>
  )
}
