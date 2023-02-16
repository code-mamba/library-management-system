import{render} from '@testing-library/react'
import '@testing-library/jest-dom'
import PageNotFound from './404'
describe('checks the pagenotfound component',()=>{
	it('Checks the value of the Page not found component',()=>{
		const{getByText}= render(<PageNotFound/>) 
		const titleValue = getByText('Page Not Found')
		// expect(titleValue).toBe('Page Not Found')
		expect(titleValue).toHaveTextContent('Page Not Found') 
	

	})
	
})   