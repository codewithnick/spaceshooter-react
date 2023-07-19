import { Container } from '@mui/material'
import './App.css'
import MeteorBig from './MeteorBig'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import MeteorSmall from './MeteorSmall'
function App() {
  return (
    <>
    <RecoilRoot>
      <div className="background"></div>
      <div className='Spaceship'></div>
      <Container>
        <MeteorBig />
        <MeteorSmall />
      </Container>
    </RecoilRoot>
    </>
  )
}

export default App;

const meteors = atom({
  key: 'meteors',
  default:[]
});