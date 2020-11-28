import { Container, Text, Card, Heading, Badge, Grid, Box } from 'theme-ui'
import { useState } from 'react'

export default function Home() {
  let [colourOne, setColourOne] = useState('#ec3750')
  let [colourTwo, setColourTwo] = useState('#ff8c37')
  let [order, setOrder] = useState('to right')
  const CircleButton = ({ circleColour, marginLeft, type }) => (
    <span
      onClick={() =>
        type == 1 ? setColourOne(circleColour) : setColourTwo(circleColour)
      }
      style={{
        height: '36px',
        width: '36px',
        backgroundColor: circleColour,
        color: circleColour,
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '12px',
        marginLeft,
        fontSize: '20px',
        padding: '4px',
        cursor: 'pointer'
      }}
    >
      {'.'}
    </span>
  )
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
              <CircleButton circleColour="#ec3750" marginLeft="0px" type={1} />
              <CircleButton circleColour="#ff8c37" type={1} />
              <CircleButton circleColour="#f1c40f" type={1} />
              <CircleButton circleColour="#33d6a6" type={1} />
              <CircleButton circleColour="#5bc0de" type={1} />
              <CircleButton circleColour="#338eda" type={1} />
              <CircleButton circleColour="#a633d6" type={1} />
              <CircleButton circleColour="#eb54d2" type={1} />
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
              <CircleButton circleColour="#ec3750" marginLeft="0px" type={2} />
              <CircleButton circleColour="#ff8c37" type={2} />
              <CircleButton circleColour="#f1c40f" type={2} />
              <CircleButton circleColour="#33d6a6" type={2} />
              <CircleButton circleColour="#5bc0de" type={2} />
              <CircleButton circleColour="#338eda" type={2} />
              <CircleButton circleColour="#a633d6" type={2} />
              <CircleButton circleColour="#eb54d2" type={2} />
            </Card>
            <Card
              bg="sheet"
              sx={{
                fontSize: '4',
                letterSpacing: '9.5px',
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
                  paddingLeft: '5px',
                  paddingRight: '0px'
                }}
              >
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOrder('to top')}
                >
                  ⬆️{' '}
                </span>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOrder('to bottom')}
                >
                  ⬇️{' '}
                </span>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOrder('to right')}
                >
                  ➡️{' '}
                </span>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOrder('to left')}
                >
                  ⬅️{' '}
                </span>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOrder('to bottom right')}
                >
                  ↘️{' '}
                </span>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOrder('to bottom left')}
                >
                  ↙️{' '}
                </span>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOrder('to top left')}
                >
                  ↖️{' '}
                </span>
                <span
                  onClick={() => setOrder('to top right')}
                  style={{ letterSpacing: 'normal', cursor: 'pointer' }}
                >
                  ↗️
                </span>
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
          sx={{
            pt: '70%',
            ml: '15%',
            width: '70%',
            borderRadius: '12px',
            position: 'relative',
            backgroundImage: `linear-gradient(${order}, ${colourOne} , ${colourTwo})`
          }}
        >
          <h1
            style={{
              position: 'absolute',
              top: '0',
              width: '100%',
              textAlign: 'center',
              fontSize: '400px',
              marginBlockStart: '-0.25em'
            }}
          >
            h
          </h1>
        </Box>
      </Grid>
    </Container>
  )
}
