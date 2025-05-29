import { useContext } from "preact/hooks";
import { styled } from "styled-components";
import { MystState } from "../mystState";

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
      margin-left: 0;
    }

    &.placeholder {
      margin-left: -7px;
      line-height: 33px;
      border-color: var(--border);
      font-style: normal;
      font-size: small;
      font-weight: 700;
      text-align: center;
      background-color: var(--button-bg);
    }
  }
`;

export const Avatar = ({ name, color, avatarUrl, userUrl }) => {
  const { options } = useContext(MystState);

  return (
    <a href={userUrl || "#"} target="_blank" rel="noreferrer">
      <img src={avatarUrl} key={name} title={name} class="avatar" style={`border-color: ${color}`} crossOrigin={options.avatarCrossorigin.value} />
    </a>
  );
};

const AvatarPlaceholder = ({ n, usernames }) => (
  <div class="avatar placeholder" title={usernames}>
    +{n}
  </div>
);

const Avatars = () => {
  const { collab } = useContext(MystState);
  const nUserAvatarsToShow = collab.value.users.value.length <= MAX_AVATARS ? collab.value.users.value.length : 3;

  return (
    <AvatarsWrapper n={Math.min(collab.value.users.value.length, MAX_AVATARS)}>
      {nUserAvatarsToShow < collab.value.users.value.length && (
        <AvatarPlaceholder
          n={collab.value.users.value.length - nUserAvatarsToShow}
          usernames={collab.value.users.value
            .filter((_, idx) => idx >= MAX_AVATARS - 1)
            .map((u) => u.name)
            .join(", ")}
        />
      )}
      {collab.value.users.value.slice(0, nUserAvatarsToShow).map((user) => (
        <Avatar key={user.name} {...user} />
      ))}
    </AvatarsWrapper>
  );
};

export default Avatars;
