import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { List } from './List'
import { Create } from './Create'
import { Read } from './Read'
import { Update } from './Update'
import { Menu } from './Menu'

const App=()=>{
    return(
        <>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route exact path="/view" element={<List/>} />
                    <Route exact path="/fresh" element={<Create/>} />
                    <Route exact path="/open" element={<Read/>} />
                    <Route exact path="/modify" element={<Update/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;