import React from "react";
import ContentLoader from "react-content-loader";

export const SceletonPicture = () => (
  <ContentLoader
    speed={3}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#ffffff"
    foregroundColor="#4b4fb9"
  >
    <rect x="0" y="0" rx="8" ry="8" width="400" height="400" />
  </ContentLoader>
);

