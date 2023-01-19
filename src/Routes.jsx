const Routing = ()=>{
    return(
        <Routes>
              <Route path="/"element={<Login setisLoggedIn={setisLoggedIn} setisAdmin={setisAdmin}/>}></Route>
              <Route path='/add-user' element={<AddUser/>}></Route>
              {isLoggedIn&&<Route path="/add-books"element={<AddBooks/>}></Route>}
              {isLoggedIn&&<Route path="/my-books"element={<MyBooks/>}></Route>}
              {isLoggedIn&&<Route path="/home"element={<Home isAdmin={isAdmin}/>}></Route>}
              {isLoggedIn&&<Route path = '/edit-books/:id' element={<EditBook/>}></Route>}
              {isLoggedIn && <Route path='/rent-books/:id' element={<RentBook/>}></Route>}
              
              {isLoggedIn &&<Route path='/rent-list' element={<RentList/>}></Route>}
              

              
              <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    )
}