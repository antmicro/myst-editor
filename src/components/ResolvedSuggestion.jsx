import { useEffect, useRef } from "preact/hooks";
import styled from "styled-components";
import { Avatar } from "./Avatars";
import { useSignal } from "@preact/signals";

const TextChanges = styled.p`
  font-size: 16px;
  padding: 10px 6px;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 95%;
  min-height: 22px;
`;

const SuggestionContainer = styled.div`
  background-color: color-mix(in srgb, ${(props) => props.color}, white);
  color: black;
  border: 2px solid ${(props) => props.color};
  padding-top: 10px;
  margin-left: -1px;
  width: calc(100% - 3px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 22px;
  padding: 0 6px;
  min-height: 48px;
`;

const AppliedBy = styled.h2`
  font-weight: bold;
  font-size: 12px;
  margin: 0;
`;

const AppliedAt = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin: 0;
  margin-right: 25px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;

  & .avatar {
    border-radius: 50%;
    border: 3px solid;
    height: 28px;
    width: 28px;
    position: absolute;
    top: 50%;
    left: -6px;
    transform: translate(calc(-100% - 12px), -50%);
  }
`;

const LineNumbers = styled.span`
  position: absolute;
  transform: translateX(calc(-100% - 24px));
  color: var(--editor-gutter-fg);
`;

const formatter = new Intl.RelativeTimeFormat("en", { style: "long" });

const ResolvedSuggestion = ({ suggestion }) => {
  const difference = useSignal({ amount: 0, unit: "second" });
  const timer = useRef(null);

  function setTimeDifference() {
    const secondDifference = Math.floor((Date.now() - suggestion.appliedTimestamp) / 1000);
    const minuteDifference = Math.floor(secondDifference / 60);
    const hourDifference = Math.floor(minuteDifference / 60);
    const dayDifference = Math.floor(hourDifference / 24);
    const monthDifference = Math.floor(dayDifference / 30);
    const yearDifference = Math.floor(monthDifference / 12);

    if (minuteDifference >= 60) {
      clearInterval(timer.current);
    }

    if (secondDifference < 60) {
      difference.value = { amount: secondDifference, unit: "second" };
    } else if (minuteDifference < 60) {
      difference.value = { amount: minuteDifference, unit: "minute" };
    } else if (hourDifference < 24) {
      difference.value = { amount: hourDifference, unit: "hour" };
    } else if (dayDifference < 30) {
      difference.value = { amount: dayDifference, unit: "day" };
    } else if (monthDifference < 12) {
      difference.value = { amount: monthDifference, unit: "month" };
    } else {
      difference.value = { amount: yearDifference, unit: "year" };
    }
  }

  useEffect(() => {
    timer.current = setInterval(setTimeDifference, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div style="position: relative;">
      <TextChanges>
        <LineNumbers>
          {suggestion.fromLine}
          {suggestion.toLine !== suggestion.fromLine ? `-${suggestion.toLine}` : ""}
        </LineNumbers>
        <span>
          <del>{suggestion.remove}</del>
          <ins>{suggestion.insert}</ins>
        </span>
      </TextChanges>
      <SuggestionContainer className="resolved-suggestion" color={suggestion.appliedBy.color}>
        <FlexRow style="position: relative;">
          <Avatar
            login={suggestion.appliedBy.name}
            color={suggestion.appliedBy.color}
            avatarUrl={suggestion.appliedBy.avatarUrl}
            userUrl={suggestion.appliedBy.userUrl}
          />
          <AppliedBy>{suggestion.appliedBy.name}</AppliedBy>
        </FlexRow>
        <FlexRow>
          <AppliedAt>
            Suggestion {suggestion.action === "accept" ? "accepted" : "rejected"} {formatter.format(-difference.value.amount, difference.value.unit)}
          </AppliedAt>
        </FlexRow>
      </SuggestionContainer>
    </div>
  );
};

export default ResolvedSuggestion;
