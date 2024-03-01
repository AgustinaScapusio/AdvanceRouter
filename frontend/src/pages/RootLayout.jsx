import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
export default function RootLayout() {
    // const navigation = useNavigate();


    return (
        <div>
        <MainNavigation />
        <main>
            {/* {navigation.state === 'loading' &&<p>
                Loading...
            </p>} */}
        <Outlet />
        </main>
        </div>
    );
    }