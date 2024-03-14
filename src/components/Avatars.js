import { html, h } from 'htm/preact';
import { styled } from 'styled-components';

const AvatarsWrapper = styled.div`
	width: 200px;

	.avatar {
		border-radius: 50%; 
		margin-top: 5px; 
		float: right; 
		border: 3px solid;
		margin: 5px 0px 5px 5px;
	}`

const Avatar = ({ login, color, avatarUrl }) => html`
  <img src=${avatarUrl}
       key=${login}
       class="avatar"
       style="border-color: ${color}"
  />`

const Avatars = ({ users }) => html`
  <${AvatarsWrapper}>
    ${users.map(user =>
      html`<${Avatar} ...${user}/>`
    )}
  <//>`;


export default Avatars