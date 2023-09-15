export const LoadingSpinner = ({
  onBackground = false,
}: {
  onBackground?: boolean;
}) => {
  return (
    <span
      className={`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-y-transparent ${
        onBackground ? "border-x-primary" : "border-x-white"
      } `}
    />
  );
};
