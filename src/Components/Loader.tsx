const LoaderStyle: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-2)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap-s)",
  height: "var(--gap-s)",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};

const Loader = () => {
  return (
    <div style={LoaderStyle}>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
