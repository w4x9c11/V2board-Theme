import { FC } from 'react'

const Footer: FC = () => {
    return (
        <footer className="backdrop-blur-md bg-black/10 border-t border-white/5 mt-auto">
            <div className="container mx-auto px-6 py-3">
                <div className="text-center text-sm">
                    © 2024 便宜机场. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer