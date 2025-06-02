import styled from "styled-components";
import { Avatar } from "./Avatars";

const ResolvedLine = styled.p`
  font-size: 16px;
  padding: 10px 6px;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 95%;
  min-height: 22px;
`;

const LineNumber = styled.span`
  position: absolute;
  transform: translateX(calc(-100% - 24px));
  color: var(--editor-gutter-fg);
`;

const EntryContainer = styled.div`
  background-color: color-mix(in srgb, ${(props) => props.color}, white);
  color: black;
  border: 2px solid ${(props) => props.color};
  padding-top: 10px;
  margin-left: -1px;
  width: calc(100% - 3px);
  min-height: 32px;

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 22px;
    padding: 0 6px;

    & > div {
      display: flex;
      align-items: center;
    }

    & .avatar {
      border-radius: 50%;
      border: 3px solid;
      height: 28px;
      width: 28px;
      position: absolute;
      transform: translate(calc(-100% - 12px), -50%);
    }

    & .author {
      font-weight: bold;
      font-size: 12px;
      margin: 0;
    }

    & .action {
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      margin: 0;
    }
  }
`;

const ResolvedEntry = ({ user, lineNumber, action, className, lineText, options, children }) => {
  return (
    <div style="position: relative;" className={className}>
      <ResolvedLine>
        <LineNumber>{lineNumber}</LineNumber>
        {lineText}
      </ResolvedLine>
      <EntryContainer color={user.color}>
        <div className="topbar">
          <div>
            <Avatar {...user} />
            <span className="author">{user.name}</span>
          </div>
          <div>
            <span className="action">{action}</span>
            {options}
          </div>
        </div>
        {children}
      </EntryContainer>
    </div>
  );
};

export default ResolvedEntry;
