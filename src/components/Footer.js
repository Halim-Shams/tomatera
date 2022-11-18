import './Footer.css'

export default function Footer() {
    return (
        <div className='component-footer'>
            <p>
                The <em>pomodoro</em> technique is a method of time management through intervals.
                <br/><br/>
                By taking routine breaks, you stay <b>motivated</b> and therefore more <b>productive</b>.
                <br/><br/>
                <b>Tomatera</b> aims to help you keep track of your time by automatically switching between 25 and 5 minute intervals.
                <br/><br/>
                A gentle alarm will play at the end of each timer.
            </p>
            <a href='https://github.com/nicholasdly/tomatera'><i class="fa-brands fa-github"></i></a>
        </div>
    )
}
