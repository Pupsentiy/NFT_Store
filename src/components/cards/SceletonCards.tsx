import React from "react"
import ContentLoader from "react-content-loader"


export const SceletonCards = () => (
  <ContentLoader 
    speed={3}
    width={373}
    height={492}
    viewBox="0 0 373 492"
    backgroundColor="#ffffff"
    foregroundColor="#4b4fb9"
  >
    <rect x="219" y="240" rx="0" ry="0" width="0" height="1" /> 
    <rect x="347" y="230" rx="0" ry="0" width="1" height="1" /> 
    <rect x="0" y="0" rx="24" ry="24" width="373" height="472" />
  </ContentLoader>
)