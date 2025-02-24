import * as React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Loader from './components/Loader.tsx'

const Help = React.lazy(() => import('./pages/Help'))
const Plans = React.lazy(() => import('./pages/Plans'))
const UserDashboard = React.lazy(() => import('./pages/UserDashboard'))
const OrderAndInvite = React.lazy(() => import('./pages/OrderAndInvite'))
const NotFound = React.lazy(() => import('./components/NotFound'))
const Home = React.lazy(() => import('./pages/Home'))

const App: React.FC = () => {
    const [loading, setLoading] = useState(true)

    const handleLoadComplete = () => {
        setLoading(false)
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow relative pt-16">
                <Suspense fallback={null}>
                    {loading ? (
                        <Loader onLoadComplete={handleLoadComplete} />
                    ) : (
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/dashboard" element={<UserDashboard />} />
                            <Route path="/plans" element={<Plans />} />
                            <Route path="/help" element={<Help />} />
                            <Route path="/order" element={<OrderAndInvite />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    )}
                </Suspense>
            </main>
            <Footer />
        </div>
    )
}

export default App 