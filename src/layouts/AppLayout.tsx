import { Outlet } from "react-router-dom"


const AppLayout = () => {
  return (
    <div className="app-layout">
        <header>header</header>
        <main>
            <Outlet />
        </main>
        <footer>footer</footer>
    </div>
  )
}

export default AppLayout