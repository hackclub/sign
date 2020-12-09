import useSWR from 'swr'

const fetcher = () => fetch('http://localhost:3000/api').then(r => r.json())

export default function Sign() {

  const { data, error } = useSWR('/api', fetcher, {
    refreshInterval: 1000
  })

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: data.color1 }}>
      <h1>hi</h1>
    </div>
  )
}
