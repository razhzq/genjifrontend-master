
import { Button } from './Button'
import {
	DiscordContainer,
	DiscordBg,
	DiscordImg,
	DiscordContent,
	DiscordH1,
	DiscordP,
	DiscordBtnWrapper,
} from './DiscordElements'
import DiscordBanner from '../../assets/discordbanner.jpg'




const DiscordJoin = () => {
	return (
		<DiscordContainer>
			{/* <DiscordBg>
				<DiscordImg src={DiscordBanner} />
			</DiscordBg> */}
			<DiscordContent>
				<DiscordH1>
					Join the Club!
				</DiscordH1>
				<DiscordP>
					The Discord is open. Claim your OG status for mint priorities and added benefits.<br></br> We will be releasing sneak peeks and organising multiple giveaways.

				</DiscordP>
				<DiscordBtnWrapper>
					<Button onClick={() => window.location.href = "https://discord.gg/WQpEx6wMqY"}>
						Join our Discord
					</Button>
				</DiscordBtnWrapper>
			</DiscordContent>
		</DiscordContainer>
	);
}

export default DiscordJoin;