import { useTimeDifference } from "../hooks/useTimeDifference";
import ResolvedEntry from "./ResolvedEntry";

const ResolvedSuggestion = ({ suggestion }) => {
  const timeText = useTimeDifference(suggestion.appliedTimestamp);

  return (
    <ResolvedEntry
      user={suggestion.appliedBy}
      lineNumber={`${suggestion.fromLine}${suggestion.toLine !== suggestion.fromLine ? `-${suggestion.toLine}` : ""}`}
      action={`Suggestion ${suggestion.action === "accept" ? "accepted" : "rejected"} ${timeText}`}
      className="resolved-suggestion"
      lineText={
        <>
          <del>{suggestion.remove}</del>
          <ins>{suggestion.insert}</ins>
        </>
      }
    />
  );
};

export default ResolvedSuggestion;
