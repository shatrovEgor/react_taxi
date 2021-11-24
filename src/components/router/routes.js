import LoginPage from "../../pages/LoginPage"
import ProfilePage from "../../pages/ProfilePage"
import MapPage from "../../pages/MapPage"

export const privateRoutes = [
    {path: '/', element: <LoginPage />, id: 1},
    {path: 'profile', element: <ProfilePage />, id: 2},
    {path: 'map', element: <MapPage />, id: 3},
    {path: '*', element: <LoginPage />, id: 4},
]

export const publicRoutes = [
    {path: '/', element: <LoginPage />, id: 1},
    {path: '*', element: <LoginPage />, id: 2},
]