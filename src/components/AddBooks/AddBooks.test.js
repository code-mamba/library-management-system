import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import AddBooks from './AddBooks'
import MockAdapter from 'axios-mock-adapter/types'
import axios from 'axios'
import lmsUrl from '../../AxiosURL'

describe('<AddBooks/>',()=>{
	it('Checks the value of the title add books',()=>{
		render(<AddBooks/>)
		const titleValue = screen.getByTestId('add-books')
		
		expect(titleValue).toHaveTextContent('Add Books')

	})
	test('render book name input element',()=>{
		render(<AddBooks/>)
		const bookName = screen.getByTestId('book-name')
		expect(bookName).toBeInTheDocument();
		expect(bookName).toHaveAttribute('type','text')

	})
	test('render book name input value',()=>{
		render(<AddBooks/>)
		const bookName = screen.getByTestId('book-name')
		expect(bookName).toBeInTheDocument();
		expect(bookName).toHaveAttribute('type','text')

	})
	test('Book name input value added',()=>{
		render(<AddBooks/>)
		const bookNameInp = screen.getByTestId('book-name')
		fireEvent.change(bookNameInp,{target:{value:'h'}})
		expect(bookNameInp.value).toBe('h') 
	})

	test('render book Volume input',()=>{
		render(<AddBooks/>)
		const bookVolume = screen.getByTestId('book-volume')
		expect(bookVolume).toBeInTheDocument();
		expect(bookVolume).toHaveAttribute('type','text')
	})
	test('render Book Volume input value',()=>{
		render(<AddBooks/>)
		const bookVolumeInp = screen.getByTestId('book-volume')
		fireEvent.change(bookVolumeInp,{target:{value:'D'}})
		expect(bookVolumeInp.value).toBe('D')
	})
	test('testing author name value',()=>{
		render(<AddBooks/>)
		const AuthNameInp = screen.getByTestId('addAuthor')
		fireEvent.change(AuthNameInp,{target:{value:'h'}})
		expect(AuthNameInp.value).toBe('h')
	})
	test('testing category value',()=>{
		render(<AddBooks/>)
		const categoryInp = screen.getByTestId('addCategory')
		fireEvent.change(categoryInp,{target:{value:'q'}})
		expect(categoryInp.value).toBe('q')
	})
	test('testing year value',()=>{
		render(<AddBooks/>)
		const yearInp = screen.getByTestId('addYear')
		fireEvent.change(yearInp,{target:{value:'q'}})
		expect(yearInp.value).toBe('q')

	})
	test('testing book edition value',()=>{
		render(<AddBooks/>)
		const editionInp = screen.getByTestId('addBookEdition')
		fireEvent.change(editionInp,{target:{value:'q'}})
		expect(editionInp.value).toBe('q')

	})
	test('testing book language value',()=>{
		render(<AddBooks/>)
		const langInp = screen.getByTestId('bookLang')
		fireEvent.change(langInp,{target:{value:'q'}})
		expect(langInp.value).toBe('q')

	})
	test('testing book description value',()=>{
		render(<AddBooks/>)
		const DescInp = screen.getByTestId('addDesc')
		fireEvent.change(DescInp,{target:{value:'q'}})
		expect(DescInp.value).toBe('q')

	})
	test('testing book pages value',()=>{
		render(<AddBooks/>)
		const pageInp = screen.getByTestId('addPages')
		fireEvent.change(pageInp,{target:{value:12}})
		expect(pageInp.value).toBe("12")   
  
	})
	test('testing book quantity value',()=>{
		render(<AddBooks/>)
		const quantInp = screen.getByTestId('addQuant')
		fireEvent.change(quantInp,{target:{value:12}})
		expect(quantInp.value).toBe("12")   
  
	})
	test('testing book image value',()=>{
		render(<AddBooks/>)
		const imgInp = screen.getByTestId('addImg')
		fireEvent.change(imgInp,{target:{value:'d'}})
		expect(imgInp.value).toBe("d")   
  
	})
	test("testing form submit button",()=>{
		render(<AddBooks/>)
		const button = screen.getByTestId("addBook-btn")
		fireEvent.click(button) 
		
	})
	test('Mocking axios post',()=>{
		render(<AddBooks/>)
		var mock = new MockAdapter(lmsUrl)
		const data ={response:200}
		const book = {}
		mock.onPost(<AddBooks/>)
	}) 
}) 