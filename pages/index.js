import { Container, Text, Card, Heading, Badge, Grid, Box } from 'theme-ui'

const CircleButton = ({ circleColor, marginLeft }) => (
  <span
    style={{
      height: '36px',
      width: '36px',
      backgroundColor: circleColor,
      color: circleColor,
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: '12px',
      marginLeft,
      fontSize: '20px',
      padding: '4px'
    }}
  >
    {'.'}
  </span>
)

export default function FirstPost() {
  return (
    <Container pt="50px">
      <Heading
        as="h1"
        sx={{
          fontSize: '7',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#8492a6',
          borderBottom: '5px solid var(--theme-ui-colors-elevated,#252429)'
        }}
      >
        <span style={{ display: 'inline-block', paddingBottom: '2px' }}>
          <span>the</span> <span style={{ color: '#ec3750' }}>H</span>
          <span style={{ color: '#ff8c37' }}>a</span>
          <span style={{ color: '#f1c40f' }}>c</span>
          <span style={{ color: '#33d6a6' }}>k</span>{' '}
          <span style={{ color: '#5bc0de' }}>C</span>
          <span style={{ color: '#338eda' }}>l</span>
          <span style={{ color: '#a633d6' }}>u</span>
          <span style={{ color: '#eb54d2' }}>b</span> Sign
        </span>
      </Heading>
      <Grid columns={[1, 1, 2]} sx={{ mt: '4' }}>
        <Box>
          <Card bg="sheet" p="3" sx={{ display: 'none' }}>
            At our headquarters and in Hack Clubbers homes around the world, we
            have Hack Clubs signs hang up. All of the sign colours are
            synchronized and you can change them for yourself here.
          </Card>
          <Grid columns={[1]}>
            <Card bg="sheet" p="3">
              <span
                style={{
                  height: '36px',
                  padding: '4px',
                  width: '100.09px',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  display: 'inline-block',
                  marginRight: '24px',
                  color: 'black',
                  fontSize: '20px',
                  paddingLeft: '12px',
                  paddingRight: '12px'
                }}
              >
                Colour 1
              </span>
              <CircleButton circleColor="#ec3750" marginLeft="0px" />
              <CircleButton circleColor="#ff8c37" />
              <CircleButton circleColor="#f1c40f" />
              <CircleButton circleColor="#33d6a6" />
              <CircleButton circleColor="#5bc0de" />
              <CircleButton circleColor="#338eda" />
              <CircleButton circleColor="#a633d6" />
              <CircleButton circleColor="#eb54d2" />
            </Card>
            <Card bg="sheet" p="3">
              <span
                style={{
                  height: '36px',
                  padding: '4px',
                  width: '100.09px',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  display: 'inline-block',
                  marginRight: '24px',
                  color: 'black',
                  fontSize: '20px',
                  paddingLeft: '12px',
                  paddingRight: '12px'
                }}
              >
                Colour 2
              </span>
              <CircleButton circleColor="#ec3750" marginLeft="0px" />
              <CircleButton circleColor="#ff8c37" />
              <CircleButton circleColor="#f1c40f" />
              <CircleButton circleColor="#33d6a6" />
              <CircleButton circleColor="#5bc0de" />
              <CircleButton circleColor="#338eda" />
              <CircleButton circleColor="#a633d6" />
              <CircleButton circleColor="#eb54d2" />
            </Card>
            <Card
              bg="sheet"
              sx={{
                fontSize: '4',
                letterSpacing: '10px',
                padding: '3',
                paddingTop: '28px!important'
              }}
            >
              <span
                style={{
                  height: '36px',
                  padding: '4px',
                  width: '100.09px',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  display: 'inline-block',
                  marginRight: '24px',
                  color: 'black',
                  fontSize: '20px',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  letterSpacing: 'normal'
                }}
              >
                Direction
              </span>
              <span
                style={{
                  height: '36px',
                  padding: '4px',
                  textAlign: 'center',
                  borderRadius: '12px',
                  display: 'inline-block',
                  color: 'black',
                  fontSize: '20px',
                  paddingLeft: '6px',
                  paddingRight: '0px'
                }}
              >
                <span>⬆️ </span>
                <span>⬇️ </span>
                <span>➡️ </span>
                <span>⬅️ </span>
                <span>↘️ </span>
                <span>↙️ </span>
                <span>↖️ </span>
                <span style={{ letterSpacing: 'normal' }}>↗️</span>
              </span>
              <span
                style={{
                  display: 'inline-block',
                  height: '36px',
                  paddingTop: '6px'
                }}
              ></span>
            </Card>
          </Grid>
        </Box>
        <Box
          bg="green"
          sx={{ pt: '70%', ml: '15%', width: '70%', borderRadius: '12px' }}
        ></Box>
      </Grid>
    </Container>
  )
}
