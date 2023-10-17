import React , { useState , useContext , createContext } from "react"
import ReactDOM from "react-dom";
import { Container
        ,OverLay
        ,Inner
        ,Button
} from "./styls/style";

const PlayContext = createContext();

export default function Play({children,...restProps}) {
    const [play,setPlay] = useState(false)
  return (
    <PlayContext.Provider value={{play,setPlay}}>
        <Container {...restProps}>{children}</Container>
    </PlayContext.Provider>
  )
}

Play.Video = function VidPlay({src,...restProps}){
        const {play,setPlay} = useContext(PlayContext);
    return (
        play === true ? 

            ReactDOM.createPortal(
                <OverLay onClick={() => setPlay(false)}>
                    <Inner>
                        <video id="play-video" controls>
                            <source src={src} type="video/mp4" />
                        </video>

                        <img src="/images/icons/close.png" />
                    </Inner>
                </OverLay>,
                document.body
            )
                   
        :null
    )
}

Play.Button = function Btn({children,...restProps}){
    const {setPlay} = useContext(PlayContext)
    return <Button onClick={() => setPlay(true)}>
        {children}
    </Button>
}




