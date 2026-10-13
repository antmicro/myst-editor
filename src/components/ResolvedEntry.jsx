import styled from "styled-components";

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

const VerticalSparator = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--gray-600);
  margin-bottom: 0;
`;

const EntryContainer = styled.div`
  background-color: color-mix(in srgb, ${(props) => props.color}, white);
  color: black;
  padding-top: 10px;
  margin-left: -1px;
  width: calc(100% - 3px);
  min-height: 32px;

  .topbar {
    display: flex;
    justify-content: flex-end;
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

const ResolvedEntry = ({ lineNumber, action, className, lineText, options, children }) => {
  return (
    <div style="position: relative;" className={className}>
      <ResolvedLine>
        <LineNumber>{lineNumber}</LineNumber>
        {lineText}
      </ResolvedLine>
      <EntryContainer>
        <div className="topbar">
          <div>
            <span className="action">{action}</span>
            {options}
          </div>
        </div>
        {children}
      </EntryContainer>
      <VerticalSparator />
    </div>
  );
};

export default ResolvedEntry;
