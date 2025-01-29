//import iceCreamData from "../data/iceCreamData";
//console.log

import { IceCreamShopHeaderClassName,titleText, descriptionText } from "../data/iceCreamData";


function IceCreamShopHeader(){

// const IceCreamShopHeaderClassName = "ice-cream-header"
// const titleText = "Ice Cream Shop"
// const descriptionText = "Welcome to the best ice cream shop in the world!"

    return(
      <div className = {IceCreamShopHeaderClassName}>
         <h1>{titleText}</h1>
          <h2>{descriptionText}</h2>
        </div>
    )
  }

  export default IceCreamShopHeader;