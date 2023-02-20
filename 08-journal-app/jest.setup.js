import 'whatwg-fetch'
import 'setimmediate'
import { getEnvironments } from './src/helpes/getEnvironments'

require('dotenv').config({
    path:'.env.test'
})

jest.mock('./src/helpes/getEnvironments', ()=>({
    getEnvironments: () => ({...process.env})
}))