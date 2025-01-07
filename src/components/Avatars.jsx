import { styled } from "styled-components";

const MAX_AVATARS = 4;

const AvatarsWrapper = styled.div`
  min-width: ${(props) => props.n * 35}px;
  margin-right: 10px;

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
      margin-left: 0;
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

export const Avatar = ({ login, color, avatarUrl, userUrl }) => (
  <a href={userUrl || "#"} target="_blank">
    <img src={avatarUrl} key={login} title={login} class="avatar" style={`border-color: ${color}`} />
  </a>
);

const AvatarPlaceholder = ({ n, usernames }) => (
  <div class="avatar placeholder" title={usernames}>
    +{n}
  </div>
);

const Avatars = ({ users }) => {
  const nUserAvatarsToShow = users.length <= MAX_AVATARS ? users.length : 3;

  return (
    <AvatarsWrapper n={Math.min(users.length, MAX_AVATARS)}>
      {nUserAvatarsToShow < users.length && (
        <AvatarPlaceholder
          n={users.length - nUserAvatarsToShow}
          usernames={users
            .filter((_, idx) => idx >= MAX_AVATARS - 1)
            .map((u) => u.login)
            .join(", ")}
        />
      )}
      {users.slice(0, nUserAvatarsToShow).map((user) => (
        <Avatar key={user.login} {...user} />
      ))}
    </AvatarsWrapper>
  );
};

export default Avatars;
