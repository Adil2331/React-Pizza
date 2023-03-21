import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="110" cy="110" r="110" /> 
    <rect x="0" y="240" rx="11" ry="11" width="225" height="25" /> 
    {/* <rect x="143" y="375" rx="0" ry="0" width="6" height="2" />  */}
    {/* <rect x="0" y="375" rx="0" ry="0" width="9" height="0" />  */}
    <rect x="0" y="290" rx="10" ry="10" width="225" height="65" /> 
    <rect x="0" y="375" rx="10" ry="10" width="71" height="30" /> 
    {/* <rect x="0" y="375" rx="0" ry="0" width="6" height="6" />  */}
    <rect x="117" y="375" rx="21" ry="21" width="105" height="30" />
  </ContentLoader>
)

export default MyLoader