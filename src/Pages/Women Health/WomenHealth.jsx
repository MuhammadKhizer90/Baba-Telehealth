import Health from "../../Components/Health page/Health";
import Women from "../../assets/women.svg"
function WomenHealth() {
  const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vitae curabitur lorem sit porta."
  return (
    <div><Health title="Women Health" Svg={Women} text={text1}/></div>
  )
}

export default WomenHealth