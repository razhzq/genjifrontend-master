import styled from 'styled-components'


export const ImageContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    z-index: 1;
    height: 200px;
    width: 90%;
	max-width: 1100px;
	margin: 0 auto;
    margin-top: 150px;
	@media screen and (max-width: 600px) {
		height: auto;
	}
`

export const ImageDiv = styled.div`
    width: 100%;
	height: 30%;
	@media screen and (max-width: 600px) {
		height: auto;
	}
`

export const Img = styled.img`
    width: 100%;
	max-width: 500px;

`