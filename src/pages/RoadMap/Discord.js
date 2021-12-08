
import { Button } from './Button';
import './Discord.css'

const Discord = () => {
    return ( 
        <div className='discord--container'>
        <section className='discord-link'>
        <h2 className='discord-link-heading'>
          Join the Club!
        </h2>
        <p>The Discord is open. Claim your OG status for mint priorities and added benefits.<br></br> We will be releasing sneak peeks and organising multiple giveaways.</p>

            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={() => window.location.href = "https://discord.gg/WQpEx6wMqY"}
            >
            Join Our Discord 
            </Button>
        </section>
        
    </div> 
     );
}
 
export default Discord;