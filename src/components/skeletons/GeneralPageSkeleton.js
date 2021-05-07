import ContentLoader from "react-content-loader";

export default function GeneralPageSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={"100vw"}
      height={"100vh"}
      viewBox="0 0 100% 100"
      backgroundColor="#1A2133"
      foregroundColor="#1f283d"
    >
      <rect x="3%" y="5%" rx="9" ry="9" width="94%" height="45%" />
      <rect x="3%" y="54%" rx="10" ry="10" width="15%" height="20" />
      <rect x="3%" y="60%" rx="9" ry="9" width="25%" height="28%" />
      <rect x="29%" y="60%" rx="9" ry="9" width="25%" height="28%" />
      <rect x="55%" y="60%" rx="9" ry="9" width="25%" height="28%" />
      <rect x="81%" y="60%" rx="9" ry="9" width="25%" height="28%" />
    </ContentLoader>
  );
}
