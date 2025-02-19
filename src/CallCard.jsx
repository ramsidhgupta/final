// import "./LifeComp.css";
import  "./TechCard.css";
import slide_image_1 from "./images/board.jpg";
import slide_image_2 from "./images/chip1.jpg";
import slide_image_3 from "./images/chip2.jpg";
import slide_image_4 from "./images/chip3.jpg";


function CallCard() {

    const CardData = [
        {
          id: 1,
          image:slide_image_1,
          title: "ASIC Development",
          details: "TechsoC Technologies provides services in areas of RTL development, FPGA implementation, Module and full-chip level verification, Pre and Post silicon validation, Verification IP development in Verilog, SystemVerilog using UVM, OVM, etc.",
        },
        {
          id: 2,
          image:slide_image_2,
          title: "ASIC Physical Design",
          details: "TechsoC Technologies provides all services in area of Physical Design. These services include Top and block level physical implementation, Analog block integratin, Floorplanning, Clock tree synthesis, Place & Route, Timing closure, Physical verification, IR Drop/EM/SI analysis and closure, etc.",
        },
        {
            id: 3,
            image:slide_image_3,
            title: "DFT",
            details: "We have experience across various DFT Techniques like Scan, ATPG, Bist, and Boundary Scan, then make TechsoC your first choice.",
          },
          {
            id: 4,
            image:slide_image_4,
            title: "Emulation",
            details: "Our team of competent engineers working in the STA Emulation and Validation team are experts in prototyping and emulating complex IC designs for streamlined system debugging and software bring-up.",
          },
      ];
    
      console.log(CardData);

  return (
    <>
 
      {CardData.map((card) => (
        <div key={card.id}>
          <div className="center1">
            <div ref={backgroundRef} className="front-face">
            <div className="img1 equal-size">{card.image}</div>

              <div className="contents1 front">
                <p className=""> {card.title}</p>
              </div>
            </div>
            <div className="back-face">
              <div className="contents1 back">
                <p className="">{card.details}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>  

  );
}

export default CallCard;
