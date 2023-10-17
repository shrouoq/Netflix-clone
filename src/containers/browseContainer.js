import React , { useContext, useState , useEffect} from 'react'
import SelectProfile from './profile'
import { FirebaseContext } from './../context/context';
import Header from '../components/header/head';
import FooterContainer from './footer';
import logo from '../logo.svg'
import Loading from '../components/loading';
import Card from '../components/card/card';
import Play from '../components/Play/play';


export default function BrowseContainer({slides}) {

  const [category , setCategory] = useState('series')

  const [searchTerm , setSearchTerm] = useState('')

  const [slideRows , setSlideRows] = useState([])

  const [profile , setProfile] = useState({})

  const [loading,setLoading] = useState(true)

  const [active , setActive] = useState(false)

  const {firebase} = useContext(FirebaseContext)

  const user = firebase.auth().currentUser || {} 



  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[profile.displayName])

  useEffect(() => {
    setSlideRows(slides[category])
  },[category , slides])
  


    return profile.displayName ? (

       <>
            {
                loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />
            }

            <Header  src='joker1' br={false }>
                    <Header.Frame browseBage>

                        <Header.Box leftSide>       
                            <Header.Logo src={logo} alt='logo picture' to='/' />
                            <Header.TextLink onClick={() => setCategory('series')}>Series</Header.TextLink>
                            <Header.TextLink onClick={() => setCategory('films')}>films</Header.TextLink>
                        </Header.Box>

                        <Header.Box rigthSide>

                            <Header.SearchBox>

                                <Header.SearchIcon
                                    onClick={() => setActive(!active)}
                                >
                                    <img src='/images/icons/search.png' alt='icon' />
                                </Header.SearchIcon>
                                
                                <Header.Inputt 
                                    type='text' 
                                    placeholder='search films and series'
                                    active = {active === true}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.value)}
                                    />
                            </Header.SearchBox>

                            <Header.Box dropdownBox>

                                <Header.picture src={user.photoURL} />

                                <Header.Dropdown>
                                    <Header.Box nameBox> 
                                        <Header.picture src={user.photoURL} />
                                        <Header.Name>{user.displayName}</Header.Name>
                                    </Header.Box>
                                    <Header.Link onClick={() => firebase.auth().signOut()}>sign out</Header.Link>
                                </Header.Dropdown>
                                
                            </Header.Box>

                        </Header.Box>

                    </Header.Frame>

                    <Header.SelectContent>
                        
                        <Header.Inner>

                            <Header.Title>Watch Joker Now</Header.Title>

                            <Header.Content>
                            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
                            </Header.Content>

                            <Header.Btn type='button'>play</Header.Btn>

                        </Header.Inner>

                    </Header.SelectContent>
            </Header> 

            <Card.Group>
                {
                    slideRows.map(slideRow => (
                        <Card key={slideRow}>
                             
                             <Card.Row>
                                <Card.Title>{slideRow.title}</Card.Title>

                                <Card.ItemsRow>
                                    {
                                    slideRow.data.map(item => (
                                        <Card.Item item={item}>
                                            <Card.Picture src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />

                                            <Card.Data>
                                                <Card.DataTitle>{item.title}</Card.DataTitle>
                                                <Card.Text>{item.description}</Card.Text>
                                            </Card.Data>
                                        </Card.Item>
                                    ))
                                    }
                                </Card.ItemsRow>

                             </Card.Row>

                            <Card.Features category={category}>
                                <Play>
                                    <Play.Video src='/videos/bunny.mp4' />
                                    <Play.Button>play</Play.Button>
                                </Play>
                            </Card.Features>
                                    
                            
                        </Card>
                    ))
                }
            </Card.Group>

            

            <FooterContainer browse />
       </>
) 

    :       <SelectProfile user = {user} setProfile={setProfile} />

}
