import reactLogo from './assets/react.svg'


export default function WelcomeBack() {
    return (
        <div className='welcome-back-container'>
            <div className='header-welcome-back'>
                <img id='reactlogo' src={reactLogo} />
                Budwriter
            </div>
            <div className='main-container'>
                <div className='main-welcome'>
                    <span className='welcome-title'>Welcome Back!</span>
                    <span className='second-title'>To keep sharing your work with us,please log in</span>
                </div>
                <div className='sign-in'>
                    Sign In
                </div>
            </div>
        </div>
    )
}