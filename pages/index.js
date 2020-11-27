import { Container, Heading } from 'theme-ui'

export default function FirstPost() {
  return (
    <Container pt="50px">
      <Heading
        as="h1"
        sx={{ fontSize: '7', textAlign: 'center', textTransform: 'uppercase' }}
      >
        <span>the</span>{' '}
        <span style={{ color: '#ec3750' }}>H</span>
        <span style={{ color: '#ff8c37' }}>a</span>
        <span style={{ color: '#f1c40f' }}>c</span>
        <span style={{ color: '#33d6a6' }}>k</span>{' '}
        <span style={{ color: '#5bc0de' }}>C</span>
        <span style={{ color: '#338eda' }}>l</span>
        <span style={{ color: '#a633d6' }}>u</span>
        <span style={{ color: '#eb54d2' }}>b</span> Sign
      </Heading>
    </Container>
  )
}
