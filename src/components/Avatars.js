import { html } from "htm/preact";
import { styled } from "styled-components";

const MAX_AVATARS = 4;

const AvatarsWrapper = styled.div`
  min-width: ${(props) => props.n * 35}px;

  .avatar {
    border-radius: 50%;
    margin-top: 5px;
    float: right;
    border: 3px solid;
    height: 35px;
    width: 35px;
    margin: 5px 0px 5px -7px;
    transition: 0.5s;

    &:hover {
      margin: 5px 0px 5px 0px;
    }

    &.placeholder {
      margin-left: -7px;
      line-height: 33px;
      color: var(--icon-color);
      border-color: var(--icon-border);
      font-style: normal;
      font-size: small;
      font-weight: 700;
      text-align: center;
      background-color: var(--icon-bg);
    }
  }
`;

export const Avatar = ({ login, color, avatarUrl }) =>
  html` <img src=${avatarUrl} key=${login} title=${login} class="avatar" style="border-color: ${color}" />`;

const AvatarPlaceholder = ({ n, usernames }) =>
  html` <${AvatarsWrapper} title=${usernames}>
    <span class="avatar placeholder">+${n}</span>
  <//>`;

const Avatars = ({ users }) => {
  const nUserAvatarsToShow = users.length <= MAX_AVATARS ? users.length : 3;

  return html` <${AvatarsWrapper} n=${Math.min(users.length, MAX_AVATARS)}>
    ${nUserAvatarsToShow < users.length
      ? html`<${AvatarPlaceholder}
          n=${users.length - nUserAvatarsToShow}
          usernames=${users
            .filter((_, idx) => idx >= MAX_AVATARS)
            .map((u) => u.login)
            .join(", ")}
        />`
      : ""}
    ${users.slice(0, nUserAvatarsToShow).map((user) => html`<${Avatar} ...${user} />`)}
  <//>`;
};

export default Avatars;
