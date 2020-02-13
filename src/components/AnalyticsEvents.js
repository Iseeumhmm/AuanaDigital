import ReactGA from "react-ga";

const Event = ( catagory ) => {
    // ReactGA.event({
    //     category:catagory,
    //     action: "Clicked"
    // })
    console.log('GA - ', catagory)
}

export default Event