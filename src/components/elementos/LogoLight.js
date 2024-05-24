import Logo from "../../Logotipo Panadería Elegante Marrón.png"

const LogoLight = () =>{
    return (
        <>
      <img
                className="cardlogo"
                alt="Kairos Tower"
                src={Logo}
                style={{
                  height:300,
                  width: 350,
                }}
              />
        </>
    );
}
export default LogoLight;