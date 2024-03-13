import Health from "../../Components/Health page/Health";
import Men from "../../assets/Men.svg"
function MenHealth() {
  const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta."
  return (
    <div><Health title="Men Health" Svg={Men} text={text1}/></div>
  )
}

export default MenHealth