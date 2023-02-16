import{render} from '@testing-library/react'
import '@testing-library/jest-dom'
import UnableToFetch from './unableToFetch'
describe('checks the unable to fetch component',()=>{
	it('Checks the value of the unable to fetch component',()=>{
		const{getByText}= render(<UnableToFetch/>) 
		const titleValue = getByText('Unable To Fetch The Data')
		expect(titleValue).toHaveTextContent('Unable To Fetch The Data') 
	

	})
	
})