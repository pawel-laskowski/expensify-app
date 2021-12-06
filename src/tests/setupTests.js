import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import DotEnv from 'dotenv'

Enzyme.configure({
  adapter: new Adapter()
})

DotEnv.config({ path: '.env.test' })