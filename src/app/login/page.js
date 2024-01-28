export default function LoginPage () {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto p-4 items-center justify-center">
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="text-2xl font-light">Login to your account.</p>
            <form className="flex flex-col gap-4 w-full">
                <label className="flex flex-col gap-1">
                    <span className="text-xl font-bold">Email</span>
                    <input type="email" className="input" required/>
                </label>
                <label className="flex flex-col gap-1">
                    <span className="text-xl font-bold">Password</span>
                    <input type="password" className="input"/>
                </label>
                <div className="flex w-full flex-col sm:flex-row gap-2 required">
                    <button type="submit" className="btn-red mx-auto">Login</button>
                    <button type="submit" className="btn-white mx-auto">Sign Up</button>
                </div>
            </form>
        </div>
    )
}