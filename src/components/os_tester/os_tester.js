import { RoutersContainer } from "../routers/routers_container"

const OsTester = () => {
    if ((navigator.appVersion.indexOf('iPhone') !== -1) || (navigator.appVersion.indexOf('iPad') !== -1)) {
        return (
            <div>
                <h3>Korzystasz ze Smartfona bądź Tableta</h3> 
                <p>Umowę podpiszesz tylko na komputerze bądź laptopie!</p>
                <a href="https://cg-olimpic.pl">CG-OlIMPIC.PL</a>
            </div>
        )
    } else {
        return (
            <div className='content-container'>
                <RoutersContainer />
            </div>
            
        )
    }



    // return (

    // navigator.appVersion.indexOf('iPhone')  === -1
    //   ? <div className='content-container'>
    //         <RoutersContainer />
    //     </div>
    //   : <div>
    //       <h3>Korzystasz ze Smartfona bądź Tableta</h3> 
    //       <p>Umowę podpiszesz tylko na komputerze bądź laptopie!</p>
    //       <a href="https://cg-olimpic.pl">CG-OlIMPIC.PL</a>
    //     </div>
    // )
}

export default OsTester


